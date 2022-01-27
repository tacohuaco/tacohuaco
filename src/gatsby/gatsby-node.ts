import path from 'path';
import { GatsbyNode } from 'gatsby';
import { kebabCase, uniq } from 'lodash';
import {
	AllRecipesQuery,
	GraphCms_Recipe,
	GraphCms_Ingredient,
	GraphCms_Tip,
} from '../graphql-types';
import { getMdx } from '../util/mdx';
import {
	GRAPHCMS_MARKDOWN_FIELDS,
	GRAPHCMS_FIELD_PREPROCESSING,
	getRecipeFlags,
	getRecipeSeasons,
	getRecipePreconditions,
	getIngredients,
	getIngredientsInfo,
} from '../util/content';
import { ALL_FLAGS } from '../consts';
import { typo } from '../util/typo';

// XXX: Gatsby has no types for this anywhere :-/
interface GatsbyContext {
	nodeModel: {
		getAllNodes<T>(params: { type?: string }): T[];
	};
}

interface IngredientsWithMetaRaw {
	slug: string;
	ingredients: string;
}

const getSubrecipeIngredients = (
	source: Pick<GraphCms_Recipe, 'ingredients' | 'subrecipes' | 'remoteId'>,
	context: GatsbyContext
): IngredientsWithMetaRaw[] => {
	if (source.subrecipes.length > 0) {
		const remoteIds = source.subrecipes.map((x) => x.remoteId);
		const subrecipes = context.nodeModel
			.getAllNodes<GraphCms_Recipe>({
				type: 'GraphCMS_Recipe',
			})
			.filter((x) => remoteIds.includes(x.remoteId));
		return subrecipes.map((x) => ({
			slug: x.slug,
			ingredients: x.ingredients || '',
		}));
	} else {
		return [];
	}
};

const getAllRecipeIngredients = (
	source: Pick<
		GraphCms_Recipe,
		'slug' | 'ingredients' | 'subrecipes' | 'remoteId'
	>,
	context: GatsbyContext
): IngredientsWithMetaRaw[] => {
	const subrecipeIngredients = getSubrecipeIngredients(source, context);
	return [
		{
			slug: source.slug,
			ingredients: source.ingredients || '',
		},
		...subrecipeIngredients,
	];
};

const getAllRecipeIngredientsFlattened = (
	source: Pick<
		GraphCms_Recipe,
		'slug' | 'ingredients' | 'subrecipes' | 'remoteId'
	>,
	context: GatsbyContext
): string => {
	return getAllRecipeIngredients(source, context)
		.map((x) => x.ingredients)
		.join('\n');
};

const getRecipeWarnings = (
	source: Pick<
		GraphCms_Recipe,
		'slug' | 'ingredients' | 'subrecipes' | 'remoteId'
	>,
	context: GatsbyContext
): Promise<string[]> => {
	const recipeIngredients = getIngredients(
		getAllRecipeIngredientsFlattened(source, context)
	);
	const promises = context.nodeModel
		.getAllNodes<GraphCms_Ingredient>({
			type: 'GraphCMS_Ingredient',
		})
		.filter((ingredient) =>
			recipeIngredients.some(
				({ name }) => name === ingredient.name.toLowerCase()
			)
		)
		.map((x) => x.warnings || '')
		.filter(Boolean)
		.map(typo)
		.map(getMdx);
	return Promise.all(promises);
};

const getRecipeTips = (
	source: Pick<
		GraphCms_Recipe,
		'slug' | 'ingredients' | 'subrecipes' | 'remoteId' | 'tags'
	>,
	context: GatsbyContext
): Promise<string[]> => {
	const recipeIngredients = getIngredients(
		getAllRecipeIngredientsFlattened(source, context)
	);
	const promises = context.nodeModel
		.getAllNodes<GraphCms_Tip>({
			type: 'GraphCMS_Tip',
		})
		.filter(
			(tip) =>
				(!tip.ingredient ||
					recipeIngredients.some(
						({ name }) => name === String(tip.ingredient).toLowerCase()
					)) &&
				tip.tags.every((tag) => source.tags.includes(tag))
		)
		.map((x) => x.content || '')
		.filter(Boolean)
		.map(typo)
		.map(getMdx);
	return Promise.all(promises);
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
	actions,
}) => {
	actions.setWebpackConfig({
		// Turn off source maps
		devtool: false,
	});
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
	({ actions: { createTypes } }) => {
		createTypes(`
    type FlagsJson {
      vegan: Boolean!
      vegetarian: Boolean!
      glutenFree: Boolean!
      lowGluten: Boolean!
      dairyFree: Boolean!
      noAddedSugar: Boolean!
    }
    type IngredientJson {
		name: String!
		minAmount: String
		maxAmount: String
		unit: String
		modifier: String
		comment: String
	}
	type IngredientsJson {
		slug: String!
		ingredients: [IngredientJson!]!
	}
	type IngredientInfoJson {
		name: String!
		kind: Int!
		hasGluten: Boolean!
		hasDairy: Boolean!
		hasSugar: Boolean!
		seasons: [Int!]!
	}
  `);
	};

type Source = Pick<
	GraphCms_Recipe,
	'slug' | 'ingredients' | 'subrecipes' | 'remoteId' | 'tags'
>;

// Create Mdx fields for all Markdown type fields from GraphCMS
export const createResolvers: GatsbyNode['createResolvers'] = ({
	// eslint-disable-next-line no-shadow
	createResolvers,
}) => {
	createResolvers({
		[`GraphCMS_Recipe`]: {
			[`allIngredients`]: {
				type: '[IngredientsJson!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getAllRecipeIngredients(source, context).map((x) => ({
						slug: x.slug,
						ingredients: getIngredients(x.ingredients),
					}));
				},
			},
			[`allIngredientsInfo`]: {
				type: '[IngredientInfoJson!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getIngredientsInfo(
						getAllRecipeIngredientsFlattened(source, context)
					);
				},
			},
			[`flags`]: {
				type: 'FlagsJson!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getRecipeFlags(
						getAllRecipeIngredientsFlattened(source, context)
					);
				},
			},
			[`seasons`]: {
				type: '[Int!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getRecipeSeasons(
						getAllRecipeIngredientsFlattened(source, context)
					);
				},
			},
			[`preconditions`]: {
				type: '[String!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getRecipePreconditions(
						getAllRecipeIngredientsFlattened(source, context)
					);
				},
			},
			[`warnings`]: {
				type: '[String!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getRecipeWarnings(source, context);
				},
			},
			[`tips`]: {
				type: '[String!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getRecipeTips(source, context);
				},
			},
		},
	});

	for (const [type, fields] of Object.entries(GRAPHCMS_MARKDOWN_FIELDS)) {
		for (const field of fields) {
			createResolvers({
				[type]: {
					[`${field}Mdx`]: {
						type: 'String!',
						resolve(source: Record<string, string>) {
							const preprocess =
								GRAPHCMS_FIELD_PREPROCESSING?.[type]?.[field] || ((x) => x);
							return getMdx(preprocess(source[field]));
						},
					},
				},
			});
		}
	}
};

export const createPages: GatsbyNode['createPages'] = async ({
	graphql,
	actions: { createPage },
	reporter,
}) => {
	const { data, errors } = await graphql<AllRecipesQuery>(`
		query AllRecipes {
			allGraphCmsRecipe {
				nodes {
					cuisines
					slug
					tags
				}
			}
		}
	`);

	if (!data) {
		reporter.panicOnBuild(errors);
		return;
	}

	const recipes = data.allGraphCmsRecipe.nodes;

	// Create pages for all recipes
	recipes.forEach(({ slug }) => {
		createPage({
			path: `/recipes/${slug}/`,
			component: path.resolve(__dirname, '../templates/recipe.tsx'),
			context: {
				slug,
			},
		});
	});

	// Create pages for all tags
	const tags = uniq(recipes.flatMap((x) => x.tags));
	tags.forEach((tag) => {
		const slug = kebabCase(tag);
		createPage({
			path: `/tags/${slug}/`,
			component: path.resolve(__dirname, '../templates/tag.tsx'),
			context: {
				tag,
			},
		});
	});

	// Create pages for all cuisines
	const cuisines = uniq(recipes.flatMap((x) => x.cuisines));
	cuisines.forEach((cuisine) => {
		const slug = kebabCase(cuisine);
		createPage({
			path: `/cuisines/${slug}/`,
			component: path.resolve(__dirname, '../templates/cuisine.tsx'),
			context: {
				cuisine,
			},
		});
	});

	// Create pages for all flags
	ALL_FLAGS.forEach((flag) => {
		const slug = kebabCase(flag);
		createPage({
			path: `/flags/${slug}/`,
			component: path.resolve(__dirname, '../templates/flag.tsx'),
			context: {
				flag,
			},
		});
	});
};
