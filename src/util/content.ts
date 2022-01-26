import { flow, intersection, uniqBy } from 'lodash';
import { visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import {
	parse,
	normalize,
	analyze,
	Ingredient,
	IngredientKind,
	IngredientInfo,
	Month,
} from './olivier';
import { FlagsJson } from '../graphql-types';

export const GRAPHCMS_MARKDOWN_FIELDS: Record<string, string[]> = {
	[`GraphCMS_Ingredient`]: ['description', 'storage'],
	[`GraphCMS_Recipe`]: [
		'description',
		'ingredients',
		'notes',
		'source',
		'steps',
		'tools',
	],
	[`GraphCMS_Shop`]: ['description'],
};

/**
 * Return all ingredients (actually all list items) from Markdown as an array
 * of strings
 */
export const getIngredientLines = (text: string): string[] => {
	const tree = fromMarkdown(text);
	const ingredients: string[] = [];
	visit(tree, 'listItem', (li) => {
		ingredients.push(toString(li));
	});
	return ingredients;
};

/**
 * Return ingredients in a Markdown ingredients list
 */
export const getIngredients = (ingredientsMarkdown: string): Ingredient[] => {
	const ingredientsRaw = getIngredientLines(ingredientsMarkdown);
	return ingredientsRaw.flatMap((x) => normalize(parse(x)));
};

/**
 *  Analyze ingredients in a Markdown ingredients list
 */
export const getIngredientsInfo = (
	ingredientsMarkdown: string
): IngredientInfo[] => {
	const ingredientsRaw = getIngredientLines(ingredientsMarkdown);
	return uniqBy(
		ingredientsRaw.flatMap((x) => analyze(normalize(parse(x)))),
		(x) => x.name
	);
};

/**
 * Gluten free recipe: less than 30% of the flour amount has gluten
 */
const isLowGlutenRecipe = (
	ingredients: Ingredient[],
	infos: IngredientInfo[]
) => {
	let glutenFloursAmount = 0;
	let glutenlessFloursAmount = 0;

	ingredients.forEach((ingredient) => {
		if (
			typeof ingredient.minAmount === 'number' &&
			(ingredient.name.endsWith(' flour') || ingredient.name.endsWith('starch'))
		) {
			const info = infos.find((x) => x.name === ingredient.name);
			if (info && info.hasGluten) {
				glutenFloursAmount += ingredient.minAmount;
			} else {
				glutenlessFloursAmount += ingredient.minAmount;
			}
		}
	});
	const glutennes = glutenFloursAmount / glutenlessFloursAmount;
	return glutennes < 0.33;
};

/**
 * Return flags for a Markdown ingredients list
 */
export const getRecipeFlags = (ingredientsMarkdown: string): FlagsJson => {
	const ingredients = getIngredients(ingredientsMarkdown);
	const infos = getIngredientsInfo(ingredientsMarkdown);
	return {
		vegan: infos.every((x) => x.kind === IngredientKind.Vegan),
		vegetarian: infos.every((x) =>
			[IngredientKind.Vegan, IngredientKind.Vegetarian].includes(x.kind)
		),
		glutenFree: infos.every((x) => x.hasGluten === false),
		lowGluten: isLowGlutenRecipe(ingredients, infos),
		dairyFree: infos.every((x) => x.hasDairy === false),
		noAddedSugar: infos.every((x) => x.hasSugar === false),
	};
};

/**
 * Recipe seasons: return months shared by all recipe ingredients
 */
export const getRecipeSeasons = (ingredientsMarkdown: string): Month[] => {
	const ingredients = getIngredientsInfo(ingredientsMarkdown);
	const allSeasons = ingredients
		.map((x) => x.seasons)
		.filter((x) => x.length > 0);
	return intersection(...allSeasons);
};

/**
 * Recipe precoditons: things to be done before starting cooking
 */
export const getRecipePreconditions = (
	ingredientsMarkdown: string
): string[] => {
	const ingredients = getIngredients(ingredientsMarkdown);
	return ingredients
		.map(({ name, comment }) => {
			if (
				comment?.startsWith('room temperature') ||
				comment?.startsWith('at room temperature')
			) {
				return `warm ${name} to room temperature`;
			}

			if (name === 'chicken stock') {
				return `unfreeze ${name} if frozen`;
			}

			return '';
		})
		.filter(Boolean);
};

/**
 * Wrap ingredient amount placeholders into italic so they could be replaced
 * in Mdx
 */
export const placeholdersToItalic = (text: string): string =>
	text
		.replace(/([^_])} (\w+)/gm, '$1_} $2_')
		.replace(/(\w+) {([^_])/gm, '_$1 {_$2');

/**
 * Reduce level of headings, so they match the page outline
 */
export const demoteHeadings = (text: string): string =>
	text.replace(/^##? /gm, '### ');

export const GRAPHCMS_FIELD_PREPROCESSING: Record<
	string,
	Record<string, (text: string) => string>
> = {
	[`GraphCMS_Recipe`]: {
		ingredients: flow([demoteHeadings]),
		steps: flow([placeholdersToItalic, demoteHeadings]),
	},
};
