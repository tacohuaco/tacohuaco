import { Stack, RecipeFlag } from '.';
import type { Flags } from '../types/Recipe';

export function RecipeFlags({
	vegan,
	vegetarian,
	glutenFree,
	lowGluten,
	dairyFree,
	noAddedSugar,
	margaritasFavorite,
	artemsFavorite,
}: Flags) {
	return (
		<Stack gap="s" direction="row">
			{vegan && <RecipeFlag type="vegan" />}
			{vegetarian && <RecipeFlag type="vegetarian" />}
			{glutenFree && <RecipeFlag type="glutenFree" />}
			{lowGluten && <RecipeFlag type="lowGluten" />}
			{dairyFree && <RecipeFlag type="dairyFree" />}
			{noAddedSugar && <RecipeFlag type="noAddedSugar" />}
			{margaritasFavorite && <RecipeFlag type="margaritasFavorite" />}
			{artemsFavorite && <RecipeFlag type="artemsFavorite" />}
		</Stack>
	);
}
