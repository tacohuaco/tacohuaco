import styled from 'styled-components';

export const Button = styled.button`
	display: inline-block;
	width: 1.2rem;
	height: 1.2rem;
	padding: 0 ${(p) => p.theme.space.xs} 0.2rem;
	border: 1px solid;
	border-radius: ${(p) => p.theme.radii.button};
	text-align: center;
	font-family: ${(p) => p.theme.fonts.base};
	font-size: ${(p) => p.theme.fontSizes.s};
	color: ${(p) => p.theme.colors.base};
	background: transparent;

	&:hover,
	&:active {
		cursor: pointer;
		color: ${(p) => p.theme.colors.hover};
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${(p) => p.theme.colors.bg},
			0 0 0 4px ${(p) => p.theme.colors.focus};
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&::-moz-focus-inner {
		border: 0;
	}
`;
