import React from 'react';
import { orderBy } from 'lodash';
import { Stack, VisuallyHidden } from 'tamia';
import Page from './Page';
import Metatags from '../components/Metatags';
import { RecipeMetaFragment } from '../graphql-types';
import { DynamicContainer } from '../components/DynamicContainer';
import { SearchForm } from '../components/SearchForm';
import { useSearch } from '../hooks/useSearch';
import { SearchResults } from '../components/SearchResults';
import { RecipeListSection } from '../components/RecipeListSection';

type Props = {
	recipes: RecipeMetaFragment[];
	url: string;
};

const CURRENT_SEASON = new Date().getMonth() + 1;
const NEW_RECIPES_TO_SHOW = 6;

// Order recipies by the lengths of the seasons list: recipes with shorter season
const getCurrentSeasonRecipes = (
	recipes: RecipeMetaFragment[]
): RecipeMetaFragment[] => {
	return orderBy(
		recipes.filter((x) => x.seasons.includes(CURRENT_SEASON)),
		(x) => x.seasons.length
	);
};

const getNewRecipes = (recipes: RecipeMetaFragment[]): RecipeMetaFragment[] => {
	return orderBy(recipes, (x) => -Date.parse(x.createdAt)).slice(
		0,
		NEW_RECIPES_TO_SHOW
	);
};

export default function IndexPage({ recipes, url }: Props) {
	const recipesInSeason = getCurrentSeasonRecipes(recipes);
	const newRecipes = getNewRecipes(recipes);

	const { getSearchFieldProps, searchQuery, searchResults } =
		useSearch(recipes);

	return (
		<Page url={url}>
			<Metatags slug={url} images={recipes?.[0].images} />
			<VisuallyHidden as="h1">Recipes</VisuallyHidden>
			<Stack gap="l">
				<header>
					<SearchForm {...getSearchFieldProps()} />
				</header>
				<Stack as="main" gap="xl">
					{searchQuery !== '' ? (
						<SearchResults
							searchQuery={searchQuery}
							searchResults={searchResults}
						/>
					) : (
						<>
							<DynamicContainer>
								<RecipeListSection
									title="Recently added recipes"
									recipes={newRecipes}
								/>
							</DynamicContainer>
							{recipesInSeason.length > 0 && (
								<DynamicContainer>
									<RecipeListSection
										title="Recipes with ingredients in season"
										recipes={recipesInSeason}
									/>
								</DynamicContainer>
							)}
						</>
					)}
				</Stack>
			</Stack>
		</Page>
	);
}
