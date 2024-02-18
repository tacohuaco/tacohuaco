import clsx from 'clsx';
import { type FormEventHandler } from 'react';
import { useCombobox } from 'downshift';
import { matchSorter } from 'match-sorter';
import { VisuallyHidden, Input } from '.';
import {
	combobox,
	input,
	menu,
	searchItem,
	searchItemHighlighted,
} from './SearchForm.css';
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
	const isBrowser = useIsBrowser();
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
			<div className={combobox}>
				<Input
					className={input}
					disabled={!isBrowser}
					{...getInputProps({
						type: 'search',
						placeholder: 'Search recipes',
					})}
				/>
				<div className={menu} {...getMenuProps()}>
					{isOpen &&
						itemsToShow.map((item, index) => (
							<div
								className={clsx(
									searchItem,
									highlightedIndex === index && searchItemHighlighted
								)}
								key={item}
								{...getItemProps({
									item,
									index,
									key: item,
								})}
							>
								{item}
							</div>
						))}
				</div>
			</div>
		</form>
	);
}
