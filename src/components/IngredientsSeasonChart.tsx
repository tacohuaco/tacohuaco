import orderBy from 'lodash/orderBy';
import upperFirst from 'lodash/upperFirst';
import { Text } from './Text';
import { VisuallyHidden } from './VisuallyHidden';
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

// TODO: Deduplicate
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
};

export function IngredientsSeasonChart() {
	// Show ingredients in season first
	const ingredients = orderBy(
		Object.entries(SEASONS),
		(x) => x[1].includes(CURRENT_SEASON) === false
	);
	return (
		<Stack as="dl" mx="auto" gap={{ base: 'm', tablet: 'xxs' }}>
			{ingredients.map(([ingredient, monthsInSeason]) => {
				const ingredientInSeason = monthsInSeason.includes(CURRENT_SEASON);
				return (
					<Stack
						key={ingredient}
						direction={{ base: 'column', tablet: 'row' }}
						columnGap="l"
						rowGap="xs"
						css={{ _hover: { backgroundColor: 'light' } }}
					>
						<Text
							as="dt"
							variant="body"
							width="6rem"
							fontWeight={ingredientInSeason ? 'bold' : undefined}
						>
							{upperFirst(ingredient)}
						</Text>
						<Stack as="dd" direction="row" gap="xxs">
							{ALL_MONTHS.map((month) => {
								const monthName = MONTH_NAMES[month];
								const inSeason = monthsInSeason.includes(month);
								return (
									<Text
										as="span"
										key={month}
										title={inSeason ? monthName : undefined}
										width="1.5rem"
										bg={inSeason ? 'accent' : undefined}
										color={inSeason ? 'background' : 'light'}
										fontWeight={month === CURRENT_SEASON ? 'bold' : undefined}
										textAlign="center"
										cursor="default"
									>
										{inSeason && (
											<>
												<VisuallyHidden>{monthName}</VisuallyHidden>
												<span aria-hidden="true">{monthName[0]}</span>
											</>
										)}
									</Text>
								);
							})}
						</Stack>
					</Stack>
				);
			})}
		</Stack>
	);
}
