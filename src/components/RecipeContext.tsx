import { createContext, useContext } from 'react';
import { find } from 'lodash';
import { Ingredient } from '../util/olivier';

interface RecipeContextValue {
	slug: string;
	ingredients: Ingredient[];
}

export const findIngredient = (
	ingredients: Ingredient[],
	options: Partial<Ingredient>
) => find(ingredients, options);

export const RecipeContext = createContext<RecipeContextValue>({
	slug: '',
	ingredients: [],
});

export function useRecipe() {
	return useContext(RecipeContext);
}
