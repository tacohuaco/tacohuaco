import styled from 'styled-components';

export const Input = styled.input`
	width: 100%;
	height: 2em;
	padding: ${(p) => p.theme.space.xxs} ${(p) => p.theme.space.s};
	font-family: ${(props) => props.theme.fonts.ui};
	font-size: ${(props) => props.theme.fontSizes.m};
	font-weight: ${(props) => props.theme.fontWeights.ui};
	background-color: ${(p) => p.theme.colors.bg};
	color: ${(p) => p.theme.colors.base};
	border: ${(props) => props.theme.borders.input};
	border-color: ${(props) => props.theme.colors.base};
	border-radius: ${(props) => props.theme.radii.button};
	appearance: none;

	&:focus {
		outline: 0;
		border-color: ${(p) => p.theme.colors.hover};
	}
`;
