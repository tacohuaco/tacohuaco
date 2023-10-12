import { test, expect } from 'vitest';
import { mapFlags } from '../mapFlags';

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
			name: 'potatoes',
			seasons: [],
			unit: 'g',
		},
		{
			comment: undefined,
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
			maxAmount: undefined,
			minAmount: undefined,
			modifier: 'smoked',
			name: 'paprika powder',
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
			seasons: [],
			unit: undefined,
		},
	];
	expect(mapFlags(ingredients)).toMatchInlineSnapshot(`
		{
		  "dairyFree": false,
		  "glutenFree": true,
		  "lowGluten": false,
		  "noAddedSugar": true,
		  "vegan": false,
		  "vegetarian": true,
		}
	`);
});
