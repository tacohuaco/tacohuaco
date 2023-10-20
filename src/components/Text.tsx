import type { ElementType } from 'react';
import clsx from 'clsx';
import { Box, type BoxProps } from '../tamia/components/Box';
import { text, type TextVariants } from './Text.css';

export type TextProps<C extends ElementType> = BoxProps<C> & TextVariants;

export function Text<C extends ElementType = 'p'>({
	as,
	variant = 'base',
	className,
	...props
}: TextProps<C>) {
	return (
		<Box
			{...(props as TextProps<C>)}
			as={as ?? 'p'}
			className={clsx(className, text({ variant }))}
		/>
	);
}
