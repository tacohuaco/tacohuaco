import numericQuantity from 'numeric-quantity';
import {
	GRAMS_IN_KILOGRAM,
	MILLILITERS_IN_LITER,
	TEASPOONS_IN_TABLESPOONS,
	UNITS,
} from './langs/en/units';
import { ALL_INGREDIENTS } from './langs/en/ingredients';
import { WORDS_TO_NUMBERS } from './langs/en/translations';
import { Amount, Ingredient } from './types';
import { orderBy } from 'lodash';

const CONVERSIONS: {
	from: string;
	to: string;
	convert: (x: number) => number;
}[] = [
	{
		from: 'tablespoon',
		to: 'teaspoon',
		convert: (x) => x * TEASPOONS_IN_TABLESPOONS,
	},
	{
		from: 'kg',
		to: 'g',
		convert: (x) => x * GRAMS_IN_KILOGRAM,
	},
	{
		from: 'l',
		to: 'ml',
		convert: (x) => x * MILLILITERS_IN_LITER,
	},
];

export function normalizeAmountValue(amount?: Amount): Amount | undefined {
	if (!amount) {
		return undefined;
	}

	if (typeof amount === 'number') {
		return amount;
	}

	const numberMaybe = numericQuantity(amount.replace(',', '.'));
	if (!isNaN(numberMaybe)) {
		return numberMaybe;
	}

	return amount in WORDS_TO_NUMBERS ? WORDS_TO_NUMBERS[amount] : amount;
}

export function normalizeAmount(
	amount?: Amount,
	unit?: string,
	forceUnit?: string
): { amount?: Amount; unit?: string } {
	const value = normalizeAmountValue(amount);

	if (typeof value !== 'number' || unit === undefined) {
		return { amount: value, unit };
	}

	for (const conversion of CONVERSIONS) {
		if (unit === conversion.from && conversion.from !== forceUnit) {
			return {
				amount: conversion.convert(value),
				unit: conversion.to,
			};
		}
	}

	return { amount: value, unit };
}

function normalizeUnit(unit?: string): string | undefined {
	if (!unit) {
		return undefined;
	}

	const unitLowerCase = unit.toLowerCase();
	const aliases = UNITS.find((u) => u.includes(unitLowerCase));
	return aliases?.[0] || unit;
}

export function normalizeName(
	name: string
): Pick<Ingredient, 'name' | 'modifier'> {
	for (const aliases of ALL_INGREDIENTS) {
		// Order aliases from longest to shortest to catch the longest name
		const aliasesOrdered = orderBy(aliases, (x) => -x.length);
		const alias = aliasesOrdered.find((x) =>
			new RegExp(`\\b${x}$`, 'i').test(name)
		);
		if (alias) {
			const modifier =
				name.replace(new RegExp(`\\s*${alias}$`, 'i'), '') || undefined;

			return {
				name: aliases[0],
				modifier,
			};
		}
	}

	return {
		name,
	};
}

/**
 * Normalize ingredient object:
 * - convert amounts to numbers
 * - find normal forms of ingredient names and units
 * - extract the ingredient modifier (5 _large_ apples)
 */
function normalizeOption(ingredient: Ingredient): Ingredient {
	const normalizedUnit = normalizeUnit(ingredient.unit);
	const { amount: minAmount, unit } = normalizeAmount(
		ingredient.minAmount,
		normalizedUnit
	);
	const { amount: maxAmount } = normalizeAmount(
		ingredient.maxAmount,
		normalizedUnit,
		unit
	);
	const x = {
		...normalizeName(ingredient.name),
		minAmount,
		maxAmount,
		unit,
		comment: ingredient.comment,
	};

	// console.log('🦆', ingredient, '->', x);
	return x;
}

/**
 * Normalize ingredient objects list
 */
export function normalize(
	options: readonly Ingredient[]
): readonly Ingredient[] {
	return options.map(normalizeOption);
}
