import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../styles/theme.css';

export const heading = recipe({
	base: [
		{
			color: vars.colors.base,
			fontFamily: vars.fonts.heading,
			lineHeight: vars.lineHeights.heading,
			letterSpacing: vars.letterSpacings.heading,
		},
	],
	variants: {
		level: {
			1: {
				fontWeight: vars.fontWeights.base,
				fontSize: vars.fontSizes.xxl,
				letterSpacing: vars.letterSpacings.base,
			},
			2: {
				color: vars.colors.dim,
				fontSize: vars.fontSizes.xl,
				letterSpacing: vars.letterSpacings.uppercase,
				textShadow: vars.shadows.heading,
				textTransform: 'uppercase',
			},
			3: {
				fontSize: vars.fontSizes.l,
			},
		},
	},
	defaultVariants: {
		level: 1,
	},
});

export type HeadingVariants = RecipeVariants<typeof heading>;
