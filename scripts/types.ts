import { Asset } from '../src/types/Asset';

export type Maybe<T> = T | null;

export interface RecipeRaw {
	artemsFavorite: boolean;
	cuisines: string[];
	createdAt: string;
	description: string;
	ingredients: string;
	keywords: Maybe<string>;
	margaritasFavorite: boolean;
	overnight: boolean;
	slug: string;
	source: Maybe<string>;
	steps: string;
	tags: string[];
	time: number;
	title: string;
	tools: Maybe<string>;
	notes: Maybe<string>;
	yields: string;
	images: Asset[];
	subrecipes: Pick<
		RecipeRaw,
		'slug' | 'title' | 'ingredients' | 'steps' | 'tools'
	>[];
	recipes: Pick<
		RecipeRaw,
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
