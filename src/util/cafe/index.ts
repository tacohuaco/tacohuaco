type Amount =
	| number
	| null
	| ((props: { amount: number; ratio: number }) => number);

export enum Action {
	Pour,
	Shake,
	Custom,
}

interface GenericStep {
	time?: number;
}

interface PourStep extends GenericStep {
	action: Action.Pour;
	amount: Amount;
}

interface ShakeStep extends GenericStep {
	action: Action.Shake;
}

interface CustomStep extends GenericStep {
	action: Action.Custom;
	message: string;
}

export type Step = PourStep | ShakeStep | CustomStep;

export interface CoffeeRecipe {
	name: string;
	brewer: string;
	ratio: number; // 15 → 1:15
	defaultAmount: number;
	grind: string;
	temperature: number;
	steps: Step[];
}

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
		name: 'Chemex',
		brewer: 'Chemex',
		ratio: 16,
		defaultAmount: 200,
		grind: 'Medium-coarse grind (18 on Baratza Encore)',
		temperature: 93,
		steps: [
			{
				action: Action.Pour,
				amount: ({ amount, ratio }) => (amount / ratio) * 3,
			},
			{
				action: Action.Shake,
				time: 40,
			},
			{
				action: Action.Pour,
				amount: ({ amount }) => amount / 3,
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
