import { A_BIT, OF } from './langs/en/translations';
import { Ingredient } from './types';

function printAmount({
	minAmount,
	maxAmount,
	unit,
}: Ingredient): string | undefined {
	return (
		[
			minAmount,
			minAmount !== maxAmount ? `–${maxAmount}` : '',
			unit ? ` ${unit}` : '',
		].join('') || undefined
	);
}

function printSuffix({ minAmount, unit }: Ingredient): string | undefined {
	return unit || minAmount === A_BIT ? OF : undefined;
}

interface PrintIngredient
	extends Omit<Ingredient, 'minAmount' | 'maxAmount' | 'unit'> {
	amount?: string;
	suffix?: string;
}

export function print(ingredient: Ingredient): PrintIngredient {
	const { modifier, name, comment } = ingredient;
	return {
		amount: printAmount(ingredient),
		suffix: printSuffix(ingredient),
		modifier,
		name,
		comment,
	};
}
