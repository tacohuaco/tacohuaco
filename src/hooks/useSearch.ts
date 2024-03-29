import { useMemo, useCallback } from 'react';
import uniq from 'lodash/uniq';
import { sentenceCase } from 'sentence-case';
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
import { INGREDIENTS } from '../util/olivier/langs/en/ingredients';
import { useUrlState } from './useUrlState';
import type { RecipeFragment } from '../types/Recipe';
import { getAllIngredients } from '../util/getAllIngredients';

const DEFAULT_AUTOCOMPLETE_ITEMS = [
	...Object.values(MONTH_TO_NAME),
	...SEASON_WINTER,
	...SEASON_SPRING,
	...SEASON_SUMMER,
	...SEASON_AUTUMN,
	FLAG_VEGAN,
	FLAG_VEGETARIAN,
];

const getIngredientAliases = (name: string) => {
	const aliases = INGREDIENTS.find((x) => x[0][0] === name) ?? [];
	// Return a plural of each alias
	return aliases.map((x) => (x.length > 1 ? x[1] : x[0]));
};

const getTitle = (title: string, titleEnglish?: string) => {
	return titleEnglish ? `${title} (${titleEnglish})` : title;
};

const getAutocompleteItems = (recipes: RecipeFragment[]): readonly string[] => {
	const allTitles: string[] = [];
	const allIngredients: string[] = [];
	const allTags: string[] = [];
	const allCuisines: string[] = [];
	const allKeywords: string[] = [];

	recipes.forEach((recipe) => {
		allTitles.push(getTitle(recipe.title, recipe.titleEnglish));

		const ingredients = getAllIngredients(recipe.ingredients);

		const ingredientNames = ingredients.flatMap(({ name }) =>
			getIngredientAliases(name)
		);

		allIngredients.push(...ingredientNames);

		const tagNames = recipe.tags.map((x) => sentenceCase(x).toLowerCase());
		allTags.push(...tagNames);

		allCuisines.push(...recipe.cuisines);

		allKeywords.push(...recipe.keywords);
	});

	return uniq([
		...DEFAULT_AUTOCOMPLETE_ITEMS,
		...allTitles,
		...allIngredients,
		...allTags,
		...allCuisines,
		...allKeywords,
	]);
};

export function useSearch(recipes: RecipeFragment[]) {
	const [searchQuery, setSearchQuery] = useUrlState({
		name: 'q',
		defaultValue: '',
	});
	const searchQueryDebounced = useDebouncedValue(searchQuery);
	const searchIndex = useSearchIndex(recipes);
	const searchResults = useSearchResults(
		searchIndex,
		recipes,
		searchQueryDebounced
	);

	const autocompleteItems = useMemo(() => {
		return getAutocompleteItems(recipes);
	}, [recipes]);

	const getSearchFieldProps = useCallback(() => {
		return {
			items: autocompleteItems,
			value: searchQuery,
			onChange: (value?: string) => setSearchQuery(value ?? ''),
		};
	}, [autocompleteItems, searchQuery]);

	return {
		getSearchFieldProps,
		searchQuery,
		searchResults,
	};
}
