import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const input = style({
	height: 'auto',
	padding: vars.space.s,
	fontSize: vars.fontSizes.l,
	transition: vars.transitions.hover,
	transitionProperty: 'all',
	selectors: {
		'&::-webkit-search-decoration': { display: 'none' },
		'&::-webkit-search-cancel-button': { display: 'none' },
		'&::-webkit-search-results-button': { display: 'none' },
		'&::-webkit-search-results-decoration': { display: 'none' },
	},
});

export const combobox = style({
	position: 'relative',
});

export const menu = style({
	position: 'absolute',
	zIndex: 99,
	left: 0,
	right: 0,
	marginTop: vars.space.s,
	padding: vars.space.xs,
	backgroundColor: vars.colors.bg,
	border: vars.borders.input,
	borderColor: vars.colors.accent,
	borderRadius: vars.radii.button,
	boxShadow: vars.shadows.popover,
	transition: vars.transitions.fade,
	transitionProperty: 'all',
	willChange: 'opacity',
	':empty': {
		opacity: 0,
	},
});

export const searchItem = style({
	paddingBlock: vars.space.xxs,
	paddingInline: vars.space.s,
	fontFamily: vars.fonts.ui,
	fontSize: vars.fontSizes.m,
	fontWeight: vars.fontWeights.ui,
	color: vars.colors.base,
	backgroundColor: 'transparent',
});

export const searchItemHighlighted = style({
	color: vars.colors.bg,
	backgroundColor: vars.colors.accent,
});
