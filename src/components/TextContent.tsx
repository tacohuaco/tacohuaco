import React from 'react';
import styled from 'styled-components';
import { Text, TextContent as TextContentBase } from 'tamia';

type Props = React.ComponentProps<typeof Text> & {
	children: React.ReactNode;
};

const Container = styled(TextContentBase)<{ fontSize: string }>`
	${(p) =>
		p.fontSize === 's' &&
		`
		h3, h4, h5, h6 {
			margin-top: ${p.theme.space.m};
			margin-bottom: ${p.theme.space.s};
		}
	`}

	hr {
		text-align: center;
		border: 0;
		/* Make top and bottom margins more or less the same */
		margin-top: 2.5rem;
		margin-bottom: 2.5rem;
	}
	hr::after {
		content: '···';
		letter-spacing: 0.7em;
	}
`;

export function TextContent({ children, ...props }: Props) {
	return (
		<Text as="div" {...props}>
			<Container {...props}>{children}</Container>
		</Text>
	);
}
