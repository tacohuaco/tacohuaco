import React from 'react';
import { Stack, Heading } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';

type Props = {
	recipes: readonly Queries.RecipeMetaFragment[];
	url: string;
	cuisine: Queries.GraphCMS_Cuisine;
};

export default function CuisinePage({ recipes, url, cuisine }: Props) {
	return (
		<Page url={url}>
			<Stack as="main" gap="l">
				<Heading level={1}>{cuisine} recipes</Heading>
				<RecipeList recipes={recipes} />
			</Stack>
		</Page>
	);
}
