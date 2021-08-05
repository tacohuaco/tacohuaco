import React from 'react';
import styled from 'styled-components';
import { Text, TextContent as TextContentBase } from 'tamia';

type Props = React.ComponentProps<typeof Text> & {
	children: React.ReactNode;
};

const Container = styled(TextContentBase)`
	/* Lists */
	ul > li {
		padding-left: 0;
		margin-left: 0;
		&::before {
			display: none;
		}
		em {
			display: block;
			margin-top: -${(p) => p.theme.space.xs};
		}
	}
`;

export default function RecipeIngredients({ children, ...props }: Props) {
	return (
		<Text as="div" fontSize="s" lineHeight="large" {...props}>
			<Container>{children}</Container>
		</Text>
	);
}
