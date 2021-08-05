import formatQuantity from 'format-quantity';
import { INGREDIENTS } from './langs/en/ingredients';
import { UNITLESS } from './langs/en/translations';
import { UNITS } from './langs/en/units';
import { Amount, Ingredient } from './types';

function pluralize(
	dictionary: string[][],
	unit: string,
	amount: Amount
): string {
	if (amount > 1) {
		const units = dictionary.find(([i]) => i === unit);
		if (!units) {
			return unit;
		}
		return units[1] || units[0];
	}
	return unit;
}

function pluralizeName({
	name,
	unit,
	minAmount,
	maxAmount,
}: Ingredient): string {
	if (!unit && typeof minAmount === 'number' && minAmount === maxAmount) {
		return pluralize(INGREDIENTS, name, maxAmount);
	}

	if (
		typeof minAmount === 'string' &&
		UNITLESS.some((x) => minAmount.endsWith(x))
	) {
		return name;
	}

	return pluralize(INGREDIENTS, name, Infinity);
}

function pluralizeUnit({ unit, maxAmount }: Ingredient): string | undefined {
	if (unit && typeof maxAmount === 'number') {
		return pluralize(UNITS, unit, maxAmount);
	}

	return undefined;
}

function formatAmount(amount?: Amount): string | undefined {
	return amount !== undefined
		? formatQuantity(amount, true) || String(amount)
		: undefined;
}

/**
 * Format an ingredient for display:
 * - pluralize the name and the unit
 * - format amounts as strings (1.5 → 1½)
 */
export function format(ingredient: Ingredient): Ingredient {
	return {
		...ingredient,
		name: pluralizeName(ingredient),
		minAmount: formatAmount(ingredient.minAmount),
		maxAmount: formatAmount(ingredient.maxAmount),
		unit: pluralizeUnit(ingredient),
	};
}
