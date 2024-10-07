import { RecipeFlag, Stack } from '.';
import type { FlagName } from '../types/Flags';

type RecipeFlagsProps = {
	[flag in FlagName]: boolean;
} & { hasLinks: boolean };

export function RecipeFlags({
	vegan,
	vegetarian,
	glutenFree,
	lowGluten,
	dairyFree,
	noAddedSugar,
	margaritasFavorite,
	artemsFavorite,
	hasLinks = true,
}: RecipeFlagsProps) {
	return (
		<Stack gap="s" direction="row">
			{vegan && <RecipeFlag type="vegan" hasLinks={hasLinks} />}
			{vegetarian && <RecipeFlag type="vegetarian" hasLinks={hasLinks} />}
			{glutenFree && <RecipeFlag type="glutenFree" hasLinks={hasLinks} />}
			{lowGluten && <RecipeFlag type="lowGluten" hasLinks={hasLinks} />}
			{dairyFree && <RecipeFlag type="dairyFree" hasLinks={hasLinks} />}
			{noAddedSugar && <RecipeFlag type="noAddedSugar" hasLinks={hasLinks} />}
			{margaritasFavorite && (
				<RecipeFlag type="margaritasFavorite" hasLinks={hasLinks} />
			)}
			{artemsFavorite && (
				<RecipeFlag type="artemsFavorite" hasLinks={hasLinks} />
			)}
		</Stack>
	);
}
