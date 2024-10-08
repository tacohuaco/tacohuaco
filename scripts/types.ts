import type { Asset } from '../src/types/Asset';

export type Maybe<T> = T | null;

export interface RecipeModelRaw {
	createdAt: string;
	cuisines: string[];
	description: Maybe<string>;
	favorite: boolean;
	images: Asset[];
	ingredients: string;
	keywords: Maybe<string>;
	notes: Maybe<string>;
	overnight: boolean;
	slug: string;
	source: Maybe<string>;
	steps: string;
	tags: string[];
	time: Maybe<number>;
	title: string;
	titleEnglish: Maybe<string>;
	tools: Maybe<string>;
	yields: Maybe<string>;
	subrecipes: Pick<
		RecipeModelRaw,
		'slug' | 'title' | 'ingredients' | 'steps' | 'tools'
	>[];
	recipes: Pick<
		RecipeModelRaw,
		| 'createdAt'
		| 'cuisines'
		| 'favorite'
		| 'images'
		| 'ingredients'
		| 'overnight'
		| 'slug'
		| 'subrecipes'
		| 'tags'
		| 'time'
		| 'title'
	>[];
}

export interface TipModelRaw {
	content: string;
	tags: string[];
	ingredient: Maybe<string>;
}

export interface IngredientModelRaw {
	name: string;
	warnings: Maybe<string>;
}

export interface TipModel {
	content: string;
	tags: string[];
	ingredient?: string;
}

export interface IngredientModel {
	name: string;
	warnings: string[];
}
