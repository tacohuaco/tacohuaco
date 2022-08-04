import React from 'react';
import { Stack, Heading } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';
import { FlagName } from '../types/Flags';

type Props = {
	recipes: readonly Queries.RecipeMetaFragment[];
	url: string;
	flag: FlagName;
};

const TITLES: Record<FlagName, string> = {
	artemsFavorite: 'Artem’s favorite recipes',
	margaritasFavorite: 'Margarita’s favorite recipes',
	vegan: 'Vegan recipes',
	vegetarian: 'Vegetarian recipes',
	dairyFree: 'Dairy free recipes',
	noAddedSugar: 'Recipes without refined sugar',
	glutenFree: 'Gluten free recipes',
	lowGluten: 'Low gluten recipes',
};

export default function FlagPage({ recipes, url, flag }: Props) {
	const title = TITLES[flag];
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
