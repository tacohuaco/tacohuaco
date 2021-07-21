import React from 'react';
import styled from 'styled-components';
import { Text, TextContent as TextContentBase } from 'tamia';

type Props = React.ComponentProps<typeof Text> & {
	children: React.ReactNode;
};

const Container = styled(TextContentBase)`
	/* Lists */
	ol {
		padding-left: 0.35rem;
	}
	ol li {
		list-style: none;
		counter-increment: steps-counter;
		position: relative;
		padding: 0 0 0 1.1rem;
		margin-bottom: ${(p) => p.theme.space.m};
		&::before {
			content: counter(steps-counter);
			position: absolute;
			top: 0.25em;
			left: -0.5em;
			width: 1.5em;
			height: 1.5em;
			text-align: center;
			color: ${(p) => p.theme.colors.bg};
			background-color: ${(p) => p.theme.colors.accent};
			font-family: ${(p) => p.theme.fonts.ui};
			font-size: ${(p) => p.theme.fontSizes.xs};
			font-weight: ${(p) => p.theme.fontWeights.ui};
			border-radius: ${(p) => p.theme.radii.round};
		}
	}
`;

export default function RecipeDirections({ children, ...props }: Props) {
	return (
		<Text as="div" {...props}>
			<Container>{children}</Container>
		</Text>
	);
}
