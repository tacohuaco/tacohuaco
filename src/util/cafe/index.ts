import { Action, type CoffeeRecipe } from './types';

// TODO: French press
// TODO: Turkish coffee
// TODO: Moka pot
// TODO: Make them look like cards (full screen kinda?)
// TODO: Show one at a time and add a menu
// TODO: Merge both pour over recipes into one and change depending on the volume

export const COFFEE_RECIPES: CoffeeRecipe[] = [
	{
		slug: 'aeropress',
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
		slug: 'pour-over-one-cup',
		name: 'V60/Chemex (one cup)',
		brewer: 'V60, Chemex, or any other pour over brewer',
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
		slug: 'pour-over',
		name: 'V60/Chemex (multiple cups)',
		brewer: 'V60, Chemex, or any other pour over brewer',
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
