import React from 'react';
import { graphql } from 'gatsby';
import TagPage from '../layouts/TagPage';

type Props = {
	data: Queries.RecipesPageQuery;
	location: {
		pathname: string;
	};
	pageContext: {
		tag: Queries.GraphCMS_Tag;
	};
};

const Recipes = ({
	data: { allGraphCmsRecipe },
	location: { pathname },
	pageContext: { tag },
}: Props) => {
	if (!allGraphCmsRecipe) {
		return null;
	}

	const { nodes } = allGraphCmsRecipe;

	return <TagPage url={pathname} tag={tag} recipes={nodes} />;
};

export default Recipes;

export const pageQuery = graphql`
	query TagsPage($tag: GraphCMS_Tag!) {
		allGraphCmsRecipe(
			filter: { tags: { in: [$tag] } }
			sort: { fields: [title], order: ASC }
		) {
			nodes {
				...RecipeMeta
			}
		}
	}
`;
