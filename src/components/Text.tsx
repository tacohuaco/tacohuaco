import { type ElementType } from 'react';
import { cva, type RecipeVariantProps } from '../../styled-system/css';
import { createBox, type BoxProps } from './Box';

const text = cva({
	base: {
		color: 'text',
		fontWeight: 'normal',
		letterSpacing: 'base',
	},
	variants: {
		variant: {
			body: {
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'm',
			},
			italic: {
				lineHeight: 'base',
				fontFamily: 'body',
				fontStyle: 'italic',
			},
			small: {
				lineHeight: 'small',
				fontFamily: 'body',
				fontSize: 's',
			},
			ui: {
				lineHeight: 'base',
				fontFamily: 'ui',
				fontSize: 'm',
			},
			intro: {
				lineHeight: 'base',
				fontFamily: 'body',
				fontSize: 'l',
				fontStyle: 'italic',
			},
			xsmall: {
				lineHeight: 'base',
				fontFamily: 'ui',
				fontSize: 'xs',
			},
			card: {
				lineHeight: 'base',
				fontFamily: 'heading',
				fontSize: 'xl',
				color: 'inherit',
			},
		},
	},
});

export type TextProps<C extends ElementType> = Omit<BoxProps<C>, 'className'> &
	RecipeVariantProps<typeof text>;

export function Text<C extends ElementType = 'p'>({
	variant = 'body',
	...props
}: TextProps<C>) {
	return createBox<C>(
		{
			...props,
			className: text({ variant }),
		} as BoxProps<C>,
		'p'
	);
}
