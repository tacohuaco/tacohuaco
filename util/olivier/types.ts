export type Amount = number | string;

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
