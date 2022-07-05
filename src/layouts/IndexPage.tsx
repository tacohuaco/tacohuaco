import React, { ReactNode, useState } from 'react';
import { orderBy } from 'lodash';
import { Stack, Heading, Text, VisuallyHidden } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';
import { RecipeMetaFragment } from '../graphql-types';
import { DynamicContainer } from '../components/DynamicContainer';
import { useSearchResults } from '../hooks/useSearchResults';
import { useSearchIndex } from '../hooks/useSearchIndex';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { SearchField } from '../components/SearchField';

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

const RecipeListSection = ({
	title,
	recipes,
}: {
	title: ReactNode;
	recipes: RecipeMetaFragment[];
}) => (
	<Stack as="main" gap="l">
		<Heading as="h2" level={1}>
			{title}
		</Heading>
		<RecipeList recipes={recipes} />
	</Stack>
);

export default function IndexPage({ recipes, url }: Props) {
	const recipesInSeason = getCurrentSeasonRecipes(recipes);
	const newRecipes = getNewRecipes(recipes);

	const [searchQuery, setSearchQuery] = useState('');
	const searchQueryDebounced = useDebouncedValue(searchQuery);
	const searchIndex = useSearchIndex(recipes);
	const searchResults = useSearchResults(
		searchIndex,
		recipes,
		searchQueryDebounced
	);

	return (
		<Page url={url}>
			<Metatags slug={url} images={recipes?.[0].images} />
			<VisuallyHidden as="h1">Recipes</VisuallyHidden>
			<Stack as="header" gap="l">
				<SearchField
					value={searchQuery}
					onChange={(event) => setSearchQuery(event.target.value)}
				/>
				<Stack as="main" gap="xl">
					{searchQuery !== '' ? (
						searchResults.length > 0 ? (
							<RecipeListSection
								title="Search results"
								recipes={searchResults}
							/>
						) : (
							<Text>Computer says no</Text>
						)
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
