import React from 'react';
import { Stack, Heading } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';
import { GraphCms_Tag, RecipeMetaFragment } from '../graphql-types';

type Props = {
	recipes: RecipeMetaFragment[];
	url: string;
	tag: GraphCms_Tag;
};

export default function TagPage({ recipes, url, tag }: Props) {
	return (
		<Page url={url}>
			<Metatags slug={url} images={recipes?.[0].images} />
			<Stack as="main" gap="l">
				<Heading level={1}>{tag} recipes</Heading>
				<RecipeList recipes={recipes} />
			</Stack>
		</Page>
	);
}
