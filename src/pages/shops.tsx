import React from 'react';
import { graphql } from 'gatsby';
import AboutPage from '../layouts/ShopsPage';
import { Metatags } from '../components/Metatags';

type Props = {
	data: Queries.ShopsPageQuery;
	location: {
		pathname: string;
	};
};

export default function Shops({ data, location }: Props) {
	const shops = data.allGraphCmsShop?.nodes;
	if (!shops) {
		return null;
	}

	return <AboutPage url={location.pathname} shops={shops} />;
}

export const Head = ({ data, location }: Props) => {
	const shops = data.allGraphCmsShop?.nodes;
	if (!shops) {
		return null;
	}

	return <Metatags slug={location.pathname} title="Shops" />;
};

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
