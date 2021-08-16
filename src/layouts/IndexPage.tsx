import React from 'react';
import { orderBy } from 'lodash';
import { Stack, Heading } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';
import { RecipeMeta } from '../types/Recipe';

type Props = {
	recipes: RecipeMeta[];
	url: string;
};

const CURRENT_SEASON = new Date().getMonth() + 1;

// Order recipies by the lengths of the seasons: recipes with shorter season first
const getSeasonalRecipes = (recipes: RecipeMeta[]): RecipeMeta[] => {
	return orderBy(
		recipes.filter((x) => x.seasons.includes(CURRENT_SEASON)),
		(x) => x.seasons.length
	);
};

export default function RecipePage({ recipes, url }: Props) {
	const seasonalRecipes = getSeasonalRecipes(recipes);
	return (
		<Page url={url}>
			<Metatags slug={url} images={recipes?.[0].images} />
			<Stack as="main" gap="xl">
				<Stack as="main" gap="l">
					<Heading level={1}>Recipes with ingredients in season</Heading>
					<RecipeList recipes={seasonalRecipes} />
				</Stack>
				<Stack as="main" gap="l">
					<Heading level={1}>Recipes</Heading>
					<RecipeList recipes={recipes} />
				</Stack>
			</Stack>
		</Page>
	);
}
