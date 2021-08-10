import React from 'react';
import { Stack, Heading } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';
import { RecipeMeta } from '../types/Recipe';

type Props = {
	recipes: RecipeMeta[];
	url: string;
};

export default function RecipePage({ recipes, url }: Props) {
	return (
		<Page url={url}>
			<Metatags slug={url} images={recipes?.[0].images} />
			<Stack as="main" gap="l">
				<Heading level={1}>Recipes</Heading>
				<RecipeList recipes={recipes} />
			</Stack>
		</Page>
	);
}