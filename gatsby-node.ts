import { GatsbyNode } from 'gatsby';
import richtypo from 'richtypo';
import rules from 'richtypo-rules-en';
import { AllRecipesQuery, GraphCms_Recipe } from './src/graphql-types';
import { getMdx } from './src/util/mdx';
import {
	GRAPHCMS_MARKDOWN_FIELDS,
	GRAPHCMS_FIELD_PREPROCESSING,
	getRecipeFlags,
} from './src/util/content';

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
			.getAllNodes<typeof source>({
				type: 'GraphCMS_Recipe',
			})
			.filter((x) => remoteIds.includes(x.remoteId));
		return subrecipes.map((x) => x.ingredients || '');
	} else {
		return [];
	}
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
      gluten: Boolean!
      diary: Boolean!
      addedSugar: Boolean!
    }
  `);
	};

// Create Mdx fields for all Markdown type fields from GraphCMS
export const createResolvers: GatsbyNode['createResolvers'] = ({
	// eslint-disable-next-line no-shadow
	createResolvers,
}) => {
	createResolvers({
		[`GraphCMS_Recipe`]: {
			[`flags`]: {
				type: 'FlagsJson!',
				resolve(
					source: Pick<
						GraphCms_Recipe,
						'ingredients' | 'subrecipes' | 'remoteId'
					>,
					args: unknown,
					context: GatsbyContext
				) {
					const subrecipeIngredients = getSubrecipeIngredients(source, context);
					return getRecipeFlags(
						[source.ingredients, ...subrecipeIngredients].join('\n')
					);
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
					slug
				}
			}
		}
	`);

	if (!data) {
		reporter.panicOnBuild(errors);
		return;
	}

	const recipes = data.allGraphCmsRecipe.nodes;

	recipes.forEach(({ slug }) => {
		createPage({
			path: `/recipes/${slug}/`,
			component: `${__dirname}/src/templates/recipe.tsx`,
			context: {
				slug,
			},
		});
	});
};
