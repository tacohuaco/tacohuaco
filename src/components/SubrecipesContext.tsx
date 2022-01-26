import { createContext, useContext } from 'react';
import { Subrecipe } from '../types/Subrecipe';
import { IngredientsWithMeta } from '../types/IngredientsWithMeta';
import { Ingredient } from '../util/olivier';

type SubrecipesContextValue = Subrecipe[];

export const getIngredientsBySlug = (
	ingredients: IngredientsWithMeta[],
	slug: string
): Ingredient[] => ingredients.find((x) => x.slug === slug)?.ingredients || [];

export const SubrecipesContext = createContext<SubrecipesContextValue>([]);

export function useSubrecipes() {
	return useContext(SubrecipesContext);
}
