import intersection from 'lodash/intersection';
import { IngredientWithInfo, Month } from '../../src/util/olivier';

/**
 * Recipe seasons: return months shared by all recipe ingredients
 */
export const mapSeasons = (ingredients: IngredientWithInfo[]): Month[] => {
	const allSeasons = ingredients
		.map((x) => x.seasons)
		.filter((x) => x.length > 0);
	return intersection(...allSeasons);
};
