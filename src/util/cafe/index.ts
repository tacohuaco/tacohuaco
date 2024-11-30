import { Action, type CoffeeRecipe } from './types';

export const COFFEE_RECIPES: CoffeeRecipe[] = [
	{
		name: 'Aeropress',
		brewer: 'Aeropress',
		ratio: 18,
		defaultAmount: 200,
		grind: 'Slightly fine grind (16 on Baratza Encore)',
		temperature: 93,
		steps: [
			{
				action: Action.Pour,
				amount: ({ amount }) => amount,
				time: 120,
			},
			{
				action: Action.Shake,
				time: 30,
			},
			{
				action: Action.Custom,
				message: 'Slowly press the plunger.',
			},
		],
	},
	{
		name: 'V60/Chemex (one cup)',
		brewer: 'Chemex',
		ratio: 16,
		defaultAmount: 200,
		grind: 'Medium-coarse grind (18 on Baratza Encore)',
		temperature: 93,
		steps: [
			{
				action: Action.Pour,
				amount: 50,
			},
			{
				action: Action.Shake,
				time: 40,
			},
			{
				action: Action.Pour,
				amount: 50,
				time: 10,
			},
			{
				action: Action.Pour,
				amount: 50,
				time: 10,
			},
			{
				action: Action.Pour,
				amount: null,
			},
			{
				action: Action.Shake,
			},
		],
	},
	{
		name: 'V60/Chemex (multiple cups)',
		brewer: 'Chemex',
		ratio: 16.5,
		defaultAmount: 500,
		grind: 'Medium-coarse grind (18 on Baratza Encore)',
		temperature: 93,
		steps: [
			{
				action: Action.Pour,
				amount: ({ amount }) => amount * 0.15,
			},
			{
				action: Action.Shake,
				time: 40,
			},
			{
				action: Action.Pour,
				amount: ({ amount }) => amount * 0.5,
				time: 10,
			},
			{
				action: Action.Pour,
				amount: null,
			},
			{
				action: Action.Shake,
			},
		],
	},
];
