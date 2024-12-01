import { Action, type CoffeeRecipe } from './types';

export const ONE_CUP = 200;

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
		defaultAmount: ONE_CUP,
		grind: 'slightly fine grind, 16 on Baratza Encore',
		temperature: 93,
		steps: [
			{
				action: Action.Pour,
				amount: 1,
				time: 60 * 2,
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
		slug: 'french-press',
		name: 'French press',
		brewer: 'French press',
		ratio: 16.5,
		defaultAmount: ONE_CUP,
		grind: 'coarse grind',
		temperature: 93,
		steps: [
			{
				action: Action.Pour,
				amount: 1,
				time: 60 * 4,
			},
			{
				action: Action.Custom,
				message: 'Slowly press the plunger.',
			},
		],
	},
	{
		slug: 'pour-over',
		name: 'Pour-over',
		brewer: 'V60, Chemex, Kalita, or any other pour over brewer',
		ratio: 16.5,
		defaultAmount: ONE_CUP,
		grind: 'medium-coarse grind, 18 on Baratza Encore',
		temperature: 93,
		steps: [
			{
				action: Action.Rinse,
			},
			{
				action: Action.Pour,
				amount: 0.15,
			},
			{
				action: Action.Shake,
				time: 40,
			},
			{
				action: Action.Pour,
				amount: 0.5,
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
		stepsOneCup: [
			{
				action: Action.Rinse,
			},
			{
				action: Action.Pour,
				amount: 0.25,
			},
			{
				action: Action.Shake,
				time: 40,
			},
			{
				action: Action.Pour,
				amount: 0.25,
				time: 10,
			},
			{
				action: Action.Pour,
				amount: 0.25,
				time: 10,
			},
			{
				action: Action.Pour,
				amount: 0.25,
			},
			{
				action: Action.Shake,
			},
		],
	},
];
