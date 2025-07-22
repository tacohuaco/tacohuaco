import upperFirst from 'lodash/upperFirst';
import { Text } from './Text';
import { Heading } from './Heading';
import { Month } from '../util/olivier';
import { SEASONS } from '../util/olivier/regions/valencia';
import { Stack } from './Stack';

const CURRENT_SEASON = new Date().getMonth() + 1;

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

export function IngredientsMonthlyList() {
	const ingredientsByMonth = getIngredientsByMonth();

	return (
		<Stack gap="m">
			{ingredientsByMonth.map((ingredients, index) => {
				if (ingredients.length === 0) {
					return null;
				}

				const month = (index + 1) as Month;

				return (
					<Stack key={index} gap="s">
						<Heading as="h3" level={3}>
							{MONTH_NAMES[month]}
						</Heading>
						<Text>
							{ingredients.map((ingredient, ingredientIndex) => {
								const isCurrentlyInSeason =
									SEASONS[ingredient]?.includes(CURRENT_SEASON) ?? false;
								const isFirst = ingredientIndex === 0;
								const displayName = isFirst
									? upperFirst(ingredient)
									: ingredient;
								const isLast = ingredientIndex === ingredients.length - 1;

								return (
									<Text
										key={ingredient}
										as="span"
										fontWeight={isCurrentlyInSeason ? 'bold' : undefined}
									>
										{displayName}
										{isLast ? '' : ', '}
									</Text>
								);
							})}
							.
						</Text>
					</Stack>
				);
			})}
		</Stack>
	);
}
