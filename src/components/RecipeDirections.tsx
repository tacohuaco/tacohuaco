import React, { ComponentType, ReactNode } from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Text, TextContent as TextContentBase } from 'tamia';
import { castArray, last } from 'lodash';
import { SubrecipeRenderer } from './SubrecipeRenderer';
import { useRecipe, findIngredient } from './RecipeContext';
import { formatOption, printOption, normalizeName } from '../util/olivier';

type Props = React.ComponentProps<typeof Text> & {
	children: React.ReactNode;
};

const isOvernightStep = (text: unknown) => {
	if (typeof text !== 'string') {
		return false;
	}

	if (
		text.endsWith('overnight.') ||
		text.endsWith('days.') ||
		text.endsWith('weeks.')
	) {
		return true;
	}

	return false;
};

const Ol = styled.ol`
	&& {
		padding-left: 0.35rem;
	}
`;

const Li = styled.li<{ isOvernight: boolean }>`
	&& {
		list-style: none;
		counter-increment: steps-counter;
		position: relative;
		padding: 0 0 0 1.1rem;
		margin-bottom: ${(p) =>
			p.isOvernight ? p.theme.space.xl : p.theme.space.m};
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
		background-color: ${(p) =>
			p.isOvernight ? p.theme.colors.moon : p.theme.colors.accent};
		font-family: ${(p) => p.theme.fonts.ui};
		font-size: ${(p) => p.theme.fontSizes.xs};
		font-weight: ${(p) => p.theme.fontWeights.ui};
		border-radius: ${(p) => p.theme.radii.round};
	}
	&&:not(:last-child)::after {
		display: ${(p) => (p.isOvernight ? 'block' : 'none')};
		content: '···';
		position: absolute;
		bottom: -2.5em;
		left: 0;
		right: 1em;
		text-align: center;
		letter-spacing: 0.75em;
		font-size: ${(p) => p.theme.fontSizes.l};
		color: ${(p) => p.theme.colors.dim};
	}
`;

const ListItem: ComponentType<{ children: ReactNode }> = ({ children }) => {
	const lastPiece = last(castArray(children));
	return <Li isOvernight={isOvernightStep(lastPiece)}>{children}</Li>;
};

const Paragraph: ComponentType<any> = ({ children }) => {
	if (children?.props?.href && children?.props?.children === '#') {
		return <SubrecipeRenderer slug={children?.props?.href} value="steps" />;
	}
	return children;
};

const Emphasis: ComponentType<any> = ({ children }) => {
	const { ingredients } = useRecipe();
	if (children.startsWith('}')) {
		const nameRaw = children.replace(/^}\s+/, '');
		const ingredient = findIngredient(ingredients, {
			name: normalizeName(nameRaw).name,
		});
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
		const ingredient = findIngredient(ingredients, {
			name: normalizeName(nameRaw).name,
		});
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
	ol: Ol,
	li: ListItem,
	em: Emphasis,
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
