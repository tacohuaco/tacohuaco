import React from 'react';
import { Stack, Heading } from 'tamia';
import RecipeList from '../components/RecipeList';
import Metatags from '../components/Metatags';
import { SearchResults } from '../components/SearchResults';
import { SearchForm } from '../components/SearchForm';
import { useSearch } from '../hooks/useSearch';
import { RecipeMetaFragment } from '../graphql-types';
import Page from './Page';

type Props = {
	recipes: RecipeMetaFragment[];
	url: string;
};

export default function RecipesPage({ recipes, url }: Props) {
	const { getSearchFieldProps, searchQuery, searchResults } =
		useSearch(recipes);

	return (
		<Page url={url}>
			<Metatags slug={url} images={recipes?.[0].images} />
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
