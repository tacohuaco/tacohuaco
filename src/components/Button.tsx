import styled from 'styled-components';

export const Button = styled.button`
	display: inline-block;
	width: 1.6rem;
	height: 1.6rem;
	padding: 0;
	border: ${(p) => p.theme.borders.input};
	border-color: ${(p) => p.theme.colors.accent};
	border-radius: ${(p) => p.theme.radii.round};
	text-align: center;
	font-family: ${(p) => p.theme.fonts.base};
	font-size: ${(p) => p.theme.fontSizes.m};
	line-height: 1;
	color: ${(p) => p.theme.colors.accent};
	background: transparent;

	@media (any-hover: hover) {
		width: 1.2rem;
		height: 1.2rem;
		font-size: ${(p) => p.theme.fontSizes.s};
	}

	&:hover,
	&:active {
		cursor: pointer;
		color: ${(p) => p.theme.colors.bg};
		background-color: ${(p) => p.theme.colors.accent};
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
