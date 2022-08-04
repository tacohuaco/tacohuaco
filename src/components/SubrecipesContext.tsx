import { createContext, useContext } from 'react';
import { Subrecipe } from '../types/Subrecipe';
import { IngredientsWithMeta } from '../types/IngredientsWithMeta';
import { Ingredient, normalizeName } from '../util/olivier';

type SubrecipesContextValue = readonly Subrecipe[];

export const getIngredientsBySlug = (
	ingredients: readonly IngredientsWithMeta[],
	slug: string
): readonly Ingredient[] =>
	ingredients.find((x) => x.slug === slug)?.ingredients || [];

export const findIngredientBySubrecipe = (
	ingredients: readonly Ingredient[],
	subrecipe: Subrecipe
) => {
	const normalizedName = normalizeName(subrecipe.title.toLocaleLowerCase());

	return ingredients.find(
		(ingredient) =>
			ingredient.modifier === normalizedName.modifier &&
			ingredient.name === normalizedName.name
	);
};

export const findSubrecipeIngredient = (
	subrecipes: readonly Subrecipe[],
	ingredient: Ingredient
) => {
	return subrecipes.find((subrecipe) => {
		const normalizedName = normalizeName(subrecipe.title.toLocaleLowerCase());
		return (
			ingredient.modifier === normalizedName.modifier &&
			ingredient.name === normalizedName.name
		);
	});
};

export const SubrecipesContext = createContext<SubrecipesContextValue>([]);

export function useSubrecipes() {
	return useContext(SubrecipesContext);
}
