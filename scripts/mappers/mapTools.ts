import type { RecipeModelRaw } from '../types.ts';
import { getListLines } from './getListLines.ts';
import type { IngredientsSection } from '../../src/types/Recipe.ts';

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

	// Return an array without duplicates
	return [...new Set([...recipeTools, ...subrecipeTools.flat()])];
}
