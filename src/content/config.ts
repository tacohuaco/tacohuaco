import { z, defineCollection } from 'astro:content';
import { IngredientKind, Month, type Amount } from '../util/olivier';
import { type Asset } from '../types/Asset';
import {
	type IngredientsSection,
	type Recipe,
	type RecipeFragment,
	type RecipeIngredient,
	type Step,
	type StepsSection,
	type Yields,
} from '../types/Recipe';

// TODO: Find a better way to sync TypeScript interface and Zod scheme

const asset = z.object({
	url: z.string(),
	handle: z.string(),
	width: z.number(),
	height: z.number(),
}) satisfies z.ZodType<Asset>;

const amount = z.string().or(z.number()) satisfies z.ZodType<Amount>;

const ingredientWithInfo = z.object({
	name: z.string(),
	minAmount: z.optional(amount),
	maxAmount: z.optional(amount),
	unit: z.string().optional(),
	modifier: z.string().optional(),
	comment: z.string().optional(),
	kind: z.nativeEnum(IngredientKind),
	hasGluten: z.boolean(),
	hasDairy: z.boolean(),
	hasSugar: z.boolean(),
	seasons: z.array(z.nativeEnum(Month)),
	subrecipeSlug: z.string().optional(),
}) satisfies z.ZodType<RecipeIngredient>;

const ingredientsSection = z.object({
	name: z.string(),
	ingredients: z.array(z.array(ingredientWithInfo)),
}) satisfies z.ZodType<IngredientsSection>;

const step = z.object({
	text: z.string(),
	pause: z.boolean(),
}) satisfies z.ZodType<Step>;

const stepsSection = z.object({
	name: z.string(),
	steps: z.array(step),
}) satisfies z.ZodType<StepsSection>;

const yields = z.object({
	amount: z.number(),
	unit: z.string(),
}) satisfies z.ZodType<Yields>;

const subrecipe = z.object({
	slug: z.string(),
	title: z.string(),
}) satisfies z.ZodType<Pick<Recipe, 'slug' | 'title'>>;

const fragment = z.object({
	artemsFavorite: z.boolean(),
	createdAt: z.coerce.date(),
	cuisines: z.array(z.string()),
	dairyFree: z.boolean(),
	glutenFree: z.boolean(),
	images: z.array(asset),
	ingredients: z.array(ingredientsSection),
	keywords: z.array(z.string()),
	lowGluten: z.boolean(),
	margaritasFavorite: z.boolean(),
	noAddedSugar: z.boolean(),
	overnight: z.boolean(),
	seasons: z.array(z.nativeEnum(Month)),
	slug: z.string(),
	tags: z.array(z.string()),
	time: z.number().optional(),
	title: z.string(),
	vegan: z.boolean(),
	vegetarian: z.boolean(),
}) satisfies z.ZodType<RecipeFragment>;

const recipes = defineCollection({
	type: 'data',
	schema: fragment.extend({
		description: z.string().optional(),
		titleEnglish: z.string().optional(),
		notes: z.array(z.string()),
		preconditions: z.array(z.string()),
		recipes: z.array(subrecipe),
		source: z.string().optional(),
		steps: z.array(stepsSection),
		subrecipes: z.array(subrecipe),
		tips: z.array(z.string()),
		tools: z.array(z.string()),
		warnings: z.array(z.string()),
		yields,
	}) satisfies z.ZodType<Recipe>,
});

export const collections = {
	recipes,
};
