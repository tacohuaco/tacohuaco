import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

// TODO: Can we remove duplicated code?

export const body = style({
	position: 'relative',
	'::before': {
		content: '',
		position: 'absolute',
		left: 0,
		right: 0,
		height: vars.space.s,
		backgroundColor: vars.colors.accent,

		top: 0,
	},
	'::after': {
		content: '',
		position: 'absolute',
		left: 0,
		right: 0,
		height: vars.space.s,
		backgroundColor: vars.colors.accent,

		bottom: 0,
	},
});
