import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Text } from 'tamia';
import { Subrecipe } from './Subrecipe';
import { useRecipe, findIngredient } from './RecipeContext';
import { normalize, parse, formatOption, printOption } from '../util/olivier';
import Group from 'react-group';

type Props = React.ComponentProps<typeof Text> & {
	children: React.ReactNode;
};

export const IngredientListItem = styled.li`
	&& {
		margin-left: 0;
		padding-left: 0;
		margin-bottom: ${(p) => p.theme.space.m};
	}
	&::before {
		display: none;
	}
`;

const Paragraph: ComponentType<any> = ({ children }) => {
	if (children?.props?.href && children?.props?.children === '#') {
		return <Subrecipe slug={children?.props?.href} value="ingredients" />;
	}
	return children;
};

const splitOutComment = (ingredient: string) => ingredient.split(/\s*;\s*/);

const parseMdxIngredint = (children: string | string[]) => {
	if (Array.isArray(children)) {
		const [ingredient, ...rest] = children;
		return [...splitOutComment(ingredient), ...rest];
	}
	return splitOutComment(children);
};

const IngredientItem: ComponentType<any> = ({ children }) => {
	const { ingredients } = useRecipe();
	const [rawIngredient, ...comments] = parseMdxIngredint(children);
	const options = normalize(parse(rawIngredient));

	const scaledIngredients = options.map(
		(option) =>
			findIngredient(ingredients, {
				name: option.name,
				modifier: option.modifier,
			}) || option
	);

	return (
		<IngredientListItem>
			<Text as="div" variant="small" lineHeight="small">
				<Group
					separator={
						<>
							{' '}
							<i>or</i>{' '}
						</>
					}
				>
					{scaledIngredients.map((option) => {
						const { amount, suffix, modifier, name } = printOption(
							formatOption(option)
						);
						return (
							<Group key={name} separator=" ">
								{amount && <b>{amount}</b>}
								{suffix}
								{modifier}
								{name}
							</Group>
						);
					})}
				</Group>
				{comments.length > 0 && (
					<Text as="div" variant="italic">
						{comments}
					</Text>
				)}
			</Text>
		</IngredientListItem>
	);
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
