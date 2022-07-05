import { useMemo } from 'react';
import { Index } from 'lunr';
import { RecipeMetaFragment } from '../graphql-types';

export function useSearchResults(
	rawIndex: Index,
	rawStore: RecipeMetaFragment[],
	query?: string
) {
	const index = useMemo(() => {
		return rawIndex;
	}, [rawIndex]);

	const store = useMemo(() => {
		return rawStore;
	}, [rawStore]);

	return useMemo(() => {
		if (!query) {
			return [];
		}

		const results = index.search(query);

		return results.flatMap(
			({ ref }) => store.find((x) => x.slug === ref) || []
		);
	}, [query, index, store]);
}
