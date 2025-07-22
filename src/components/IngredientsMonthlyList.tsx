import upperFirst from 'lodash/upperFirst';
import { Text } from './Text';
import { Heading } from './Heading';
import { Month } from '../util/olivier';
import { SEASONS } from '../util/olivier/regions/valencia';
import { Stack } from './Stack';

const ALL_MONTHS = [
	Month.January,
	Month.February,
	Month.March,
	Month.April,
	Month.May,
	Month.June,
	Month.July,
	Month.August,
	Month.September,
	Month.October,
	Month.November,
	Month.December,
];

const MONTH_NAMES: Record<Month, string> = {
	[Month.January]: 'January',
	[Month.February]: 'February',
	[Month.March]: 'March',
	[Month.April]: 'April',
	[Month.May]: 'May',
	[Month.June]: 'June',
	[Month.July]: 'July',
	[Month.August]: 'August',
	[Month.September]: 'September',
	[Month.October]: 'October',
	[Month.November]: 'November',
	[Month.December]: 'December',
} as const;

function getIngredientsByMonth() {
	return ALL_MONTHS.map((month) => {
		const ingredients: string[] = [];
		for (const [ingredient, months] of Object.entries(SEASONS)) {
			if (months.includes(month)) {
				ingredients.push(ingredient);
			}
		}
		return ingredients;
	});
}

function formatIngredientsList(ingredients: string[]): string {
	if (ingredients.length === 0) {
		return '';
	}

	const [first, ...rest] = ingredients;
	return [upperFirst(first), ...rest].join(', ') + '.';
}

export function IngredientsMonthlyList() {
	const ingredientsByMonth = getIngredientsByMonth();

	return (
		<Stack gap="m">
			{ingredientsByMonth.map((ingredients, index) => {
				return (
					<Stack key={index} gap="s">
						<Heading as="h3" level={3}>
							{MONTH_NAMES[(index + 1) as Month]}
						</Heading>
						<Text>{formatIngredientsList(ingredients)}</Text>
					</Stack>
				);
			})}
		</Stack>
	);
}
