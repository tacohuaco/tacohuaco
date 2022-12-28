import React, { ComponentProps, ReactNode } from 'react';
import { Stack, Text } from 'tamia';

type Props = {
	children?: ReactNode;
};

const LabelText = (props: ComponentProps<typeof Text>) => (
	<Text
		as="div"
		sx={{
			'input:checked + &': {
				textDecoration: 'line-through',
			},
		}}
		{...props}
	/>
);

export function TodoItem({ children }: Props) {
	return (
		<Stack as="label" gap="xs" direction="row">
			<input type="checkbox" />
			<LabelText>{children}</LabelText>
		</Stack>
	);
}
