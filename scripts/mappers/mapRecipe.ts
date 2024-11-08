import { normalizeOption, parseOption } from '../../src/util/olivier';
import type { Recipe, Yields } from '../../src/types/Recipe';
import type { IngredientModel, RecipeModelRaw, TipModel } from '../types';
import { getAllIngredients } from '../../src/util/getAllIngredients';
import { mapFlags } from './mapFlags';
import { mapIngredients } from './mapIngredients';
import { mapPreconditions } from './mapPreconditions';
import { mapSeasons } from './mapSeasons';
import { mapSteps } from './mapSteps';
import { mapTips } from './mapTips';
import { mapTools } from './mapTools';
import { mapWarnings } from './mapWarnings';
import { mapMaybeString } from './mapMaybeString';
import { mapMaybeNumber } from './mapMaybeNumber';
import { mapChart } from './mapChart';

function mapDate(date: string) {
	return new Date(Date.parse(date));
}

function mapKeywords(keywords: RecipeModelRaw['keywords']) {
	return keywords === null ? [] : keywords.split(/\s*[,;]\s*/);
}

function mapNotes(notes: RecipeModelRaw['notes']) {
	return notes === null ? [] : notes.split(/\n+/);
}

// TODO: extract
// TODO: add tests
// TODO: in the future make it a required field in Hygraph
function mapYields(yields: RecipeModelRaw['yields']): Yields {
	const { minAmount, unit } = normalizeOption(
		parseOption(`${yields === null ? '1 portion' : yields} yields`)
	);
	return {
		amount: Number(minAmount ?? 1),
		unit: unit ?? 'portion',
	};
}

export function mapRecipe(
	recipe: RecipeModelRaw,
	allIngredients: IngredientModel[],
	allTips: TipModel[]
): Recipe {
	const ingredientsSections = mapIngredients(
		recipe.ingredients,
		recipe.subrecipes
	);
	const subrecipes = recipe.subrecipes.map(({ slug, title }) => ({
		slug,
		title,
	}));
	const ingredients = getAllIngredients(ingredientsSections);
	const recipes = recipe.recipes.map(({ slug, title }) => ({
		slug,
		title,
	}));
	const stepsSections = mapSteps(recipe.steps, recipe.subrecipes);

	if (stepsSections.length !== ingredientsSections.length) {
		console.error();
		console.error(
			`Number of sections of ingredients and steps don’t match: ${stepsSections.length} vs. ${ingredientsSections.length}.`
		);
		console.error();
	}

	return {
		...recipe,
		subrecipes,
		recipes,
		steps: stepsSections,
		ingredients: ingredientsSections,
		titleEnglish: mapMaybeString(recipe.titleEnglish),
		createdAt: mapDate(recipe.createdAt),
		keywords: mapKeywords(recipe.keywords),
		tools: mapTools(recipe.tools, recipe.subrecipes, ingredientsSections),
		notes: mapNotes(recipe.notes),
		seasons: mapSeasons(ingredients),
		preconditions: mapPreconditions(ingredients),
		chart: mapChart(ingredients, stepsSections),
		description: mapMaybeString(recipe.description),
		source: mapMaybeString(recipe.source),
		yields: mapYields(recipe.yields),
		time: mapMaybeNumber(recipe.time),
		tips: mapTips(ingredients, recipe.tags, allTips),
		warnings: mapWarnings(ingredients, allIngredients),
		...mapFlags(ingredients),
	};
}
