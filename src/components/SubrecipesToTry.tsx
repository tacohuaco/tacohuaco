import React, { Fragment } from 'react';
import { Text } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import { useRecipe } from './RecipeContext';
import { findIngredientBySubrecipe, useSubrecipes } from './SubrecipesContext';

interface ConnectorProps {
	index: number;
	length: number;
}

const Connector = ({ index, length }: ConnectorProps) => {
	if (length === 1 || index === length - 1) {
		return null;
	}

	if (index === length - 2) {
		return <> and </>;
	}

	return <>, </>;
};

export function SubrecipesToTry() {
	const { ingredients } = useRecipe();
	const subrecipes = useSubrecipes();

	const subrecipesInIngredients = subrecipes.filter(
		(subrecipe) =>
			findIngredientBySubrecipe(ingredients, subrecipe) !== undefined
	);

	return (
		<Text>
			Try our{' '}
			{subrecipesInIngredients.map(({ slug, title }, index) => (
				<Fragment key={slug}>
					<Link href={`/recipes/${slug}/`}>{title.toLocaleLowerCase()}</Link>
					<Connector index={index} length={subrecipesInIngredients.length} />
				</Fragment>
			))}{' '}
			with this recipe.
		</Text>
	);
}
