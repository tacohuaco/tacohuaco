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
	readonly name: string;
	readonly minAmount?: Amount;
	readonly maxAmount?: Amount;
	readonly unit?: string;
	readonly modifier?: string;
	readonly comment?: string;
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
	readonly name: string;
	readonly kind: IngredientKind;
	readonly hasGluten: boolean;
	readonly hasDairy: boolean;
	readonly hasSugar: boolean;
	readonly seasons: readonly Month[];
}

export interface PrintIngredient
	extends Omit<Ingredient, 'minAmount' | 'maxAmount' | 'unit'> {
	readonly amount?: string;
	readonly suffix?: string;
}

export type IngredientWithInfo = Ingredient & IngredientInfo;
