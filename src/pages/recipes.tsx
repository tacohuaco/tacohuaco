import React from 'react';
import { graphql } from 'gatsby';
import RecipesPage from '../layouts/RecipesPage';
import { Metatags } from '../components/Metatags';

type Props = {
	data: Queries.RecipesPageQuery;
	location: {
		pathname: string;
	};
};

export default function Recipes({ data, location }: Props) {
	const recipes = data.allGraphCmsRecipe?.nodes;
	if (!recipes) {
		return null;
	}

	return <RecipesPage url={location.pathname} recipes={recipes} />;
}

export const Head = ({ data, location }: Props) => {
	const recipes = data.allGraphCmsRecipe?.nodes;
	if (!recipes) {
		return null;
	}

	return <Metatags slug={location.pathname} images={recipes?.[0].images} />;
};

export const pageQuery = graphql`
	query RecipesPage {
		allGraphCmsRecipe(sort: { title: ASC }) {
			nodes {
				...RecipeMeta
			}
		}
	}
`;
