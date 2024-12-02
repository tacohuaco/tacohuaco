import { Action, type CoffeeRecipe } from './types';

export const ONE_CUP = 200;

export const COFFEE_RECIPES: CoffeeRecipe[] = [
	{
		slug: 'aeropress',
		name: 'Aeropress',
		brewer: 'an Aeropress',
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
		slug: 'cafe-de-olla',
		name: 'Café de olla',
		brewer: 'a clay pot',
		ratio: 22.7,
		defaultAmount: 500,
		grind: '',
		temperature: 100,
		steps: [],
		description:
			'Check out our family [Café de olla recipe](/recipes/cafe-de-olla/).',
	},
	{
		slug: 'french-press',
		name: 'French press',
		brewer: 'a French press',
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
		slug: 'moka-pot',
		name: 'Moka pot',
		brewer: 'a Moka pot',
		ratio: 8,
		defaultAmount: 140,
		grind: 'very fine grind',
		temperature: 100,
		steps: [
			{
				action: Action.Custom,
				message: 'Pour all water into the Moka pot',
			},
			{
				action: Action.Custom,
				message: 'Place the Moka pot on the stove on low heat',
			},
			{
				action: Action.Custom,
				message: 'Heat until the coffee starts to come out, lower the heat',
			},
			{
				action: Action.Custom,
				message: 'Heat until all the coffee is out, remove from the heat',
			},
		],
	},
	{
		slug: 'pour-over',
		name: 'Pour-over (V60, Chemex, Kalita, etc.)',
		brewer: 'a V60, Chemex, Kalita, or any other pour over brewer',
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
	{
		slug: 'turkish',
		name: 'Turkish (cezve)',
		brewer: 'a cezve',
		ratio: 10,
		defaultAmount: 100,
		grind: 'very fine grind',
		temperature: 93,
		steps: [
			{
				action: Action.Pour,
				amount: 1,
			},
			{
				action: Action.Custom,
				message:
					'Heat on medium-low heat until starts to rise, then immediately remove from the heat.',
			},
			{
				action: Action.Custom,
				message: 'Carefully pour into cup, and let it sit for a bit',
			},
		],
	},
];
