import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Text, TextContent as TextContentBase } from 'tamia';
import { Subrecipe } from './Subrecipe';
import { useRecipe } from './RecipeContext';
import {
	formatOption,
	printOption,
	Ingredient,
	normalizeName,
} from '../util/olivier';

type Props = React.ComponentProps<typeof Text> & {
	children: React.ReactNode;
};

const findIngredientByName = (ingredients: Ingredient[], name: string) =>
	ingredients.find((x) => x.name === name);

const List = styled.ol`
	&& {
		padding-left: 0.35rem;
	}
`;

const ListItem = styled.li`
	&& {
		list-style: none;
		counter-increment: steps-counter;
		position: relative;
		padding: 0 0 0 1.1rem;
		margin-bottom: ${(p) => p.theme.space.m};
	}
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
`;

const Paragraph: ComponentType<any> = ({ children }) => {
	if (children?.props?.href && children?.props?.children === '#') {
		return <Subrecipe slug={children?.props?.href} value="steps" />;
	}
	return children;
};

const Em: ComponentType<any> = ({ children }) => {
	const { ingredients } = useRecipe();
	if (children.startsWith('}')) {
		const nameRaw = children.replace(/^}\s+/, '');
		const ingredient = findIngredientByName(
			ingredients,
			normalizeName(nameRaw).name
		);
		if (!ingredient) {
			return children;
		}
		const { amount, suffix, name } = printOption(formatOption(ingredient));
		return (
			<nobr>
				<em>{amount}</em> {suffix} {name}
			</nobr>
		);
	}

	if (children.endsWith('{')) {
		const nameRaw = children.replace(/\s+\{/, '');
		const ingredient = findIngredientByName(
			ingredients,
			normalizeName(nameRaw).name
		);
		if (!ingredient) {
			return children;
		}
		const { amount, name } = printOption(formatOption(ingredient));
		return (
			<nobr>
				{name} <em>({amount})</em>
			</nobr>
		);
	}

	return children;
};

const components = {
	p: Paragraph,
	ol: List,
	li: ListItem,
	em: Em,
} as const;

export default function RecipeDirections({ children, ...props }: Props) {
	return (
		<Text as="div" fontSize={['l', 'l', 'l', 'm']} {...props}>
			<MDXProvider components={components}>
				<TextContentBase>{children}</TextContentBase>
			</MDXProvider>
		</Text>
	);
}
