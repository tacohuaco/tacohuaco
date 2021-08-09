import React from 'react';
import { Stack, Heading, Text } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import { MDXRenderer } from '../components/MDXRenderer';
import Metatags from '../components/Metatags';
import TextContent from '../components/TextContent';
import { GraphCms_Shop } from '../graphql-types';
import Page from './Page';

type Shop = Pick<
	GraphCms_Shop,
	| 'address'
	| 'city'
	| 'country'
	| 'descriptionMdx'
	| 'name'
	| 'neighbourhood'
	| 'url'
	| 'zip'
>;

type Props = {
	shops: Shop[];
	url: string;
};

const formatAddress = ({ address, city, country, neighbourhood, zip }: Shop) =>
	[address, zip, neighbourhood, city, country].filter(Boolean).join(', ');

const getMapLink = ({ name, address, city, country, zip }: Shop) =>
	`https://www.google.com/maps/?q=${encodeURIComponent(
		[name, address, zip, city, country].filter(Boolean).join(', ')
	)}`;

export default function AboutPage({ shops, url }: Props) {
	return (
		<Page url={url}>
			<Metatags slug={url} />
			<Stack as="main" gap="l">
				<Heading level={1}>Shops</Heading>
				<Stack as="ul" gap="l">
					{shops.map((shop) => (
						<Stack key={shop.name} as="li" gap="m">
							<TextContent>
								<Heading level={2}>
									{shop.url ? (
										<Link href={shop.url}>{shop.name}</Link>
									) : (
										shop.name
									)}
								</Heading>
								<Stack gap="m">
									<TextContent fontSize="s">
										<MDXRenderer>{shop.descriptionMdx}</MDXRenderer>
									</TextContent>
									{shop.address && (
										<Text variant="small">
											<Link
												href={getMapLink(shop)}
												target="_blank"
												rel="noopener"
											>
												{formatAddress(shop)}
											</Link>
										</Text>
									)}
								</Stack>
							</TextContent>
						</Stack>
					))}
				</Stack>
			</Stack>
		</Page>
	);
}
