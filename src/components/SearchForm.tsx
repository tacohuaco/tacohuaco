import React from 'react';
import styled from 'styled-components';
import { VisuallyHidden } from 'tamia';
import { useCombobox } from 'downshift';
import { matchSorter } from 'match-sorter';
import { Input } from './Input';

const MAX_ITEMS_TO_SHOW = 12;

type Props = {
	items: readonly string[];
	value: string;
	onChange: (value?: string) => void;
};

const SearchInput = styled(Input)`
	height: auto;
	padding: ${(p) => p.theme.space.s};
	font-size: ${(p) => p.theme.fontSizes.l};
	&::-webkit-search-decoration,
	&::-webkit-search-cancel-button,
	&::-webkit-search-results-button,
	&::-webkit-search-results-decoration {
		display: none;
	}
`;

const SearchCombobox = styled.div`
	position: relative;
`;

const SearchMenu = styled.div`
	position: absolute;
	z-index: 99;
	left: 0;
	right: 0;
	margin-top: ${(p) => p.theme.space.xs};
	padding: ${(p) => p.theme.space.xs} 0;
	background-color: ${(p) => p.theme.colors.bg};
	border: ${(p) => p.theme.borders.thin};
	border-color: ${(p) => p.theme.colors.light};
	border-radius: ${(p) => p.theme.radii.button};
	box-shadow: ${(p) => p.theme.shadows.popover};
	transition: all 0.15s ease-out;
	will-change: opacity;

	&:empty {
		opacity: 0;
	}
`;

const SearchItem = styled.div<{ highlighted: boolean }>`
	padding: ${(p) => p.theme.space.xxs} ${(p) => p.theme.space.s};
	font-family: ${(p) => p.theme.fonts.ui};
	font-size: ${(p) => p.theme.fontSizes.m};
	font-weight: ${(p) => p.theme.fontWeights.ui};
	color: ${(p) => (p.highlighted ? p.theme.colors.bg : p.theme.colors.base)};
	background-color: ${(p) =>
		p.highlighted ? p.theme.colors.accent : 'transparent'};
`;

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
	const itemsToShow = getItemsToShow(items, value);
	const {
		getComboboxProps,
		getLabelProps,
		getInputProps,
		getMenuProps,
		getItemProps,
		highlightedIndex,
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
	return (
		<form role="search">
			<VisuallyHidden as="label" {...getLabelProps()}>
				Search recipes
			</VisuallyHidden>
			<SearchCombobox {...getComboboxProps()}>
				<SearchInput
					{...getInputProps({
						type: 'search',
						placeholder: 'Search recipes',
					})}
				/>
				<SearchMenu {...getMenuProps()}>
					{isOpen &&
						itemsToShow.map((item, index) => (
							<SearchItem
								key={item}
								highlighted={highlightedIndex === index}
								{...getItemProps({
									item,
									index,
									key: item,
								})}
							>
								{item}
							</SearchItem>
						))}
				</SearchMenu>
			</SearchCombobox>
			<VisuallyHidden as="div">
				<button type="submit">Search</button>
			</VisuallyHidden>
		</form>
	);
}
