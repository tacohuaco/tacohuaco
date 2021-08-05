import { format } from './format';

test.each([
	[
		{
			name: 'egg',
			minAmount: 1,
			maxAmount: 1,
		},
		{
			name: 'egg',
			minAmount: '1',
			maxAmount: '1',
		},
	],
	[
		{
			name: 'egg',
			minAmount: 1,
			maxAmount: 3,
		},
		{
			name: 'eggs',
			minAmount: '1',
			maxAmount: '3',
		},
	],
	[
		{
			name: 'cucumber',
			minAmount: 1,
			maxAmount: 1.5,
		},
		{
			name: 'cucumbers',
			minAmount: '1',
			maxAmount: '1½',
		},
	],
	[
		{
			name: 'pork',
			minAmount: 200,
			maxAmount: 200,
			unit: 'gram',
		},
		{
			name: 'pork',
			minAmount: '200',
			maxAmount: '200',
			unit: 'grams',
		},
	],
	[
		{
			name: 'garlic',
			minAmount: 1,
			maxAmount: 1,
			unit: 'clove',
		},
		{
			name: 'garlic',
			minAmount: '1',
			maxAmount: '1',
			unit: 'clove',
		},
	],
	[
		{
			name: 'garlic',
			minAmount: 1,
			maxAmount: 2,
			unit: 'clove',
		},
		{
			name: 'garlic',
			minAmount: '1',
			maxAmount: '2',
			unit: 'cloves',
		},
	],
])('format ingredient: %s', (source, result) => {
	expect(format(source)).toEqual(result);
});
