import React from 'react';
import { graphql } from 'gatsby';
import { ShopsPageQuery } from '../graphql-types';
import ShopsPage from '../layouts/ShopsPage';

type Props = {
	data: ShopsPageQuery;
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

	return <ShopsPage url={pathname} shops={nodes} />;
};

export default Shops;

export const pageQuery = graphql`
	query ShopsPage {
		allGraphCmsShop {
			nodes {
				name
				descriptionMdx
			}
		}
	}
`;
