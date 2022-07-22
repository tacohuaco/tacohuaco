import React, { ReactNode, useState } from 'react';
import { orderBy, uniq } from 'lodash';
import { sentenceCase } from 'sentence-case';
import { Stack, Heading, Text, VisuallyHidden } from 'tamia';
import Page from './Page';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';
import { RecipeMetaFragment } from '../graphql-types';
import { DynamicContainer } from '../components/DynamicContainer';
import { useSearchResults } from '../hooks/useSearchResults';
import {
	MONTH_TO_NAME,
	SEASON_SPRING,
	SEASON_SUMMER,
	SEASON_AUTUMN,
	SEASON_WINTER,
	useSearchIndex,
	FLAG_VEGAN,
	FLAG_VEGETARIAN,
} from '../hooks/useSearchIndex';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { SearchField } from '../components/SearchField';
import { Link } from 'tamia-gatsby-link';

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

const DEFAULT_AUTOCOMPLETE_ITEMS = [
	...Object.values(MONTH_TO_NAME),
	...SEASON_WINTER,
	...SEASON_SPRING,
	...SEASON_SUMMER,
	...SEASON_AUTUMN,
	FLAG_VEGAN,
	FLAG_VEGETARIAN,
];

const getAutocompleteItems = (recipes: RecipeMetaFragment[]): string[] => {
	const allTitles: string[] = [];
	const allIngredients: string[] = [];
	const allTags: string[] = [];
	const allCuisines: string[] = [];

	recipes.forEach((recipe) => {
		allTitles.push(recipe.title);

		const ingredientNames = recipe.allIngredients.flatMap(({ ingredients }) =>
			ingredients.map(({ name }) => name)
		);
		allIngredients.push(...ingredientNames);

		const tagNames = recipe.tags.map((x) => sentenceCase(x).toLowerCase());
		allTags.push(...tagNames);

		const cuisineNames = recipe.cuisines;
		allCuisines.push(...cuisineNames);
	});

	return uniq([
		...DEFAULT_AUTOCOMPLETE_ITEMS,
		...allTitles,
		...allIngredients,
		...allTags,
		...allCuisines,
	]);
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

	const autocompleteItems = getAutocompleteItems(recipes);

	return (
		<Page url={url}>
			<Metatags slug={url} images={recipes?.[0].images} />
			<VisuallyHidden as="h1">Recipes</VisuallyHidden>
			<Stack as="header" gap="l">
				<SearchField
					items={autocompleteItems}
					value={searchQuery}
					onChange={(value) => setSearchQuery(value || '')}
				/>
				<Stack as="main" gap="xl">
					{searchQuery !== '' ? (
						searchResults.length > 0 ? (
							<RecipeListSection
								title="Search results"
								recipes={searchResults}
							/>
						) : (
							<Text>
								We couldnʼt find any food matching “{searchQuery}”.
								<br /> (Maybe youʼll find what youʼre looking for at{' '}
								<Link href="/recipes/">the recipes page</Link>?)
							</Text>
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
