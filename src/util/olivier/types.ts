export type Amount = number | string;

export enum Month {
	January = 1,
	February = 2,
	March = 3,
	April = 4,
	May = 5,
	June = 6,
	July = 7,
	August = 8,
	September = 9,
	October = 10,
	November = 11,
	December = 12,
}

export interface Ingredient {
	name: string;
	minAmount?: Amount;
	maxAmount?: Amount;
	unit?: string;
	modifier?: string;
	comment?: string;
}

export enum IngredientKind {
	Vegan,
	Vegetarian,
	Poultry,
	Fish,
	Meat,
	Unknown,
}

export interface IngredientInfo {
	kind: IngredientKind;
	hasGluten: boolean;
	hasDairy: boolean;
	hasSugar: boolean;
	seasons: Month[];
}
