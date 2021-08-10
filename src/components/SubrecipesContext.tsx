import { createContext, useContext } from 'react';
import { Subrecipe } from '../types/Subrecipe';

type SubrecipesContextValue = Subrecipe[];

export const SubrecipesContext = createContext<SubrecipesContextValue>([]);

export function useSubrecipes() {
	return useContext(SubrecipesContext);
}
