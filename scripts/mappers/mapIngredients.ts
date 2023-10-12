import { IngredientsSection } from '../../src/types/Recipe';
import { RecipeRaw } from '../types';
import { getListLines } from './getListLines';
import { splitBySection } from './splitBySection';
import {
	parseOption,
	normalizeOption,
	analyzeOption,
} from '../../src/util/olivier';
import { getSubrecipeSlug } from './getSubrecipeSlug';

export function mapIngredients(
	ingredients: RecipeRaw['ingredients'],
	subrecipes: RecipeRaw['subrecipes'] = []
): IngredientsSection[] {
	const sections = splitBySection(ingredients);
	return sections.map(({ name, body }) => {
		const slug = getSubrecipeSlug(body);
		if (slug) {
			// Fetching subrecipe ingredients
			const subrecipe = subrecipes.find((x) => x.slug === slug);
			if (subrecipe === undefined) {
				console.error();
				console.error(`Subrecipe not found: ${slug}:`);
				console.error(body);
				console.error();
				return { name, ingredients: [] };
			}
			return {
				name,
				ingredients: mapIngredients(subrecipe?.ingredients)[0].ingredients,
			};
		} else {
			// Parsing section ingredients
			const lines = getListLines(body);
			return {
				name,
				ingredients: lines.map((line) => {
					const normalized = normalizeOption(parseOption(line));
					return { ...normalized, ...analyzeOption(normalized) };
				}),
			};
		}
	});
}
