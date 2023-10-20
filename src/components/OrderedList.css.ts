import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const list = style({
	marginLeft: '0.35rem',
});

export const listItem = style({
	listStyle: 'none',
	counterIncrement: 'steps-counter',
	position: 'relative',
	padding: '0 0 0 1.1rem',
	marginBottom: vars.space.m,
	'::before': {
		content: 'counter(steps-counter)',
		position: 'absolute',
		top: '0.25em',
		left: '-0.5em',
		width: '1.5em',
		height: '1.5em',
		textAlign: 'center',
		color: vars.colors.bg,
		backgroundColor: vars.colors.accent,
		fontFamily: vars.fonts.ui,
		fontSize: vars.fontSizes.xs,
		fontWeight: vars.fontWeights.ui,
		borderRadius: vars.radii.round,
	},
});

export const listItemWithPause = style({
	'::before': {
		backgroundColor: vars.colors.moon,
	},
	selectors: {
		'&&:not(:last-child)': {
			marginBottom: vars.space.xl,
		},
		'&&:not(:last-child)::after': {
			content: '···',
			position: 'absolute',
			bottom: '-2.5em',
			left: 0,
			right: '1em',
			textAlign: 'center',
			letterSpacing: '0.75em',
			fontSize: vars.fontSizes.l,
			color: vars.colors.dim,
		},
	},
});
