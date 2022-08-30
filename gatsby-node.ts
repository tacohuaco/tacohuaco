import path from 'path';
import { kebabCase, uniq } from 'lodash';
import type { GatsbyNode } from 'gatsby';
import { getMdx } from './src/util/mdx';
import {
	GRAPHCMS_MARKDOWN_FIELDS,
	GRAPHCMS_FIELD_PREPROCESSING,
	getRecipeFlags,
	getRecipeSeasons,
	getRecipePreconditions,
	getIngredients,
	getIngredientsInfo,
} from './src/util/content';
import { ALL_FLAGS } from './src/consts';
import { typo } from './src/util/typo';

// XXX: Gatsby has no types for this anywhere :-/
interface GatsbyContext {
	nodeModel: {
		findAll<T>(params: { type?: string }): Promise<{ entries: T[] }>;
	};
}

interface IngredientsWithMetaRaw {
	slug: string;
	ingredients: string;
}

const getSubrecipeIngredients = async (
	source: Pick<
		Queries.GraphCMS_Recipe,
		'ingredients' | 'subrecipes' | 'remoteId'
	>,
	context: GatsbyContext
): Promise<IngredientsWithMetaRaw[]> => {
	if (source.subrecipes.length > 0) {
		const remoteIds = source.subrecipes.map((x) => x.remoteId);
		const allSubrecipes =
			await context.nodeModel.findAll<Queries.GraphCMS_Recipe>({
				type: 'GraphCMS_Recipe',
			});
		const subrecipes = allSubrecipes.entries.filter((x) =>
			remoteIds.includes(x.remoteId)
		);
		return subrecipes.map((x) => ({
			slug: x.slug,
			ingredients: x.ingredients || '',
		}));
	} else {
		return [];
	}
};

const getAllRecipeIngredients = async (
	source: Pick<
		Queries.GraphCMS_Recipe,
		'slug' | 'ingredients' | 'subrecipes' | 'remoteId'
	>,
	context: GatsbyContext
): Promise<IngredientsWithMetaRaw[]> => {
	const subrecipeIngredients = await getSubrecipeIngredients(source, context);
	return [
		{
			slug: source.slug,
			ingredients: source.ingredients || '',
		},
		...subrecipeIngredients,
	];
};

const getAllRecipeIngredientsFlattened = async (
	source: Pick<
		Queries.GraphCMS_Recipe,
		'slug' | 'ingredients' | 'subrecipes' | 'remoteId'
	>,
	context: GatsbyContext
): Promise<string> => {
	const allRecipeIngredients = await getAllRecipeIngredients(source, context);
	return allRecipeIngredients.map((x) => x.ingredients).join('\n');
};

const getRecipeWarnings = async (
	source: Pick<
		Queries.GraphCMS_Recipe,
		'slug' | 'ingredients' | 'subrecipes' | 'remoteId'
	>,
	context: GatsbyContext
): Promise<string[]> => {
	const recipeIngredients = getIngredients(
		await getAllRecipeIngredientsFlattened(source, context)
	);
	const allIngredients =
		await context.nodeModel.findAll<Queries.GraphCMS_Ingredient>({
			type: 'GraphCMS_Ingredient',
		});
	const promises = allIngredients.entries
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

const getRecipeTips = async (
	source: Pick<
		Queries.GraphCMS_Recipe,
		'slug' | 'ingredients' | 'subrecipes' | 'remoteId' | 'tags'
	>,
	context: GatsbyContext
): Promise<string[]> => {
	const recipeIngredients = getIngredients(
		await getAllRecipeIngredientsFlattened(source, context)
	);
	const allTips = await context.nodeModel.findAll<Queries.GraphCMS_Tip>({
		type: 'GraphCMS_Tip',
	});
	const promises = allTips.entries
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
	Queries.GraphCMS_Recipe,
	'slug' | 'ingredients' | 'subrecipes' | 'remoteId' | 'tags' | 'keywords'
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
				resolve: async (
					source: Source,
					args: unknown,
					context: GatsbyContext
				) => {
					const allIngredients = await getAllRecipeIngredients(source, context);
					return allIngredients.map((x) => ({
						slug: x.slug,
						ingredients: getIngredients(x.ingredients),
					}));
				},
			},
			[`allIngredientsInfo`]: {
				type: '[IngredientInfoJson!]!',
				resolve: async (
					source: Source,
					args: unknown,
					context: GatsbyContext
				) => {
					return getIngredientsInfo(
						await getAllRecipeIngredientsFlattened(source, context)
					);
				},
			},
			[`flags`]: {
				type: 'FlagsJson!',
				resolve: async (
					source: Source,
					args: unknown,
					context: GatsbyContext
				) => {
					return getRecipeFlags(
						await getAllRecipeIngredientsFlattened(source, context)
					);
				},
			},
			[`seasons`]: {
				type: '[Int!]!',
				resolve: async (
					source: Source,
					args: unknown,
					context: GatsbyContext
				) => {
					return getRecipeSeasons(
						await getAllRecipeIngredientsFlattened(source, context)
					);
				},
			},
			[`preconditions`]: {
				type: '[String!]!',
				resolve: async (
					source: Source,
					args: unknown,
					context: GatsbyContext
				) => {
					return getRecipePreconditions(
						await getAllRecipeIngredientsFlattened(source, context)
					);
				},
			},
			[`warnings`]: {
				type: '[String!]!',
				resolve: (source: Source, args: unknown, context: GatsbyContext) => {
					return getRecipeWarnings(source, context);
				},
			},
			[`tips`]: {
				type: '[String!]!',
				resolve: (source: Source, args: unknown, context: GatsbyContext) => {
					return getRecipeTips(source, context);
				},
			},
			[`keywordsList`]: {
				type: '[String!]!',
				resolve: (source: Source) => {
					return (source.keywords || '').split(/\s*[,;]\s*/).filter(Boolean);
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
	const { data, errors } = await graphql<Queries.AllRecipesQuery>(`
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
			component: path.resolve('src/templates/recipe.tsx'),
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
			component: path.resolve('src/templates/tag.tsx'),
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
			component: path.resolve('src/templates/cuisine.tsx'),
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
			component: path.resolve('src/templates/flag.tsx'),
			context: {
				flag,
			},
		});
	});
};
