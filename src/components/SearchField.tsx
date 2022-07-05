import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { VisuallyHidden } from 'tamia';

type Props = {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = styled.input`
	width: 100%;
	padding: ${(props) => props.theme.space.s};
	font-family: ${(props) => props.theme.fonts.ui};
	font-size: ${(props) => props.theme.fontSizes.l};
	font-weight: ${(props) => props.theme.fontWeights.ui};
	color: ${(props) => props.theme.colors.base};
	border: ${(props) => props.theme.borders.input};
	border-color: ${(props) => props.theme.colors.base};
	border-radius: ${(props) => props.theme.radii.button};
`;

export function SearchField({ value, onChange }: Props) {
	return (
		<form>
			<label>
				<VisuallyHidden>Search recipes</VisuallyHidden>
				<Input placeholder="Search recipes" value={value} onChange={onChange} />
			</label>
		</form>
	);
}
