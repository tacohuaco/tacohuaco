import React from 'react';
import { Text } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import { RecipeListSection } from './RecipeListSection';

interface SearchResultsProps {
	searchQuery: string;
	searchResults: readonly Queries.RecipeMetaFragment[];
}

export function SearchResults({
	searchQuery,
	searchResults,
}: SearchResultsProps) {
	return searchResults.length > 0 ? (
		<RecipeListSection title="Search results" recipes={searchResults} />
	) : (
		<Text>
			We couldnʼt find any food matching “{searchQuery}”.
			<br /> (Maybe youʼll find what youʼre looking for at{' '}
			<Link href="/recipes/">the recipes page</Link>?)
		</Text>
	);
}
