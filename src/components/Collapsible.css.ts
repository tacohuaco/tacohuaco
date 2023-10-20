import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const button = style({
	fontFamily: vars.fonts.ui,
	fontSize: vars.fontSizes.s,
	lineHeight: vars.lineHeights.base,
	textDecoration: 'underline',
	color: vars.colors.base,
	':hover': {
		color: vars.colors.hover,
		cursor: 'pointer',
	},
	':active': {
		color: vars.colors.hover,
	},
	':focus': {
		outline: vars.borders.focus,
		outlineColor: vars.colors.focus,
		outlineOffset: vars.focusOutlineOffset,
	},
});
