import { StepsSection } from '../../src/types/Recipe';
import { RecipeRaw } from '../types';
import { getListLines } from './getListLines';
import { getSubrecipeSlug } from './getSubrecipeSlug';
import { splitBySection } from './splitBySection';

export function mapSteps(
	steps: RecipeRaw['steps'],
	subrecipes: RecipeRaw['subrecipes'] = []
): StepsSection[] {
	const sections = splitBySection(steps);
	return sections.map(({ name, body }) => {
		const slug = getSubrecipeSlug(body);
		if (slug) {
			// Fetching subrecipe steps
			const subrecipe = subrecipes.find((x) => x.slug === slug);
			if (subrecipe === undefined) {
				console.error();
				console.error(`Subrecipe not found: ${slug}:`);
				console.error(body);
				console.error();
				return { name, steps: [] };
			}
			return {
				name,
				steps: mapSteps(subrecipe?.steps)[0].steps,
			};
		} else {
			// Parsing section steps
			const lines = getListLines(body);
			return {
				name,
				steps: lines,
			};
		}
	});
}
