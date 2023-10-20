import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const input = style({
	width: '100%',
	height: '2rem',
	paddingBlock: vars.space.xxs,
	paddingInline: vars.space.s,
	fontFamily: vars.fonts.ui,
	fontSize: vars.fontSizes.m,
	fontWeight: vars.fontWeights.ui,
	backgroundColor: vars.colors.bg,
	color: vars.colors.base,
	border: vars.borders.input,
	borderColor: vars.colors.base,
	borderRadius: vars.radii.button,
	appearance: 'none',
	':focus': {
		outline: 0,
		borderColor: vars.colors.accent,
		boxShadow: vars.shadows.input,
	},
});
