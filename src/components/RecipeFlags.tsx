import { RecipeFlag, Stack } from '.';
import type { FlagName } from '../types/Flags';

type RecipeFlagsProps = {
	[flag in FlagName]: boolean;
};

export function RecipeFlags({
	vegan,
	vegetarian,
	glutenFree,
	lowGluten,
	dairyFree,
	noAddedSugar,
	margaritasFavorite,
	artemsFavorite,
}: RecipeFlagsProps) {
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
