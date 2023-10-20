import { style } from '@vanilla-extract/css';
import { mediaQueries } from '../tamia/primitives/theme';

export const grid = style([
	{
		gridTemplateColumns: '1fr',
		'@media': {
			[mediaQueries.tablet]: {
				gridTemplateColumns: '1fr 1fr',
			},
			[mediaQueries.desktop]: {
				gridTemplateColumns: '1fr 1fr 1fr',
			},
		},
	},
]);
