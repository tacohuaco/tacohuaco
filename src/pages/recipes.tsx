import React from 'react';
import { graphql } from 'gatsby';
import { RecipesPageQuery } from '../graphql-types';
import IndexPage from '../layouts/IndexPage';

type Props = {
	data: RecipesPageQuery;
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

	return <IndexPage url={pathname} recipes={nodes} />;
};

export default Recipes;

export const pageQuery = graphql`
	query RecipesPage {
		allGraphCmsRecipe(sort: { fields: [title], order: ASC }) {
			nodes {
				flags {
					vegan
					vegetarian
					gluten
					diary
					addedSugar
				}
				margaritasFavorite
				artemsFavorite
				time
				title
				slug
				images {
					handle
					height
					url
					width
				}
			}
		}
	}
`;
