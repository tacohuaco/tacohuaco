import { flow } from 'lodash';
import { visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import {
	parse,
	normalize,
	analyze,
	format,
	Ingredient,
	IngredientKind,
} from './olivier';
import { Flags } from '../types/Flags';

export const GRAPHCMS_MARKDOWN_FIELDS: Record<string, string[]> = {
	[`GraphCMS_Ingredient`]: ['description', 'storage'],
	[`GraphCMS_Recipe`]: ['description', 'ingredients', 'steps', 'notes'],
	[`GraphCMS_Shop`]: ['description'],
};

// const print = (text: string) => {
// 	console.log(text);
// 	return text;
// };

export const getIngredientLines = (text: string): string[] => {
	const tree = fromMarkdown(text);
	const ingredients: string[] = [];
	visit(tree, 'listItem', (li) => {
		ingredients.push(toString(li));
	});
	return ingredients;
};

export const getRecipeFlags = (ingredientsMarkdown: string): Flags => {
	const ingredientsRaw = getIngredientLines(ingredientsMarkdown);
	const ingredients = ingredientsRaw.map((x) => analyze(normalize(parse(x))));
	return {
		vegan: ingredients.every((x) => x.kind === IngredientKind.Vegan),
		vegetarian: ingredients.every((x) =>
			[IngredientKind.Vegan, IngredientKind.Vegetarian].includes(x.kind)
		),
		gluten: ingredients.some((x) => x.hasGluten === true),
		diary: ingredients.some((x) => x.hasDairy === true),
		addedSugar: ingredients.some((x) => x.hasSugar === true),
	};
};

const formatIngredient = ({
	minAmount,
	maxAmount,
	modifier,
	unit,
	name,
	comment,
}: Ingredient): string =>
	[
		[
			'**',
			minAmount,
			minAmount !== maxAmount ? `–${maxAmount}` : '',
			unit ? ` ${unit}` : '',
			'**',
		].join(''),
		unit || minAmount === 'a bit' ? 'of' : undefined,
		modifier,
		name,
		comment ? `_${comment}_` : undefined,
	]
		.filter((x) => x && x !== '****')
		.join(' ');

/**
 * Highlight amounts and comments in ingredients
 */
export const formatIngredients = (text: string): string => {
	let nextText = text;
	const tree = fromMarkdown(text);
	visit(tree, 'listItem', (li) => {
		const ingredientText = toString(li);
		const ingredient = format(normalize(parse(ingredientText)));
		nextText = nextText.replace(ingredientText, formatIngredient(ingredient));
	});
	return nextText;
};

/**
 * Reduce leveles of headings, so they match the page outline
 */
export const demoteHeadings = (text: string): string =>
	text.replace(/^##? /gm, '### ');

export const GRAPHCMS_FIELD_PREPROCESSING: Record<
	string,
	Record<string, (text: string) => string>
> = {
	[`GraphCMS_Recipe`]: {
		ingredients: flow([formatIngredients, demoteHeadings]),
		steps: flow([demoteHeadings]),
	},
};
