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
	const title = `${tag} recipes`;
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
