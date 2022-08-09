import React, { ReactNode } from 'react';
import { Stack, Text } from 'tamia';
import styled from 'styled-components';

type Props = {
	children: ReactNode;
};

const Checkbox = styled.input.attrs({ type: 'checkbox' })``;
const Label = styled.label``;
const LabelText = styled(Text)`
	input:checked + & {
		text-decoration: line-through;
	}
`;

export function TodoItem({ children }: Props) {
	return (
		<Stack gap="xs" direction="row" as={Label}>
			<Checkbox />
			<LabelText as="div">{children}</LabelText>
		</Stack>
	);
}
