import React from 'react';
import { Stack } from 'tamia';
import { FlagsJson } from '../graphql-types';
import { RecipeFlag } from './RecipeFlag';

type Props = {
	flags: FlagsJson;
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
			{flags.vegan && <RecipeFlag type="vegan" />}
			{flags.vegetarian && <RecipeFlag type="vegetarian" />}
			{flags.glutenFree && <RecipeFlag type="glutenFree" />}
			{flags.dairyFree && <RecipeFlag type="dairyFree" />}
			{flags.noAddedSugar && <RecipeFlag type="noAddedSugar" />}
			{margaritasFavorite && <RecipeFlag type="margaritasFavorite" />}
			{artemsFavorite && <RecipeFlag type="artemsFavorite" />}
		</Stack>
	);
}
