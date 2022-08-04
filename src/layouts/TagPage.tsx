import React from 'react';
import { Stack, Heading } from 'tamia';
import { upperFirst, lowerCase } from 'lodash';
import Page from './Page';
import RecipeList from '../components/RecipeList';

type Props = {
	recipes: readonly Queries.RecipeMetaFragment[];
	url: string;
	tag: Queries.GraphCMS_Tag;
};

const TAGS_TO_TITLES: Record<string, string> = {
	NewYear: 'New Yearʼs eve recipes',
};

export const tagToTitle = (tag: string) => {
	if (tag in TAGS_TO_TITLES) {
		return TAGS_TO_TITLES[tag];
	}
	return `${upperFirst(lowerCase(tag))} recipes`;
};

export default function TagPage({ recipes, url, tag }: Props) {
	return (
		<Page url={url}>
			<Stack as="main" gap="l">
				<Heading level={1}>{tagToTitle(tag)}</Heading>
				<RecipeList recipes={recipes} />
			</Stack>
		</Page>
	);
}
