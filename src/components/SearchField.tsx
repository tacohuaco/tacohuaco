import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { VisuallyHidden } from 'tamia';
import { Input } from './Input';

type Props = {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = styled(Input)`
	height: auto;
	padding: ${(props) => props.theme.space.s};
	font-size: ${(props) => props.theme.fontSizes.l};
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
`;

export function SearchField({ value, onChange }: Props) {
	return (
		<form>
			<label>
				<VisuallyHidden>Search recipes</VisuallyHidden>
				<SearchInput
					placeholder="Search recipes"
					value={value}
					onChange={onChange}
				/>
			</label>
		</form>
	);
}
