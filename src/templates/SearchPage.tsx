import { Stack, Text } from '../components';
import { SearchForm } from '../components/SearchForm';
import { SearchResults } from '../components/SearchResults';
import { useSearch } from '../hooks/useSearch';
import type { RecipeFragment } from '../types/Recipe';

type Props = {
	recipes: RecipeFragment[];
};

export function SearchPage({ recipes }: Props) {
	const { getSearchFieldProps, searchQuery, searchResults } =
		useSearch(recipes);

	return (
		<Stack gap="l">
			<header>
				<SearchForm {...getSearchFieldProps()} />
			</header>
			<Stack as="main" gap="l">
				{searchQuery === '' ? (
					<Text>
						Try searching for recipe names (<em>pozole</em>,{' '}
						<em>tres leches</em>), cuisines (<em>Mexican</em>, <em>Russian</em>
						), ingredients (<em>kimchi</em>, <em>tomatoes</em>
						), kinds of dishes (<em>lunch</em>, <em>soup</em>), seasons (
						<em>autumn</em>)...
					</Text>
				) : (
					<SearchResults
						searchQuery={searchQuery}
						searchResults={searchResults}
					/>
				)}
			</Stack>
		</Stack>
	);
}
