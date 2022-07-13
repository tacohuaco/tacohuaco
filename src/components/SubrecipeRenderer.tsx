import React from 'react';
import { Text } from 'tamia';
import { MDXRenderer } from './MDXRenderer';
import { RecipeContext } from './RecipeContext';
import { getIngredientsBySlug, useSubrecipes } from './SubrecipesContext';

type Props = {
	slug: string;
	value: 'ingredients' | 'steps';
};

export function SubrecipeRenderer({ slug, value }: Props) {
	const subrecipes = useSubrecipes();
	const subrecipe = subrecipes.find((x) => x.slug === slug);
	const ingredients = getIngredientsBySlug(
		subrecipe?.allIngredients || [],
		slug
	);

	if (!subrecipe) {
		return (
			<Text>
				Subrecipe {slug} not found. Either the slug is wrong, or the subrecipe
				isn’t attached to the main recipe.
			</Text>
		);
	}

	return (
		<RecipeContext.Provider value={{ slug, ingredients }}>
			<MDXRenderer>
				{value === 'ingredients'
					? subrecipe.ingredientsMdx
					: subrecipe.stepsMdx}
			</MDXRenderer>
		</RecipeContext.Provider>
	);
}
