import { IngredientKind } from './types';
import { analyze } from './analyze';

test.each([
	[
		{
			name: 'cucumber',
			minAmount: 1,
			maxAmount: 1,
			comment: 'sliced',
		},
		{
			kind: IngredientKind.Vegan,
			hasDairy: false,
			hasGluten: false,
			hasSugar: false,
		},
	],
	[
		{
			name: 'beef',
			minAmount: 100,
			maxAmount: 100,
			unit: 'g',
		},
		{
			kind: IngredientKind.Meat,
			hasDairy: false,
			hasGluten: false,
			hasSugar: false,
		},
	],
	[
		{
			name: 'egg',
			minAmount: 2,
			maxAmount: 3,
		},
		{
			kind: IngredientKind.Vegetarian,
			hasDairy: true,
			hasGluten: false,
			hasSugar: false,
		},
	],
	[
		{
			name: 'all-purpose flour',
			minAmount: 250,
			maxAmount: 250,
			unit: 'g',
		},
		{
			kind: IngredientKind.Vegan,
			hasDairy: false,
			hasGluten: true,
			hasSugar: false,
		},
	],
	[
		{
			name: 'sugar',
			minAmount: 250,
			maxAmount: 250,
			unit: 'g',
			modifier: 'brown',
		},
		{
			kind: IngredientKind.Vegan,
			hasDairy: false,
			hasGluten: false,
			hasSugar: true,
		},
	],
])('analyze ingredient: %s', (source, result) => {
	expect(analyze(source)).toEqual(result);
});
