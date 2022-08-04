import { useMemo } from 'react';
import { Index } from 'lunr';
import { deburr } from 'lodash';

export function useSearchResults(
	rawIndex: Index,
	rawStore: readonly Queries.RecipeMetaFragment[],
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

		const results = index.search(deburr(query));

		return results.flatMap(
			({ ref }) => store.find((x) => x.slug === ref) || []
		);
	}, [query, index, store]);
}
