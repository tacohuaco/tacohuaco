import { RecipeIngredient } from '../../src/types/Recipe';

/**
 * Recipe precoditons: things to be done before starting cooking
 */
export const mapPreconditions = (ingredients: RecipeIngredient[]): string[] => {
	return ingredients
		.map(({ name, comment }) => {
			if (
				comment?.startsWith('room temperature') ||
				comment?.startsWith('at room temperature')
			) {
				return `warm ${name} to room temperature`;
			}

			if (name === 'chicken stock') {
				return `unfreeze ${name} if frozen`;
			}

			return '';
		})
		.filter(Boolean);
};
