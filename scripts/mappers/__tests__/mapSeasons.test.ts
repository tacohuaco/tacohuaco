import { test, expect } from 'vitest';
import { mapSeasons } from '../mapSeasons';
import { Month } from '../../../src/util/olivier';

test('map flags', () => {
	const ingredients = [
		{
			comment: undefined,
			hasDairy: false,
			hasGluten: false,
			hasSugar: false,
			kind: 0,
			maxAmount: 1000,
			minAmount: 1000,
			modifier: 'floury',
			name: 'floury potatoes',
			seasons: [Month.January, Month.February],
			unit: 'g',
		},
		{
			comment: undefined,
			hasDairy: false,
			hasGluten: false,
			hasSugar: false,
			kind: 0,
			maxAmount: undefined,
			minAmount: undefined,
			modifier: 'smoked',
			name: 'smoked paprika powder',
			seasons: [],
			unit: undefined,
		},
		{
			comment: undefined,
			hasDairy: false,
			hasGluten: false,
			hasSugar: false,
			kind: 0,
			maxAmount: undefined,
			minAmount: undefined,
			modifier: undefined,
			name: 'salt',
			seasons: [Month.January, Month.November, Month.December],
			unit: undefined,
		},
	];
	expect(mapSeasons(ingredients)).toMatchInlineSnapshot(`
		[
		  1,
		]
	`);
});
