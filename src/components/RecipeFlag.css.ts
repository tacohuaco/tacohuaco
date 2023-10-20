import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const flagLinkBase = style({
	color: 'inherit',
	textDecoration: 'none',
	borderRadius: vars.radii.round,
	':focus': {
		outline: vars.borders.focus,
		outlineColor: vars.colors.accent,
		outlineOffset: '2px',
	},
});

export const flagCircleLink = style({});

export const flagRoundLink = style({});

export const circle = style({
	display: 'block',
	width: '2em',
	height: '2em',
	padding: '0.3em',
	textAlign: 'center',
	fontFamily: vars.fonts.ui,
	fontSize: vars.fontSizes.xs,
	fontWeight: vars.fontWeights.ui,
	color: vars.colors.bg,
	borderWidth: '0.2em',
	borderRadius: vars.radii.round,
});

export const round = style({
	padding: '0.1em',
	color: vars.colors.accent,
	borderStyle: 'solid',
	borderColor: vars.colors.accent,
});

globalStyle(`${flagCircleLink}:hover ${circle}`, {
	filter: 'saturate(1.2) brightness(1.1)',
	cursor: 'pointer',
});

globalStyle(`${flagRoundLink}:hover ${round}`, {
	backgroundColor: vars.colors.accent,
	color: vars.colors.bg,
	cursor: 'pointer',
});
