import React from 'react';
import { graphql } from 'gatsby';
import { RecipeMetaFragment, RecipesPageQuery } from '../graphql-types';
import FlagPage from '../layouts/FlagPage';
import { FlagName } from '../types/Flags';

type Props = {
	data: RecipesPageQuery;
	location: {
		pathname: string;
	};
	pageContext: {
		flag: FlagName;
	};
};

const filterRecipes = (recipes: RecipeMetaFragment[], flag: FlagName) => {
	return recipes.filter(
		// HACK: Use any, otherwise the could would be unnecessary complex
		(recipe) => (recipe as any).flags[flag] || (recipe as any)[flag]
	);
};

const FlagRecipes = ({
	data: { allGraphCmsRecipe },
	location: { pathname },
	pageContext: { flag },
}: Props) => {
	if (!allGraphCmsRecipe) {
		return null;
	}

	const { nodes } = allGraphCmsRecipe;

	const filteredRecipes = filterRecipes(nodes, flag);

	if (filteredRecipes.length === 0) {
		return <h1>Not found</h1>;
	}

	return <FlagPage url={pathname} flag={flag} recipes={filteredRecipes} />;
};

export default FlagRecipes;

// HACK: We can't filter by flags so have to query all recipes and filter in render
export const pageQuery = graphql`
	query FlagPage {
		allGraphCmsRecipe(sort: { fields: [title], order: ASC }) {
			nodes {
				...RecipeMeta
			}
		}
	}
`;
