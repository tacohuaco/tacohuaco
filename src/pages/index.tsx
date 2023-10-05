import React from 'react';
import { graphql } from 'gatsby';
import IndexPage from '../layouts/IndexPage';
import { Metatags } from '../components/Metatags';

type Props = {
	data: Queries.IndexPageQuery;
	location: {
		pathname: string;
	};
};

export default function Index({ data, location }: Props) {
	const recipes = data.allGraphCmsRecipe?.nodes;
	if (!recipes) {
		return null;
	}

	return <IndexPage url={location.pathname} recipes={recipes} />;
}

export const Head = ({ data, location }: Props) => {
	const recipes = data.allGraphCmsRecipe?.nodes;
	if (!recipes) {
		return null;
	}

	return <Metatags slug={location.pathname} images={recipes?.[0].images} />;
};

export const pageQuery = graphql`
	query IndexPage {
		allGraphCmsRecipe(sort: { title: ASC }) {
			nodes {
				...RecipeMeta
			}
		}
	}
`;
