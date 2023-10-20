import type { BoxProps } from '../tamia/components/Box';
import { Stack } from '../tamia/components/Stack';
import { Text, type TextProps } from './Text';
import { list, listItem, listItemWithPause } from './OrderedList.css';
import clsx from 'clsx';

// TODO: Less generic name?
export function OrderedList(props: BoxProps<'ol'>) {
	return <Stack as="ol" gap="xs" {...props} className={list} />;
}

export function OrderedListItem({
	pause,
	...props
}: TextProps<'li'> & { pause: boolean }) {
	return (
		<Text
			as="li"
			{...props}
			className={clsx(listItem, pause && listItemWithPause)}
		/>
	);
}
