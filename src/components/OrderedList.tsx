import { cva } from '../../styled-system/css';
import { Stack, type StackProps } from './Stack';
import { Box, type BoxProps } from './Box';

const listItem = cva({
	base: {
		listStyle: 'none',
		counterIncrement: 'steps-counter',
		position: 'relative',
		padding: '0 0 0 1.1rem',
		marginBottom: 'm',
		_before: {
			content: `counter(steps-counter)`,
			position: 'absolute',
			top: '0.25em',
			left: '-0.5em',
			width: '1.5em',
			height: '1.5em',
			textAlign: 'center',
			color: 'background',
			backgroundColor: 'accent',
			fontFamily: 'ui',
			fontSize: 'xs',
			fontWeight: 'ui',
			borderRadius: 'round',
		},
	},
	variants: {
		variant: {
			withPause: {
				_before: {
					backgroundColor: 'moon',
				},
				'&&:not(:last-child)': {
					marginBottom: 'xl',
				},
				'&&:not(:last-child)::after': {
					content: `'···'`,
					position: 'absolute',
					bottom: '-2.5em',
					left: 0,
					right: '1em',
					textAlign: 'center',
					letterSpacing: '0.75em',
					fontSize: 'l',
					color: 'dim',
				},
			},
		},
	},
});

// TODO: Less generic name?
export function OrderedList(props: Omit<StackProps<'ol'>, 'as' | 'ml'>) {
	return <Stack gap="xs" {...props} as="ol" ml="0.35rem" />;
}

export function OrderedListItem({
	pause,
	...props
}: BoxProps<'li'> & { pause?: boolean }) {
	return (
		<Box
			as="li"
			{...props}
			className={listItem({ variant: pause ? 'withPause' : undefined })}
		/>
	);
}
