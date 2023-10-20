import type { ComponentProps } from 'react';
import { Box, Link } from '.';
import { link } from './Tag.css';

// TODO: New year -> New Year

export function Tag(props: ComponentProps<typeof Link>) {
	return <Box as="a" {...props} className={link} />;
}
