import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../styles/theme.css';

export const text = recipe({
	base: [
		{
			color: vars.colors.base,
			fontFamily: vars.fonts.base,
			fontWeight: vars.fontWeights.base,
			lineHeight: vars.lineHeights.base,
			letterSpacing: vars.letterSpacings.base,
		},
	],
	variants: {
		variant: {
			base: {
				fontSize: vars.fontSizes.m,
			},
			italic: {
				fontStyle: 'italic',
			},
			small: {
				fontSize: vars.fontSizes.s,
				lineHeight: vars.lineHeights.small,
			},
			ui: {
				fontFamily: vars.fonts.ui,
				fontSize: vars.fontSizes.m,
			},
			intro: {
				fontSize: vars.fontSizes.l,
				fontStyle: 'italic',
			},
			xsmall: {
				fontFamily: vars.fonts.ui,
				fontSize: vars.fontSizes.xs,
			},
			card: {
				fontSize: vars.fontSizes.xl,
				fontFamily: vars.fonts.heading,
				color: 'inherit',
			},
		},
	},
	defaultVariants: {
		variant: 'base',
	},
});

export type TextVariants = RecipeVariants<typeof text>;
