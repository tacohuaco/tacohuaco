import React from 'react';
import { Stack, Heading } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';
import { GraphCms_Cuisine, RecipeMetaFragment } from '../graphql-types';

type Props = {
	recipes: RecipeMetaFragment[];
	url: string;
	cuisine: GraphCms_Cuisine;
};

export default function CuisinePage({ recipes, url, cuisine }: Props) {
	const title = `${cuisine} recipes`;
	return (
		<Page url={url}>
			<Metatags slug={url} title={title} images={recipes?.[0].images} />
			<Stack as="main" gap="l">
				<Heading level={1}>{title}</Heading>
				<RecipeList recipes={recipes} />
			</Stack>
		</Page>
	);
}
