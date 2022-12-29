import React, { ComponentProps, ComponentType } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Box, Text } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import { SubrecipeRenderer } from './SubrecipeRenderer';
import { useRecipe, findIngredient } from './RecipeContext';
import {
	normalize,
	parse,
	formatOption,
	printOption,
	Ingredient,
} from '../util/olivier';
import Group from 'react-group';
import { findSubrecipeIngredient, useSubrecipes } from './SubrecipesContext';

type Props = React.ComponentProps<typeof Text> & {
	children: React.ReactNode;
};

export const IngredientListItem = (props: ComponentProps<typeof Box>) => (
	<Box
		as="li"
		sx={{
			'&&': {
				marginLeft: 0,
				paddingLeft: 0,
				marginBottom: 'm',
			},
			'::before': {
				display: 'none',
			},
		}}
		{...props}
	/>
);

const Paragraph: ComponentType<any> = ({ children }) => {
	if (children?.props?.href && children?.props?.children === '#') {
		return (
			<SubrecipeRenderer slug={children?.props?.href} value="ingredients" />
		);
	}
	return children;
};

const splitOutComment = (ingredient: string | undefined | null) =>
	(ingredient || '').split(/\s*;\s*/);

const parseMdxIngredient = (children: string | string[]) => {
	if (Array.isArray(children)) {
		const [ingredient, ...rest] = children;
		return [...splitOutComment(ingredient), ...rest];
	}
	return splitOutComment(children);
};

interface IngredientNameProps {
	ingredient: Ingredient;
	printName?: string;
}

const IngredientName = ({ ingredient, printName }: IngredientNameProps) => {
	const subrecipes = useSubrecipes();
	const subrecipe = findSubrecipeIngredient(subrecipes, ingredient);

	const name = (
		<>
			{ingredient.modifier} {printName}
		</>
	);
	if (subrecipe) {
		return <Link href={`/recipes/${subrecipe.slug}/`}>{name}</Link>;
	} else {
		return <>{name}</>;
	}
};

const IngredientItem: ComponentType<any> = ({ children }) => {
	const { ingredients } = useRecipe();

	const [rawIngredient, ...comments] = parseMdxIngredient(children);
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
			<Text as="div" variant="small" sx={{ lineHeight: 'small' }}>
				<Group
					separator={
						<>
							{' '}
							<i>or</i>{' '}
						</>
					}
				>
					{scaledIngredients.map((option, index) => {
						const { name, amount, suffix } = printOption(formatOption(option));
						const shouldShowAmount =
							index === 0 ||
							option.minAmount !== scaledIngredients[0].minAmount ||
							option.maxAmount !== scaledIngredients[0].maxAmount;
						return (
							<Group key={name} separator=" ">
								{shouldShowAmount && <b>{amount}</b>}
								{shouldShowAmount && suffix}
								<IngredientName ingredient={option} printName={name} />
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

export function RecipeIngredients({ children, ...props }: Props) {
	return (
		<Text
			as="div"
			sx={{
				fontSize: ['m', 'm', 'm', 's'],
				lineHeight: 'large',
			}}
			{...props}
		>
			<MDXProvider components={components}>{children}</MDXProvider>
		</Text>
	);
}
