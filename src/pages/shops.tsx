import React from 'react';
import { graphql } from 'gatsby';
import AboutPage from '../layouts/ShopsPage';

type Props = {
	data: Queries.ShopsPageQuery;
	location: {
		pathname: string;
	};
};

const Shops = ({
	data: { allGraphCmsShop },
	location: { pathname },
}: Props) => {
	if (!allGraphCmsShop) {
		return null;
	}

	const { nodes } = allGraphCmsShop;

	return <AboutPage url={pathname} shops={nodes} />;
};

export default Shops;

export const pageQuery = graphql`
	query ShopsPage {
		allGraphCmsShop {
			nodes {
				address
				city
				country
				descriptionMdx
				name
				neighbourhood
				url
				zip
			}
		}
	}
`;
