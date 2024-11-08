import {
	ChartStepType,
	type ChartStep,
	type RecipeIngredient,
	type StepsSection,
} from '../../src/types/Recipe';

// TODO: Do something with oven/air fryer recipes:
// arrange the tacos on a baking sheet (or in the air fryer basket) and bake for about 25 minutes in the oven (or for about 12 minutes in the air fryer at 200c), until very crispy.

/**
 * Recipe chart steps: to show important steps of the recipe at a glance, things
 * like preheating oven, marinating meat, or cooking for a long time
 */
export const mapChart = (
	ingredients: RecipeIngredient[],
	stepsSections: StepsSection[]
): ChartStep[] => {
	const chartSteps: ChartStep[] = [];

	for (const { comment, name } of ingredients) {
		if (
			comment?.startsWith('room temperature') ||
			comment?.startsWith('at room temperature')
		) {
			chartSteps.push({
				type: ChartStepType.WarmToRoomTemp,
				subtype: name,
			});
		}

		if (name.endsWith('broth')) {
			chartSteps.push({
				type: ChartStepType.WarmToRoomTemp,
				subtype: name,
			});
		}
	}

	for (const { steps } of stepsSections) {
		for (const { text } of steps) {
			const lowCaseText = text
				.toLowerCase()
				.replaceAll('–', '-') // N-dash
				.replaceAll(' ', ' '); // Non-breaking space
			if (/\bpreheat/.test(lowCaseText)) {
				const [, value] =
					text.match(
						/(?:preheat oven to|if using an oven, preheat it to) (\d+c)/i
					) ?? [];
				if (!value) {
					continue;
				}
				chartSteps.push({
					type: ChartStepType.PreheatOven,
					value,
				});
				continue;
			}

			if (/\b(leave|soak).*(for|overnight)/.test(lowCaseText)) {
				const [, action, value, unit] =
					lowCaseText.match(
						/(leave|soak).*for\D+([\d-]+).*(minutes|hours?|days?)/
					) ??
					lowCaseText.match(/(leave|soak).*(overnight)/) ??
					[];
				if (!action) {
					continue;
				}
				chartSteps.push({
					type: action === 'leave' ? ChartStepType.Rest : ChartStepType.Soak,
					value: `${value} ${unit ?? ''}`.trim(),
				});
			}

			if (
				/\b(cook|bake|fry|roast|braise|boil|simmer|poach).*(covered|uncovered)? for/.test(
					lowCaseText
				)
			) {
				const [, action, value, unit] =
					lowCaseText.match(
						/(cook|bake|fry|roast|braise|boil|simmer|poach).*for\D+([\d-]+).*(minutes|hours?|days?)/
					) ?? [];
				if (!action) {
					continue;
				}
				const [firstAmount] = value.split('-');
				const isCovered = /\bcover(ed)?\b/.test(lowCaseText);

				if (Number.parseInt(firstAmount) >= 10 || unit.startsWith('hour')) {
					chartSteps.push({
						type: isCovered
							? ChartStepType.CookCovered
							: ChartStepType.CookUncovered,
						subtype: action,
						value: `${value} ${unit}`,
					});
				}
			}

			if (/\brefrigerate/.test(lowCaseText)) {
				const [, value, unit] =
					lowCaseText.match(/([\d-]+) (minutes|hours?)/) ?? [];
				const isOvernight = lowCaseText.includes('overnight');
				chartSteps.push({
					type: ChartStepType.Refrigerate,
					value: [
						value && unit && `${value} ${unit}`,
						isOvernight ? 'overnight' : '',
					].join(' or '),
				});
			}
		}
	}

	return chartSteps;
};
