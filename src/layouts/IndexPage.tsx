import React, { ReactNode } from 'react';
import { orderBy } from 'lodash';
import { Stack, Heading, VisuallyHidden } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';
import { RecipeMeta } from '../types/Recipe';

type Props = {
	recipes: RecipeMeta[];
	url: string;
};

const CURRENT_SEASON = new Date().getMonth() + 1;
// const NEXT_SEASON = CURRENT_SEASON === 12 ? 1 : CURRENT_SEASON + 1;

// Order recipies by the lengths of the seasons: recipes with shorter season
const getCurrentSeasonRecipes = (recipes: RecipeMeta[]): RecipeMeta[] => {
	return orderBy(
		recipes.filter((x) => x.seasons.includes(CURRENT_SEASON)),
		(x) => x.seasons.length
	);
};

// const getNextSeasonRecipes = (recipes: RecipeMeta[]): RecipeMeta[] => {
// 	return orderBy(
// 		recipes.filter((x) => x.seasons.includes(NEXT_SEASON)),
// 		(x) => x.seasons.length
// 	);
// };

const RecipeListSection = ({
	title,
	recipes,
}: {
	title: ReactNode;
	recipes: RecipeMeta[];
}) => (
	<Stack as="main" gap="l">
		<Heading as="h2" level={1}>
			{title}
		</Heading>
		<RecipeList recipes={recipes} />
	</Stack>
);

export default function RecipePage({ recipes, url }: Props) {
	return (
		<Page url={url}>
			<Metatags slug={url} images={recipes?.[0].images} />
			<VisuallyHidden as="h1">Recipes</VisuallyHidden>
			<Stack as="main" gap="xl">
				<RecipeListSection
					title="Recipes with ingredients in season"
					recipes={getCurrentSeasonRecipes(recipes)}
				/>
				{/* <RecipeListSection
					title="Recipes for the next month"
					recipes={getNextSeasonRecipes(recipes)}
				/> */}
				<RecipeListSection title="All recipes" recipes={recipes} />
			</Stack>
		</Page>
	);
}
