import type { ElementType } from 'react';
import clsx from 'clsx';
import { Box, type BoxProps } from '../tamia/components/Box';
import { button } from './Button.css';

export function Button<C extends ElementType = 'button'>({
	as,
	className,
	...props
}: BoxProps<C>) {
	return (
		<Box
			{...(props as BoxProps<C>)}
			as={as ?? 'button'}
			type="button"
			className={clsx(className, button)}
		/>
	);
}
