import { type ElementType } from 'react';
import { cva, type RecipeVariantProps } from '../../styled-system/css';
import { createBox, type BoxProps } from './Box';

const heading = cva({
	base: {
		fontFamily: 'heading',
		lineHeight: 'heading',
	},
	variants: {
		level: {
			1: {
				color: 'text',
				fontWeight: 'normal',
				fontSize: 'xxl',
				letterSpacing: 'base',
			},
			2: {
				color: 'dim',
				fontSize: 'xl',
				textShadow: 'heading',
				textTransform: 'uppercase',
				letterSpacing: 'uppercase',
			},
			3: {
				color: 'text',
				fontSize: 'l',
				letterSpacing: 'heading',
			},
		},
	},
});

type HeadingProps<C extends ElementType> = Omit<BoxProps<C>, 'className'> &
	RecipeVariantProps<typeof heading>;

export function Heading<C extends ElementType = 'h1'>({
	level = 1,
	...props
}: HeadingProps<C>) {
	return createBox(
		{
			...props,
			className: heading({ level }),
		},
		level ? `h${level}` : 'h1'
	);
}
