import {
	DIARIES,
	FISHES,
	GLUTENS,
	MEATS,
	POULTRIES,
	SUGARS,
} from './langs/en/info';
import { IngredientKind, Ingredient } from './types';

interface IngredientInfo {
	kind: IngredientKind;
	hasGluten: boolean;
	hasDairy: boolean;
	hasSugar: boolean;
}

function getKind(name: string): IngredientKind {
	if (DIARIES.includes(name)) {
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

/**
 * Return info about an ingredient: kind, gluten, diary, sugar content
 */
export function analyze({ name }: Ingredient): IngredientInfo {
	return {
		kind: getKind(name),
		hasGluten: GLUTENS.includes(name),
		hasDairy: DIARIES.includes(name),
		hasSugar: SUGARS.includes(name),
	};
}
