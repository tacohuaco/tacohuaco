import { GatsbyNode } from 'gatsby';
import richtypo from 'richtypo';
import rules from 'richtypo-rules-en';
import { AllRecipesQuery } from './src/graphql-types';
import { getMdx } from './src/util/mdx';
import {
	GRAPHCMS_MARKDOWN_FIELDS,
	GRAPHCMS_FIELD_PREPROCESSING,
} from './src/util/content';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
	actions,
}) => {
	actions.setWebpackConfig({
		// Turn off source maps
		devtool: false,
	});
};

// Create Mdx fields for all Markdown type fields from GraphCMS
export const createResolvers: GatsbyNode['createResolvers'] = ({
	// eslint-disable-next-line no-shadow
	createResolvers,
}) => {
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
			path: slug,
			component: `${__dirname}/src/templates/recipe.tsx`,
			context: {
				slug,
				// related: getRelatedPosts(recipes, {
				// 	slug,
				// 	tags,
				// }),
				// dateFormat: DATE_FORMAT,
			},
		});
	});
};
