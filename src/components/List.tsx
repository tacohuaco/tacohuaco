import type { BoxProps } from '../tamia/components/Box';
import { Stack } from '../tamia/components/Stack';
import { Text, type TextProps } from './Text';
import { list } from './List.css';

export function List(props: BoxProps<'ul'>) {
	return <Stack as="ol" gap="m" className={list} {...props} />;
}

export function ListItem(props: TextProps<'li'>) {
	return <Text as="li" {...props} />;
}
