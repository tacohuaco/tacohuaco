import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';
import { mediaQueries } from '../tamia/primitives/theme';

export const link = style([
	{
		transition: vars.transitions.hover,
		transitionProperty: 'color',
	},
]);

export const imageContainer = style({});

export const frame = style({
	backgroundColor: vars.colors.light,
});

globalStyle(`a:hover ${imageContainer}`, {
	'@media': {
		[mediaQueries.tablet]: {
			boxShadow: vars.shadows.input,
			transition: vars.transitions.hover,
			transitionProperty: 'box-shadow',
			willChange: 'box-shadow',
		},
	},
});
