import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const link = style({
	margin: 'calc(0.25rem + 2px)',
	padding: vars.space.xs,
	color: vars.colors.accent,
	backgroundColor: vars.colors.bg,
	fontFamily: vars.fonts.ui,
	fontWeight: vars.fontWeights.base,
	fontSize: vars.fontSizes.m,
	lineHeight: vars.lineHeights.heading,
	textDecoration: 'none',
	textTransform: 'uppercase',
	letterSpacing: vars.letterSpacings.uppercase,
	transition: vars.transitions.hover,
	transitionProperty: 'all',
	borderRadius: vars.radii.button,
	':hover': {
		border: vars.borders.input,
		borderWidth: '0 0 2px 0',
		cursor: 'pointer',
	},
	':active': {
		border: vars.borders.input,
		borderWidth: '0 0 2px 0',
	},
	':focus': {
		border: 0,
		outline: vars.borders.input,
		outlineColor: vars.colors.accent,
		outlineOffset: vars.focusOutlineOffset,
	},
});

export const linkCurrent = style([
	{
		borderColor: vars.colors.accent,
		border: vars.borders.input,
		boxShadow: vars.shadows.menu,
		fontWeight: vars.fontWeights.bold,
		':hover': {
			color: vars.colors.bg,
			backgroundColor: vars.colors.accent,
			borderColor: vars.colors.accent,
			borderWidth: 2,
		},
		':focus': {
			outline: 0,
			border: vars.borders.input,
			color: vars.colors.bg,
			backgroundColor: vars.colors.accent,
			borderColor: vars.colors.accent,
			borderWidth: 2,
		},
	},
]);
