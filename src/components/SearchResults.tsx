import { Text } from './Text';
import { Link } from './Link';
import type { RecipeFragment } from '../types/Recipe';
import { RecipeListSection } from './RecipeListSection';

interface SearchResultsProps {
	searchQuery: string;
	searchResults: RecipeFragment[];
}

export function SearchResults({
	searchQuery,
	searchResults,
}: SearchResultsProps) {
	return searchResults.length > 0 ? (
		<RecipeListSection title="Search results" recipes={searchResults} />
	) : (
		<Text>
			We couldn’t find any food matching “{searchQuery}”.
			<br /> (Maybe youʼll find what youʼre looking for at{' '}
			<Link href="/recipes/">the recipes page</Link>?)
		</Text>
	);
}
