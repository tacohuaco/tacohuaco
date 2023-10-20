import clsx from 'clsx';
import type { ElementType } from 'react';
import { Box, type BoxProps } from './Box';
import { expander } from './Expander.css';

export function Expander<C extends ElementType>(props: BoxProps<C>) {
	return <Box {...props} className={clsx(expander, props.className)} />;
}
