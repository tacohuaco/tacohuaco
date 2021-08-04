import { normalize } from './normalize';

test.each([
	[
		{
			name: 'cucumber',
			minAmount: '1',
			maxAmount: '1',
			comment: 'sliced',
		},
		{
			name: 'cucumber',
			minAmount: 1,
			maxAmount: 1,
			unit: undefined,
			comment: 'sliced',
		},
	],
	[
		{
			name: 'cucumbers',
			minAmount: 'two',
			maxAmount: 'two',
			comment: undefined,
		},
		{
			name: 'cucumber',
			minAmount: 2,
			maxAmount: 2,
			unit: undefined,
			comment: undefined,
		},
	],
	[
		{
			name: 'black pepper',
			minAmount: 'some',
			maxAmount: 'some',
			comment: undefined,
		},
		{
			name: 'pepper',
			minAmount: 'some',
			maxAmount: 'some',
			unit: undefined,
			comment: undefined,
			modifier: 'black',
		},
	],
	[
		{
			name: 'cocaine',
			minAmount: '13',
			maxAmount: '13',
			unit: 'g',
			comment: undefined,
		},
		{
			name: 'cocaine',
			minAmount: 13,
			maxAmount: 13,
			unit: 'gram',
			comment: undefined,
		},
	],
	[
		{
			name: 'sausage',
			minAmount: '2.75',
			maxAmount: '3 1/2',
			unit: 'g',
			comment: undefined,
		},
		{
			name: 'sausage',
			minAmount: 2.75,
			maxAmount: 3.5,
			unit: 'gram',
			comment: undefined,
		},
	],
	[
		{
			name: 'cucumbers',
			minAmount: '3',
			maxAmount: '3',
			comment: undefined,
		},
		{
			name: 'cucumber',
			minAmount: 3,
			maxAmount: 3,
			unit: undefined,
			comment: undefined,
		},
	],
	[
		{
			name: 'juicy cucumbers',
			minAmount: '3',
			maxAmount: '3',
			comment: undefined,
		},
		{
			name: 'cucumber',
			minAmount: 3,
			maxAmount: 3,
			unit: undefined,
			comment: undefined,
			modifier: 'juicy',
		},
	],
])('parse ingredient: %s', (source, result) => {
	expect(normalize(source)).toEqual(result);
});
