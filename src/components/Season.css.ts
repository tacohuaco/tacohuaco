import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const notInSeason = style({
	selectors: {
		// HACK: Increase specificity because of the wrong file inclusion order
		// in Astro build
		'&&': {
			color: vars.colors.light,
		},
	},
});
