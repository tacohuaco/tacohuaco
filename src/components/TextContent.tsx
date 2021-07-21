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

	/* Tips */
	.tip {
		margin: ${(p) => p.theme.space.l} 0;
		font-size: ${(p) => p.theme.fontSizes.s};
		font-style: italic;
	}
	.tip:first-child {
		margin-top: 0;
	}
	.tip + .tip {
		margin-top: -${(p) => p.theme.space.m};
	}
	.tip__title {
		display: block;
		margin-bottom: ${(p) => p.theme.space.xxs};
		font-style: normal;
	}
`;

export default function TextContent({ children, ...props }: Props) {
	return (
		<Text as="div" {...props}>
			<Container {...props}>{children}</Container>
		</Text>
	);
}
