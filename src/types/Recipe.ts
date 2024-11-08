import { Month, type Ingredient, type IngredientInfo } from '../util/olivier';
import { type Asset } from './Asset';

export type RecipeIngredient = Ingredient &
	IngredientInfo & {
		subrecipeSlug?: string;
	};

export interface IngredientsSection {
	name: string;
	ingredients: RecipeIngredient[][];
}

export interface Step {
	text: string;
	pause: boolean;
}

export interface StepsSection {
	name: string;
	steps: Step[];
}

export interface Yields {
	amount: number;
	unit: string;
}

export enum ChartStepType {
	PreheatOven = 'PreheatOven',
	// TODO: Merge with Unfreeze?
	WarmToRoomTemp = 'WarmToRoomTemp',
	Unfreeze = 'Unfreeze',
	Refrigerate = 'Refrigerate',
	CookCovered = 'CookCovered',
	CookUncovered = 'CookUncovered',
}

export interface ChartStep {
	type: ChartStepType;
	subtype?: string;
	value?: string;
}

// Just enough data to render a recipe card and search
export type RecipeFragment = Pick<
	Recipe,
	| 'createdAt'
	| 'cuisines'
	| 'dairyFree'
	| 'favorite'
	| 'glutenFree'
	| 'images'
	| 'ingredients'
	| 'keywords'
	| 'lowGluten'
	| 'noAddedSugar'
	| 'overnight'
	| 'seasons'
	| 'slug'
	| 'tags'
	| 'time'
	| 'title'
	| 'titleEnglish'
	| 'vegan'
	| 'vegetarian'
>;

export interface Recipe {
	vegan: boolean;
	vegetarian: boolean;
	glutenFree: boolean;
	lowGluten: boolean;
	dairyFree: boolean;
	noAddedSugar: boolean;
	seasons: Month[];
	createdAt: Date;
	title: string;
	titleEnglish?: string;
	description?: string;
	favorite: boolean;
	overnight: boolean;
	cuisines: string[];
	tags: string[];
	ingredients: IngredientsSection[];
	steps: StepsSection[];
	keywords: string[];
	slug: string;
	source?: string;
	time?: number;
	tools: string[];
	notes: string[];
	preconditions: string[];
	chart: ChartStep[];
	tips: string[];
	warnings: string[];
	yields: Yields;
	images: Asset[];
	subrecipes: Pick<Recipe, 'slug' | 'title'>[];
	recipes: Pick<Recipe, 'slug' | 'title'>[];
}
