import { Recipe } from '../../src/types/Recipe';
import { RecipeRaw } from '../types';
import { getAllIngredients } from './getAllIngredients';
import { mapFlags } from './mapFlags';
import { mapIngredients } from './mapIngredients';
import { mapPreconditions } from './mapPreconditions';
import { mapSeasons } from './mapSeasons';
import { mapSteps } from './mapSteps';
import { mapTools } from './mapTools';

function mapMaybeString(text: string | null) {
	return text === null ? '' : text;
}

function mapDate(date: string) {
	return new Date(Date.parse(date));
}

function mapKeywords(keywords: RecipeRaw['keywords']) {
	return keywords === null ? [] : keywords.split(/\s*;\s*/);
}

function mapNotes(notes: RecipeRaw['notes']) {
	return notes === null ? [] : notes.split(/\n+/);
}

// TODO: global notes

export function mapRecipe(recipe: RecipeRaw): Recipe {
	const ingredientsSections = mapIngredients(
		recipe.ingredients,
		recipe.subrecipes
	);
	const ingredients = getAllIngredients(ingredientsSections);
	const subrecipes = recipe.subrecipes.map(({ slug, title }) => ({
		slug,
		title,
	}));
	const recipes = recipe.recipes.map((uberrecipe) => ({
		...uberrecipe,
		createdAt: mapDate(uberrecipe.createdAt),
	}));

	return {
		...recipe,
		subrecipes,
		recipes,
		ingredients: ingredientsSections,
		createdAt: mapDate(recipe.createdAt),
		steps: mapSteps(recipe.steps, recipe.subrecipes),
		keywords: mapKeywords(recipe.keywords),
		source: mapMaybeString(recipe.source),
		tools: mapTools(recipe.tools, recipe.subrecipes),
		notes: mapNotes(recipe.notes),
		seasons: mapSeasons(ingredients),
		preconditions: mapPreconditions(ingredients),
		...mapFlags(ingredients),
	};
}
