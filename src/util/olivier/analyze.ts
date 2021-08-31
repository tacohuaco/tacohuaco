import {
	DAIRIES,
	FISHES,
	GLUTENS,
	MEATS,
	NON_VEGANS,
	POULTRIES,
	SUGARS,
} from './langs/en/info';
import { SEASONS } from './regions/germany';
import { IngredientKind, Ingredient, Month, IngredientInfo } from './types';

function getKind(name: string): IngredientKind {
	if (DAIRIES.includes(name) || NON_VEGANS.includes(name)) {
		return IngredientKind.Vegetarian;
	}
	if (POULTRIES.includes(name)) {
		return IngredientKind.Poultry;
	}
	if (FISHES.includes(name)) {
		return IngredientKind.Fish;
	}
	if (MEATS.includes(name)) {
		return IngredientKind.Meat;
	}
	return IngredientKind.Vegan;
}

function getSeasons(name: string): Month[] {
	return SEASONS[name] || [];
}

/**
 * Return info about an ingredient: kind, gluten, dairy, sugar content
 */
export function analyze({ name }: Ingredient): IngredientInfo {
	return {
		name,
		kind: getKind(name),
		hasGluten: GLUTENS.includes(name),
		hasDairy: DAIRIES.includes(name),
		hasSugar: SUGARS.includes(name),
		seasons: getSeasons(name),
	};
}
