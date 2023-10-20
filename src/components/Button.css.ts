import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const button = style({
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	padding: 0,
	paddingTop: '0.1em',
	border: vars.borders.input,
	borderColor: vars.colors.accent,
	borderRadius: vars.radii.round,
	textAlign: 'center',
	fontFamily: vars.fonts.base,
	fontSize: vars.fontSizes.xl,
	fontWeight: vars.fontWeights.base,
	lineHeight: 1,
	color: vars.colors.accent,
	background: 'transparent',
	selectors: {
		'&::-moz-focus-inner': {
			border: 0,
		},
	},
	'@media': {
		'(any-hover: hover)': {
			width: '1.2rem',
			height: '1.2rem',
			fontSize: vars.fontSizes.s,
			fontWeight: vars.fontWeights.ui,
		},
	},
	':hover': {
		cursor: 'pointer',
		color: vars.colors.bg,
		backgroundColor: vars.colors.accent,
	},
	':active': {
		cursor: 'pointer',
		color: vars.colors.bg,
		backgroundColor: vars.colors.accent,
	},
	':focus': {
		outline: 0,
		boxShadow: `0 0 0 2px ${vars.colors.bg}, 0 0 0 4px ${vars.colors.focus}`,
	},
});
