import { Asset } from '../src/types/Asset';

export type Maybe<T> = T | null;

export interface RecipeModelRaw {
	artemsFavorite: boolean;
	cuisines: string[];
	createdAt: string;
	description: Maybe<string>;
	ingredients: string;
	keywords: Maybe<string>;
	margaritasFavorite: boolean;
	overnight: boolean;
	slug: string;
	source: Maybe<string>;
	steps: string;
	tags: string[];
	time: Maybe<number>;
	title: string;
	tools: Maybe<string>;
	notes: Maybe<string>;
	yields: Maybe<string>;
	images: Asset[];
	subrecipes: Pick<
		RecipeModelRaw,
		'slug' | 'title' | 'ingredients' | 'steps' | 'tools'
	>[];
	recipes: Pick<
		RecipeModelRaw,
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
		| 'ingredients'
		| 'subrecipes'
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

export interface ShopModelRaw {
	address: Maybe<string>;
	city: Maybe<string>;
	country: Maybe<string>;
	description: Maybe<string>;
	name: string;
	neighbourhood: Maybe<string>;
	url: Maybe<string>;
	zip: Maybe<number>;
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
