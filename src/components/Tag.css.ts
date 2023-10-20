import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const link = style({
	display: 'inline-block',
	paddingTop: '0.1ex',
	paddingInline: vars.space.xs,
	backgroundColor: vars.colors.light,
	border: 0,
	fontFamily: vars.fonts.ui,
	fontSize: vars.fontSizes.s,
	lineHeight: vars.lineHeights.base,
	textDecoration: 'none',
	color: vars.colors.dim,
	borderRadius: vars.radii.base,
	whiteSpace: 'nowrap',
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
