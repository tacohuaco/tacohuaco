import { useCombobox } from 'downshift';
import { matchSorter } from 'match-sorter';
import { useEffect, useState, type FormEventHandler } from 'react';
import { Box } from './Box';
import { Input } from './Input';
import { VisuallyHidden } from './VisuallyHidden';
import { HygraphImage } from './HygraphImage';
import { Flex } from './Flex';
import { useIsBrowser } from '../hooks/useIsBrowser';
import type { AutocompleteItem } from '../hooks/useSearch';
import { Stack } from './Stack';

const MAX_ITEMS_TO_SHOW = 12;

type Props = {
	items: readonly AutocompleteItem[];
	value: string;
	onChange: (value?: string) => void;
};

const getItemsToShow = (items: readonly AutocompleteItem[], value: string) => {
	if (value === '') {
		return [];
	}

	const filteredItems = matchSorter(items, value, {
		keys: ['value'],
		// Stricter matcher to reduce the number of unrelated matches (such as
		// "cochinita con achiote" for "taco")
		threshold: matchSorter.rankings.WORD_STARTS_WITH,
	});

	if (filteredItems.length === items.length) {
		return [];
	}

	return filteredItems.slice(0, MAX_ITEMS_TO_SHOW);
};

function ItemContainer({
	isHighlighted,
	...props
}: { isHighlighted: boolean } & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<Flex
			css={{
				paddingBlock: 'xxs',
				paddingInline: 's',
				fontFamily: 'ui',
				fontSize: 'm',
				fontWeight: 'ui',
				color: isHighlighted ? 'background' : 'base',
				backgroundColor: isHighlighted ? 'accent' : 'transparent',
				cursor: 'pointer',
				alignItems: 'center',
				gap: 's',
			}}
			{...props}
		/>
	);
}

export function SearchForm({ items, value, onChange }: Props) {
	const [isEnabled, setIsEnabled] = useState(false);
	const isBrowser = useIsBrowser();

	useEffect(() => {
		// Enable the input in two steps to avoid hydration warning
		setIsEnabled(isBrowser);
	}, [isBrowser]);

	const itemsToShow = getItemsToShow(items, value);

	const {
		getLabelProps,
		getInputProps,
		getMenuProps,
		getItemProps,
		highlightedIndex,
		closeMenu,
		isOpen,
	} = useCombobox({
		items: itemsToShow,
		inputValue: value,
		selectedItem: null,
		itemToString: (item) => item?.value ?? '',
		onInputValueChange: ({ inputValue }) => {
			onChange(inputValue ?? '');
		},
		onSelectedItemChange: ({ selectedItem }) => {
			if (selectedItem === null) {
				return;
			}

			if (selectedItem.type === 'recipe' && selectedItem.recipe) {
				window.location.href = `${window.location.origin}/recipes/${selectedItem.recipe.slug}/`;
				return;
			}

			onChange(selectedItem.value);
		},
	});
	const handleSubmit: FormEventHandler = (event) => {
		closeMenu();
		event.preventDefault();
	};

	return (
		<form role="search" onSubmit={handleSubmit}>
			<VisuallyHidden as="label" {...getLabelProps()}>
				Search recipes
			</VisuallyHidden>
			<Box position="relative">
				<Input
					css={{
						height: 'auto',
						padding: 's',
						fontSize: 'l',
						transitionDuration: 'hover',
						transitionTimingFunction: 'hover',
						transitionProperty: 'all',
						'&::-webkit-search-decoration': { display: 'none' },
						'&::-webkit-search-cancel-button': { display: 'none' },
						'&::-webkit-search-results-button': { display: 'none' },
						'&::-webkit-search-results-decoration': { display: 'none' },
					}}
					disabled={!isEnabled}
					{...getInputProps({
						refKey: 'innerRef',
						type: 'search',
						placeholder: 'Search recipes',
					})}
				/>
				<Box
					{...getMenuProps({ refKey: 'innerRef' })}
					css={{
						position: 'absolute',
						zIndex: 99,
						left: 0,
						right: 0,
						marginTop: 's',
						padding: 'xs',
						backgroundColor: 'background',
						border: 'input',
						borderColor: 'accent',
						borderRadius: 'button',
						boxShadow: 'popover',
						transitionDuration: 'fade',
						transitionTimingFunction: 'fade',
						transitionProperty: 'all',
						willChange: 'opacity',
						_empty: {
							opacity: 0,
						},
					}}
				>
					{isOpen &&
						itemsToShow.map((item, index) => {
							const isHighlighted = highlightedIndex === index;
							const itemProps = getItemProps({
								refKey: 'innerRef',
								item,
								index,
							});

							if (item.type === 'recipe' && item.recipe) {
								const hasImage = item.recipe.images.length > 0;
								return (
									<ItemContainer
										key={item.value}
										isHighlighted={isHighlighted}
										{...itemProps}
									>
										{hasImage && (
											<Box
												css={{
													width: 36,
													height: 36,
													flexShrink: 0,
													backgroundColor: 'light',
												}}
											>
												<HygraphImage
													handle={item.recipe.images[0].handle}
													width={36}
													height={36}
													quality={30}
													alt=""
													loading="lazy"
													css={{
														width: '100%',
														height: '100%',
														objectFit: 'cover',
													}}
												/>
											</Box>
										)}
										<Stack>
											<Box>{item.recipe.title}</Box>
											<Box mt="-xs" css={{ fontSize: 'xs' }}>
												Open recipe
											</Box>
										</Stack>
									</ItemContainer>
								);
							}

							return (
								<ItemContainer
									key={item.value}
									isHighlighted={isHighlighted}
									{...itemProps}
								>
									{item.value}
								</ItemContainer>
							);
						})}
				</Box>
			</Box>
		</form>
	);
}
