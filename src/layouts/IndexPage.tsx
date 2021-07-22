import React from 'react';
import { Stack, Heading } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';

type Props = {
	recipes: any[];
	url: string;
};

export default function RecipePage({ recipes, url }: Props) {
	return (
		<Page url={url}>
			<Metatags slug={url} />
			<main>
				<Heading level={1}>Recipes</Heading>
				<Stack gap="l">
					<RecipeList recipes={recipes} />
				</Stack>
			</main>
		</Page>
	);
}
