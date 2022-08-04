import React from 'react';
import { graphql } from 'gatsby';
import RecipesPage from '../layouts/RecipesPage';

type Props = {
	data: Queries.RecipesPageQuery;
	location: {
		pathname: string;
	};
};

const Recipes = ({
	data: { allGraphCmsRecipe },
	location: { pathname },
}: Props) => {
	if (!allGraphCmsRecipe) {
		return null;
	}

	const { nodes } = allGraphCmsRecipe;

	return <RecipesPage url={pathname} recipes={nodes} />;
};

export default Recipes;

export const pageQuery = graphql`
	query RecipesPage {
		allGraphCmsRecipe(sort: { fields: [title], order: ASC }) {
			nodes {
				...RecipeMeta
			}
		}
	}
`;
