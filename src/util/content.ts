import { flow } from 'lodash';
import { visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import { parse, normalize, analyze, IngredientKind } from './olivier';
import { Flags } from '../types/Flags';

export const GRAPHCMS_MARKDOWN_FIELDS: Record<string, string[]> = {
	[`GraphCMS_Ingredient`]: ['description', 'storage'],
	[`GraphCMS_Recipe`]: ['description', 'ingredients', 'steps', 'notes'],
	[`GraphCMS_Shop`]: ['description'],
};

const UNITS = [
	'm',
	'ml',
	'g',
	'kg',
	'clove',
	'cloves',
	'sprig',
	'sprigs',
	'tsp',
	'tbsp',
];
const UNITSLESS = ['a bit'];

const print = (text: string) => {
	console.log(text);
	return text;
};

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
	console.log('🦆', ingredients);
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

/**
 * Highlight amounts in ingredients
 */
export const boldizeAmounts = (text: string): string =>
	text
		.replace(
			new RegExp(`^- (\\d+(?:\\[/-]\\d+)? (?:${UNITS.join('|')}))\\b`, 'gm'),
			'- **$1**'
		)
		.replace(new RegExp(`^- (${UNITSLESS.join('|')})`, 'gm'), '- **$1**')
		.replace(/^- (\d+(?:[/-]\d+)?)/gm, '- **$1**');

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
		ingredients: flow([boldizeAmounts, demoteHeadings]),
		steps: flow([demoteHeadings]),
	},
};

const MAX_RELATED = 5;
const DATE_FORMAT = 'MMMM D, YYYY';

// function getRelatedPosts(
// 	posts: { slug: string; tags: string[]; timestamp: string }[],
// 	{ slug, tags }: { slug: string; tags: string[] }
// ) {
// 	const weighted = posts
// 		.filter((d) => d.slug !== slug)
// 		.map((d) => {
// 			const common = (d.tags || []).filter((t) => (tags || []).includes(t));
// 			return {
// 				...d,
// 				weight: common.length * Number(d.timestamp),
// 			};
// 		})
// 		.filter((d) => d.weight > 0);
// 	const sorted = sortBy(weighted, 'weight').reverse();
// 	return sorted.slice(0, MAX_RELATED);
// }
