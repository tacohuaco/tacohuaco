import { test, expect } from 'vitest';
import { mapPreconditions } from '../mapPreconditions';

test('map preconditions', () => {
	const ingredients = [
		{
			comment: 'room temperature',
			hasDairy: true,
			hasGluten: false,
			hasSugar: false,
			kind: 1,
			maxAmount: 12,
			minAmount: 12,
			modifier: undefined,
			name: 'butter',
			seasons: [],
			unit: 'teaspoon',
		},
		{
			comment: undefined,
			hasDairy: true,
			hasGluten: false,
			hasSugar: false,
			kind: 1,
			maxAmount: 1,
			minAmount: 1,
			name: 'milk',
			seasons: [],
			unit: 'cup',
		},
		{
			comment: undefined,
			hasDairy: false,
			hasGluten: false,
			hasSugar: false,
			kind: 0,
			maxAmount: 100,
			minAmount: 100,
			modifier: undefined,
			name: 'chicken stock',
			seasons: [],
			unit: 'g',
		},
	];
	expect(mapPreconditions(ingredients)).toMatchInlineSnapshot(`
		[
		  "warm butter to room temperature",
		  "unfreeze chicken stock if frozen",
		]
	`);
});
