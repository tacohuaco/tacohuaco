import { createContext, useContext } from 'react';
import { Ingredient } from '../util/olivier';

interface RecipeContextValue {
	ingredients: Ingredient[];
}

export const RecipeContext = createContext<RecipeContextValue>({
	ingredients: [],
});

export function useRecipe() {
	return useContext(RecipeContext);
}
