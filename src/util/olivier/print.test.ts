import { print } from './print';

test.each([
	[
		{
			name: 'egg',
			minAmount: '1',
			maxAmount: '1',
		},
		{
			amount: '1',
			name: 'egg',
		},
	],
	[
		{
			name: 'eggs',
			minAmount: '10',
			maxAmount: '10',
			unit: 'g',
		},
		{
			amount: '10 g',
			suffix: 'of',
			name: 'eggs',
		},
	],
])('print ingredient: %s', (source, result) => {
	expect(print(source)).toEqual(result);
});
