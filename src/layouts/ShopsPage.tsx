import React from 'react';
import { Stack, Heading, TextContent } from 'tamia';
import { MDXRenderer } from '../components/MDXRenderer';
import Metatags from '../components/Metatags';
import { GraphCms_Shop } from '../graphql-types';
import Page from './Page';

type Props = {
	shops: Pick<GraphCms_Shop, 'name' | 'descriptionMdx'>[];
	url: string;
};

export default function ShopsPage({ shops: recipes, url }: Props) {
	return (
		<Page url={url}>
			<Metatags slug={url} />
			<Stack as="main" gap="l">
				<Heading level={1}>Shops</Heading>
				<Stack as="ul" gap="l">
					{recipes.map((shop) => (
						<Stack key={shop.name} as="li" gap="m">
							<TextContent>
								<Heading level={2}>{shop.name}</Heading>
								<MDXRenderer>{shop.descriptionMdx}</MDXRenderer>
							</TextContent>
						</Stack>
					))}
				</Stack>
			</Stack>
		</Page>
	);
}
