import React from 'react';
import { graphql } from 'gatsby';
import { IndexPageQuery } from '../graphql-types';
import IndexPage from '../layouts/IndexPage';

type Props = {
	data: IndexPageQuery;
	location: {
		pathname: string;
	};
};

const Index = ({
	data: { allGraphCmsRecipe },
	location: { pathname },
}: Props) => {
	if (!allGraphCmsRecipe) {
		return null;
	}

	const { nodes } = allGraphCmsRecipe;

	console.log(nodes);

	return <IndexPage url={pathname} recipes={nodes} />;
};

export default Index;

export const pageQuery = graphql`
	query IndexPage {
		allGraphCmsRecipe(sort: { fields: [title], order: ASC }) {
			nodes {
				title
				slug
			}
		}
	}
`;