import React from 'react';
import { Stack } from 'tamia';
import { Flags } from '../util/client';
import RecipeFlag from './RecipeFlag';

type Props = {
	flags: Flags;
	margaritasFavorite?: boolean;
	artemsFavorite?: boolean;
};

export default function RecipeFlags({
	flags,
	margaritasFavorite,
	artemsFavorite,
}: Props) {
	return (
		<Stack gap="s" direction="row">
			{Object.entries(flags)
				.filter(([, value]) => value)
				.map(([key]) => (
					<RecipeFlag key={key} type={key as keyof Flags} />
				))}
			{margaritasFavorite && <RecipeFlag type="margaritasFavorite" />}
			{artemsFavorite && <RecipeFlag type="artemsFavorite" />}
		</Stack>
	);
}
