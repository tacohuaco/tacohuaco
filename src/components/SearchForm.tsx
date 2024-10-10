import { useCombobox } from 'downshift';
import { matchSorter } from 'match-sorter';
import { useEffect, useState, type FormEventHandler } from 'react';
import { Box } from './Box';
import { Input } from './Input';
import { VisuallyHidden } from './VisuallyHidden';
import { useIsBrowser } from '../hooks/useIsBrowser';

const MAX_ITEMS_TO_SHOW = 12;

type Props = {
	items: readonly string[];
	value: string;
	onChange: (value?: string) => void;
};

const getItemsToShow = (items: readonly string[], value: string) => {
	if (value === '') {
		return [];
	}

	const filteredItems = matchSorter(items, value);

	if (filteredItems.length === items.length) {
		return [];
	}

	return filteredItems.slice(0, MAX_ITEMS_TO_SHOW);
};

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
		selectedItem: value,
		onInputValueChange: (x) => {
			onChange(x.inputValue);
		},
		onSelectedItemChange: (x) => {
			onChange(x.inputValue);
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
						backgroundColor: 'bg',
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
							const { key, ...itemProps } = getItemProps({
								refKey: 'innerRef',
								key: item,
								item,
								index,
							});
							return (
								<Box
									css={{
										paddingBlock: 'xxs',
										paddingInline: 's',
										fontFamily: 'ui',
										fontSize: 'm',
										fontWeight: 'ui',
										color: isHighlighted ? 'bg' : 'base',
										backgroundColor: isHighlighted ? 'accent' : 'transparent',
										cursor: 'pointer',
									}}
									key={key}
									{...itemProps}
								>
									{item}
								</Box>
							);
						})}
				</Box>
			</Box>
		</form>
	);
}
