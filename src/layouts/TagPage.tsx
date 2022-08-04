import React from 'react';
import { Stack, Heading } from 'tamia';
import { upperFirst, lowerCase } from 'lodash';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';

type Props = {
	recipes: readonly Queries.RecipeMetaFragment[];
	url: string;
	tag: Queries.GraphCMS_Tag;
};

const TAGS_TO_TITLES: Record<string, string> = {
	NewYear: 'New Yearʼs eve recipes',
};

const tagToTitle = (tag: string) => {
	if (tag in TAGS_TO_TITLES) {
		return TAGS_TO_TITLES[tag];
	}
	return `${upperFirst(lowerCase(tag))} recipes`;
};

export default function TagPage({ recipes, url, tag }: Props) {
	const title = tagToTitle(tag);
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
