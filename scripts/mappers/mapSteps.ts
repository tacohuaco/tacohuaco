import { Step, StepsSection } from '../../src/types/Recipe';
import { normalizeOption, parseOption } from '../../src/util/olivier';
import { RecipeModelRaw } from '../types';
import { getListLines } from './getListLines';
import { getSubrecipeSlug } from './getSubrecipeSlug';
import { splitBySection } from './splitBySection';

function hasPause(text: string) {
	if (
		text.endsWith('overnight.') ||
		text.endsWith('day.') ||
		text.endsWith('days.') ||
		text.endsWith('week.') ||
		text.endsWith('weeks.') ||
		text.endsWith('hour.') ||
		text.endsWith('hours.')
	) {
		return true;
	}

	return false;
}

// Normalize ingredient placeholders:
// *} large cucumbers* -> <Ingredient name="cucumber" modifier="large"/>
function normalizePlaceholders(text: string) {
	return text.replace(/\*\}\s*([^*]+)\*/g, (_, $1) => {
		const { name, modifier } = normalizeOption(parseOption($1));
		const modifierProp = modifier ? `modifier="${modifier}"` : '';
		return `<Ingredient name="${name}" ${modifierProp} />`;
	});
}

function mapStep(text: string): Step {
	const normalizedText = normalizePlaceholders(text);

	// Check if the text still has unparsed { or } (unsupported syntax)
	if (normalizedText.includes('}') || normalizedText.includes('{')) {
		console.error();
		console.error(`Syntax error: unmatched } or { found in a recipe step`);
		console.error();
		console.error(normalizedText);
		console.error();
	}

	return {
		text: normalizedText,
		pause: hasPause(text),
	};
}

export function mapSteps(
	steps: RecipeModelRaw['steps'],
	subrecipes: RecipeModelRaw['subrecipes'] = []
): StepsSection[] {
	const sections = splitBySection(steps);
	return sections.map(({ name, body }) => {
		const slug = getSubrecipeSlug(body);
		if (slug) {
			// Fetching subrecipe steps
			const subrecipe = subrecipes.find((x) => x.slug === slug);
			if (subrecipe === undefined) {
				console.error();
				console.error(
					`Subrecipe '${slug}' not found in steps. Either the slug is wrong, or the subrecipe isn’t attached to the main recipe.`
				);
				console.error(body);
				console.error();
				console.error(
					`Available subrecipes:`,
					subrecipes.map((x) => x.slug)
				);
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
				steps: lines.map(mapStep),
			};
		}
	});
}
