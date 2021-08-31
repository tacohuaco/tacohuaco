import React from 'react';
import { Stack } from 'tamia';
import { Flags } from '../types/Flags';
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
			{flags.vegan && <RecipeFlag type="vegan" />}
			{flags.vegetarian && <RecipeFlag type="vegetarian" />}
			{flags.gluten || <RecipeFlag type="glutenFree" />}
			{flags.dairy || <RecipeFlag type="dairyFree" />}
			{flags.addedSugar || <RecipeFlag type="noAddedSugar" />}
			{margaritasFavorite && <RecipeFlag type="margaritasFavorite" />}
			{artemsFavorite && <RecipeFlag type="artemsFavorite" />}
		</Stack>
	);
}
