import React from 'react';
import { graphql } from 'gatsby';
import CuisinePage from '../layouts/CuisinePage';
import { Metatags } from '../components/Metatags';

type Props = {
	data: Queries.RecipesPageQuery;
	location: {
		pathname: string;
	};
	pageContext: {
		cuisine: Queries.GraphCMS_Cuisine;
	};
};

export default function Recipes({ data, location, pageContext }: Props) {
	const recipes = data.allGraphCmsRecipe?.nodes;
	if (!recipes) {
		return null;
	}

	return (
		<CuisinePage
			url={location.pathname}
			cuisine={pageContext.cuisine}
			recipes={recipes}
		/>
	);
}

export const Head = ({ data, location, pageContext }: Props) => {
	const recipes = data.allGraphCmsRecipe?.nodes;
	if (!recipes) {
		return null;
	}

	return (
		<Metatags
			slug={location.pathname}
			title={`${pageContext.cuisine} recipes`}
			images={recipes?.[0].images}
		/>
	);
};

export const pageQuery = graphql`
	query CuisinePage($cuisine: GraphCMS_Cuisine!) {
		allGraphCmsRecipe(
			filter: { cuisines: { in: [$cuisine] } }
			sort: { title: ASC }
		) {
			nodes {
				...RecipeMeta
			}
		}
	}
`;
