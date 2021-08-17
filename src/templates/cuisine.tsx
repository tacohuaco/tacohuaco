import React from 'react';
import { graphql } from 'gatsby';
import { GraphCms_Cuisine, RecipesPageQuery } from '../graphql-types';
import CuisinePage from '../layouts/CuisinePage';

type Props = {
	data: RecipesPageQuery;
	location: {
		pathname: string;
	};
	pageContext: {
		cuisine: GraphCms_Cuisine;
	};
};

const Recipes = ({
	data: { allGraphCmsRecipe },
	location: { pathname },
	pageContext: { cuisine },
}: Props) => {
	if (!allGraphCmsRecipe) {
		return null;
	}

	const { nodes } = allGraphCmsRecipe;

	return <CuisinePage url={pathname} cuisine={cuisine} recipes={nodes} />;
};

export default Recipes;

export const pageQuery = graphql`
	query CuisinePage($cuisine: GraphCMS_Cuisine!) {
		allGraphCmsRecipe(
			filter: { cuisines: { in: [$cuisine] } }
			sort: { fields: [title], order: ASC }
		) {
			nodes {
				...RecipeMeta
			}
		}
	}
`;
