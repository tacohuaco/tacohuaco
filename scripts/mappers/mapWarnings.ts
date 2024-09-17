import uniq from 'lodash/uniq';
import type { IngredientModel } from '../types';
import type { RecipeIngredient } from '../../src/types/Recipe';

export function mapWarnings(
	ingredients: RecipeIngredient[],
	allIngredients: IngredientModel[]
) {
	return uniq(
		allIngredients
			.filter((ingredient) =>
				ingredients.some(({ name }) => name === ingredient.name.toLowerCase())
			)
			.map((x) => x.warnings)
			.filter((x) => x.length > 0)
			.flat(1)
	);
}
