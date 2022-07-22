import styled from 'styled-components';

export const Input = styled.input`
	width: 100%;
	height: 2em;
	padding: ${(p) => p.theme.space.xxs} ${(p) => p.theme.space.s};
	font-family: ${(p) => p.theme.fonts.ui};
	font-size: ${(p) => p.theme.fontSizes.m};
	font-weight: ${(p) => p.theme.fontWeights.ui};
	background-color: ${(p) => p.theme.colors.bg};
	color: ${(p) => p.theme.colors.base};
	border: ${(p) => p.theme.borders.input};
	border-color: ${(p) => p.theme.colors.base};
	border-radius: ${(p) => p.theme.radii.button};
	appearance: none;

	&:focus {
		outline: 0;
		border-color: ${(p) => p.theme.colors.hover};
	}
`;
