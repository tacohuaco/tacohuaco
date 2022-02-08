import { scale } from './scale';
import { Ingredient } from './types';

test.each<[[Ingredient[], number], Ingredient[]]>([
	[
		[
			[
				{
					name: 'cucumber',
					minAmount: 3,
					maxAmount: 4,
				},
			],
			2,
		],
		[
			{
				name: 'cucumber',
				minAmount: 6,
				maxAmount: 8,
			},
		],
	],
	[
		[
			[
				{
					name: 'onion',
					minAmount: 0.5,
					maxAmount: 0.5,
				},
			],
			3,
		],
		[
			{
				name: 'onion',
				minAmount: 2,
				maxAmount: 2,
			},
		],
	],
	[
		[
			[
				{
					name: 'cucumber',
					minAmount: 3,
					maxAmount: 4,
				},
			],
			0.5,
		],
		[
			{
				name: 'cucumber',
				minAmount: 2,
				maxAmount: 2,
			},
		],
	],
	[
		[
			[
				{
					name: 'cucumber',
					minAmount: 1,
					maxAmount: 2,
				},
			],
			0.5,
		],
		[
			{
				name: 'cucumber',
				minAmount: 0.5,
				maxAmount: 1,
			},
		],
	],
	[
		[
			[
				{
					name: 'cucumber',
					minAmount: 130,
					maxAmount: 150,
				},
			],
			0.5,
		],
		[
			{
				name: 'cucumber',
				minAmount: 70,
				maxAmount: 80,
			},
		],
	],
])('scale ingredient: %s', ([source, ratio], result) => {
	expect(scale(source, ratio)).toEqual(result);
});
