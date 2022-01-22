import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Text } from 'tamia';
import { Subrecipe } from './Subrecipe';

type Props = React.ComponentProps<typeof Text> & {
	children: React.ReactNode;
};

export const IngredientItem = styled.li`
	&& {
		margin-left: 0;
		padding-left: 0;
		margin-bottom: ${(p) => p.theme.space.m};
		line-height: ${(p) => p.theme.lineHeights.small};
	}
	&::before {
		display: none;
	}
	em:last-child {
		display: block;
	}
`;

const Paragraph: ComponentType<any> = ({ children }) => {
	if (children?.props?.href && children?.props?.children === '#') {
		return <Subrecipe slug={children?.props?.href} value="ingredients" />;
	}
	return children;
};

const components = {
	p: Paragraph,
	li: IngredientItem,
} as const;

export default function RecipeIngredients({ children, ...props }: Props) {
	return (
		<Text
			as="div"
			fontSize={['m', 'm', 'm', 's']}
			lineHeight="large"
			{...props}
		>
			<MDXProvider components={components}>{children}</MDXProvider>
		</Text>
	);
}
