import React from 'react';
import { graphql } from 'gatsby';
import TagPage, { tagToTitle } from '../layouts/TagPage';
import Metatags from '../components/Metatags';

type Props = {
	data: Queries.RecipesPageQuery;
	location: {
		pathname: string;
	};
	pageContext: {
		tag: Queries.GraphCMS_Tag;
	};
};

export default function Recipes({ data, location, pageContext }: Props) {
	const recipes = data.allGraphCmsRecipe?.nodes;
	if (!recipes) {
		return null;
	}

	return (
		<TagPage url={location.pathname} tag={pageContext.tag} recipes={recipes} />
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
			title={tagToTitle(pageContext.tag)}
			images={recipes?.[0].images}
		/>
	);
};

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
