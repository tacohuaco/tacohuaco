import { test, expect } from 'vitest';
import { mapChart } from '../mapChart';

test('map chart', () => {
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
			name: 'chicken broth',
			seasons: [],
			unit: 'g',
		},
	];
	const stepSections = [
		{
			name: '',
			steps: [
				{
					pause: false,
					text: 'Cook covered in the most amazing pot for 3 hours, until super tender',
				},
				{
					pause: true,
					text: 'Refrigerate covered for at least 4 hours or better overnight.',
				},
				{
					pause: false,
					text: 'Do three.',
				},
			],
		},
	];

	expect(mapChart(ingredients, stepSections)).toMatchInlineSnapshot(`
		[
		  {
		    "subtype": "butter",
		    "type": "WarmToRoomTemp",
		  },
		  {
		    "subtype": "chicken broth",
		    "type": "WarmToRoomTemp",
		  },
		  {
		    "subtype": "cook",
		    "type": "CookCovered",
		    "value": "3 hours",
		  },
		  {
		    "type": "Refrigerate",
		    "value": "4 hours or overnight",
		  },
		]
	`);
});
