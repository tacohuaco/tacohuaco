import { Recipe } from '../../src/types/Recipe';
import { IngredientKind, IngredientWithInfo } from '../../src/util/olivier';

/**
 * Gluten free recipe: less than 30% of the flour amount has gluten
 */
function isLowGlutenRecipe(ingredients: IngredientWithInfo[]) {
	let glutenFloursAmount = 0;
	let glutenlessFloursAmount = 0;

	ingredients.forEach((ingredient) => {
		if (
			typeof ingredient.minAmount === 'number' &&
			(ingredient.name.endsWith(' flour') || ingredient.name.endsWith('starch'))
		) {
			if (ingredient.hasGluten) {
				glutenFloursAmount += ingredient.minAmount;
			} else {
				glutenlessFloursAmount += ingredient.minAmount;
			}
		}
	});
	const glutennes = glutenFloursAmount / glutenlessFloursAmount;
	return glutennes < 0.33;
}

/**
 * Return recipe flags based on ingredients list
 */
export const mapFlags = (
	ingredients: IngredientWithInfo[]
): Pick<
	Recipe,
	| 'vegan'
	| 'vegetarian'
	| 'glutenFree'
	| 'lowGluten'
	| 'dairyFree'
	| 'noAddedSugar'
> => {
	return {
		vegan: ingredients.every((x) => x.kind === IngredientKind.Vegan),
		vegetarian: ingredients.every((x) =>
			[IngredientKind.Vegan, IngredientKind.Vegetarian].includes(x.kind)
		),
		glutenFree: ingredients.every((x) => x.hasGluten === false),
		lowGluten: isLowGlutenRecipe(ingredients),
		dairyFree: ingredients.every((x) => x.hasDairy === false),
		noAddedSugar: ingredients.every((x) => x.hasSugar === false),
	};
};
