import { IngredientWithInfo, Month } from '../util/olivier';
import { Asset } from './Asset';

export interface IngredientsSection {
	name: string;
	ingredients: IngredientWithInfo[];
}

export interface StepsSection {
	name: string;
	steps: string[];
}

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
	description: string;
	artemsFavorite: boolean;
	margaritasFavorite: boolean;
	overnight: boolean;
	cuisines: string[];
	tags: string[];
	ingredients: IngredientsSection[];
	steps: StepsSection[];
	keywords: string[];
	slug: string;
	source: string;
	time: number;
	tools: string[];
	notes: string[];
	preconditions: string[];
	yields: string;
	images: Asset[];
	subrecipes: Pick<Recipe, 'slug' | 'title'>[];
	recipes: Pick<
		Recipe,
		| 'artemsFavorite'
		| 'createdAt'
		| 'cuisines'
		| 'images'
		| 'margaritasFavorite'
		| 'overnight'
		| 'slug'
		| 'time'
		| 'title'
		| 'tags'
	>[];
}
