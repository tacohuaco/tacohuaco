import React from 'react';
import { Stack, Heading } from 'tamia';
import RecipeList from '../components/RecipeList';
import { SearchResults } from '../components/SearchResults';
import { SearchForm } from '../components/SearchForm';
import { useSearch } from '../hooks/useSearch';
import Page from './Page';

type Props = {
	recipes: readonly Queries.RecipeMetaFragment[];
	url: string;
};

export default function RecipesPage({ recipes, url }: Props) {
	const { getSearchFieldProps, searchQuery, searchResults } =
		useSearch(recipes);

	return (
		<Page url={url}>
			<Stack gap="l">
				<header>
					<SearchForm {...getSearchFieldProps()} />
				</header>
				<Stack as="main" gap="l">
					{searchQuery !== '' ? (
						<SearchResults
							searchQuery={searchQuery}
							searchResults={searchResults}
						/>
					) : (
						<>
							<Heading level={1}>All recipes</Heading>
							<RecipeList recipes={recipes} />
						</>
					)}
				</Stack>
			</Stack>
		</Page>
	);
}
