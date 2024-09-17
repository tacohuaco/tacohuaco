import intersection from 'lodash/intersection';
import { Month } from '../../src/util/olivier';
import type { RecipeIngredient } from '../../src/types/Recipe';

/**
 * Recipe seasons: return months shared by all recipe ingredients
 */
export const mapSeasons = (ingredients: RecipeIngredient[]): Month[] => {
	const allSeasons = ingredients
		.map((x) => x.seasons)
		.filter((x) => x.length > 0);
	return intersection(...allSeasons);
};
