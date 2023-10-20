import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const logo = style({ marginTop: -11 });

export const text = style({
	marginBottom: vars.space.xs,
	color: vars.colors.accent,
	backgroundColor: vars.colors.bg,
	fontFamily: vars.fonts.ui,
	fontWeight: vars.fontWeights.bold,
	fontSize: vars.fontSizes.m,
	lineHeight: vars.lineHeights.heading,
	textDecoration: 'none',
	textTransform: 'uppercase',
	letterSpacing: vars.letterSpacings.uppercase,
	transition: vars.transitions.hover,
	transitionProperty: 'all',
	borderRadius: vars.radii.button,
});

globalStyle(`a:active ${text}, a:hover ${text}`, {
	border: vars.borders.input,
	borderWidth: '0 0 2px 0',
});
