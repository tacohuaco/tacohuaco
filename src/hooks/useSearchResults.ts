import { useMemo } from 'react';
import deburr from 'lodash/deburr';
import type { Index } from 'lunr';
import type { RecipeFragment } from '../types/Recipe';

export function useSearchResults(
	rawIndex: Index,
	rawStore: RecipeFragment[],
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
