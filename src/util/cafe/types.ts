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
