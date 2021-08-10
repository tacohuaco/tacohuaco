import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Text, TextContent as TextContentBase } from 'tamia';
import { Subrecipe } from './Subrecipe';

type Props = React.ComponentProps<typeof Text> & {
	children: React.ReactNode;
};

const ListItem = styled.li`
	padding-left: 0;
	margin-left: 0;
	&::before {
		display: none;
	}
	em {
		display: block;
		margin-top: -${(p) => p.theme.space.xs};
		line-height: ${(p) => p.theme.lineHeights.small};
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
	li: ListItem,
} as const;

export default function RecipeIngredients({ children, ...props }: Props) {
	return (
		<Text
			as="div"
			fontSize={['m', 'm', 'm', 's']}
			lineHeight="large"
			{...props}
		>
			<MDXProvider components={components}>
				<TextContentBase>{children}</TextContentBase>
			</MDXProvider>
		</Text>
	);
}
