import { GraphCms_Recipe, GraphCms_Ingredient } from '../graphql-types';

const stripHeadings = (text: string): string => text.replace(/^#.*?\n+/gm, '');

const splitLines = (text: string): string[] =>
	text.split('\n').filter((x) => !/^\s*$/.test(x));

export const getRecipeIngredients = (
	recipe: Pick<GraphCms_Recipe, 'ingredients'>,
	allIngredients: Pick<
		GraphCms_Ingredient,
		| 'name'
		| 'season'
		| 'kind'
		| 'hasDairy'
		| 'hasGluten'
		| 'hasNuts'
		| 'hasSugar'
	>[]
) => {
	if (!recipe.ingredients) {
		return [];
	}
	const ingredientsRaw = splitLines(stripHeadings(recipe.ingredients));
	return allIngredients.filter((ingredient) => {
		const lowerCaseName = ingredient.name.toLowerCase();
		return ingredientsRaw.find(
			(x) =>
				x.toLowerCase().endsWith(lowerCaseName) ||
				x.toLowerCase().endsWith(`${lowerCaseName}s`) ||
				x.toLowerCase().endsWith(`${lowerCaseName}es`)
		);
	});
};

export const getFlags = (
	ingredients: Pick<
		GraphCms_Ingredient,
		'kind' | 'hasDairy' | 'hasGluten' | 'hasNuts' | 'hasSugar'
	>[]
) => {
	return {
		vegan: ingredients.every((x) => x.kind === 'Vegan'),
		vegetarian: ingredients.every((x) =>
			['Vegan', 'Vegetarian'].includes(x.kind)
		),
		glutenFree: ingredients.every((x) => x.hasGluten === false),
		diaryFree: ingredients.every((x) => x.hasDairy === false),
		noAddedSugar: ingredients.every((x) => x.hasSugar === false),
	};
};

export type Flags = ReturnType<typeof getFlags>;
