import path from 'path';
import { GatsbyNode } from 'gatsby';
import richtypo from 'richtypo';
import rules from 'richtypo-rules-en';
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

// XXX: Gatsby has no types for this anywhere :-/
interface GatsbyContext {
	nodeModel: {
		getAllNodes<T>(params: { type?: string }): T[];
	};
}

const getSubrecipeIngredients = (
	source: Pick<GraphCms_Recipe, 'ingredients' | 'subrecipes' | 'remoteId'>,
	context: GatsbyContext
): string[] => {
	if (source.subrecipes.length > 0) {
		const remoteIds = source.subrecipes.map((x) => x.remoteId);
		const subrecipes = context.nodeModel
			.getAllNodes<GraphCms_Recipe>({
				type: 'GraphCMS_Recipe',
			})
			.filter((x) => remoteIds.includes(x.remoteId));
		return subrecipes.map((x) => x.ingredients || '');
	} else {
		return [];
	}
};

const getAllRecipeIngredients = (
	source: Pick<GraphCms_Recipe, 'ingredients' | 'subrecipes' | 'remoteId'>,
	context: GatsbyContext
): string => {
	const subrecipeIngredients = getSubrecipeIngredients(source, context);
	return [source.ingredients, ...subrecipeIngredients].join('\n');
};

const getRecipeWarnings = (
	source: Pick<GraphCms_Recipe, 'ingredients' | 'subrecipes' | 'remoteId'>,
	context: GatsbyContext
): Promise<string[]> => {
	const recipeIngredients = getIngredients(
		getAllRecipeIngredients(source, context)
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
		.map((x) => x.warnings)
		.filter(Boolean)
		.map(getMdx);
	return Promise.all(promises);
};

const getRecipeTips = (
	source: Pick<
		GraphCms_Recipe,
		'ingredients' | 'subrecipes' | 'remoteId' | 'tags'
	>,
	context: GatsbyContext
): Promise<string[]> => {
	const recipeIngredients = getIngredients(
		getAllRecipeIngredients(source, context)
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
		.map((x) => x.content)
		.filter(Boolean)
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
	'ingredients' | 'subrecipes' | 'remoteId' | 'tags'
>;

// Create Mdx fields for all Markdown type fields from GraphCMS
export const createResolvers: GatsbyNode['createResolvers'] = ({
	// eslint-disable-next-line no-shadow
	createResolvers,
}) => {
	createResolvers({
		[`GraphCMS_Recipe`]: {
			[`allIngredients`]: {
				type: '[IngredientJson!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getIngredients(getAllRecipeIngredients(source, context));
				},
			},
			[`allIngredientsInfo`]: {
				type: '[IngredientInfoJson!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getIngredientsInfo(getAllRecipeIngredients(source, context));
				},
			},
			[`flags`]: {
				type: 'FlagsJson!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getRecipeFlags(getAllRecipeIngredients(source, context));
				},
			},
			[`seasons`]: {
				type: '[Int!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getRecipeSeasons(getAllRecipeIngredients(source, context));
				},
			},
			[`preconditions`]: {
				type: '[String!]!',
				resolve(source: Source, args: unknown, context: GatsbyContext) {
					return getRecipePreconditions(
						getAllRecipeIngredients(source, context)
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
