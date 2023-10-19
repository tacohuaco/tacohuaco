import type { IngredientsSection } from '../types/Recipe';

export function getAllIngredients(ingredientsSections: IngredientsSection[]) {
	return ingredientsSections.map((x) => x.ingredients).flat(2);
}
