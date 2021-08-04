import numericQuantity from 'numeric-quantity';
import { UNITS } from './langs/en/units';
import { INGREDIENTS } from './langs/en/ingredients';
import { WORDS_TO_NUMBERS } from './langs/en/translations';
import { Amount, Ingredient } from './types';

function normalizeAmount(amount: Amount): Amount {
	if (typeof amount === 'number') {
		return amount;
	}

	const numberMaybe = numericQuantity(amount);
	if (!isNaN(numberMaybe)) {
		return numberMaybe;
	}

	return WORDS_TO_NUMBERS[amount] || amount;
}

function normalizeUnit(unit?: string): string {
	if (!unit) {
		return undefined;
	}

	const unitLowerCase = unit.toLowerCase();
	const aliases = UNITS.find((u) => u.includes(unitLowerCase));
	return aliases?.[0] || unit;
}

function normalizeName(name: string): Pick<Ingredient, 'name' | 'modifier'> {
	const nameLowerCase = name.toLowerCase();
	for (const aliases of INGREDIENTS) {
		const alias = aliases.find((x) => nameLowerCase.endsWith(x));
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
export function normalize({
	name,
	minAmount,
	maxAmount,
	unit,
	comment,
}: Ingredient): Ingredient {
	return {
		...normalizeName(name),
		minAmount: normalizeAmount(minAmount),
		maxAmount: normalizeAmount(maxAmount),
		unit: normalizeUnit(unit),
		comment,
	};
}
