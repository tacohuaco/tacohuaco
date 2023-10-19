import uniq from 'lodash/uniq';
import { RecipeModelRaw } from '../types';
import { getListLines } from './getListLines';
import { IngredientsSection } from '../../src/types/Recipe';

export function mapTools(
	tools: RecipeModelRaw['tools'],
	subrecipes: Pick<RecipeModelRaw, 'slug' | 'tools'>[],
	ingredientsSections: IngredientsSection[]
) {
	const recipeTools = tools === null ? [] : getListLines(tools);
	const subrecipeTools = subrecipes.map((subrecipe) => {
		if (subrecipe.tools === null) {
			return [];
		}

		// Don't show subrecipe tools if they aren't part of the cooking steps
		const hasLink = ingredientsSections.find((section) =>
			section.ingredients.find((ingredient) =>
				ingredient.find((x) => x.subrecipeSlug === subrecipe.slug)
			)
		);
		if (hasLink) {
			return [];
		}

		return getListLines(subrecipe.tools);
	});
	return uniq([...recipeTools, ...subrecipeTools.flat(1)]);
}
