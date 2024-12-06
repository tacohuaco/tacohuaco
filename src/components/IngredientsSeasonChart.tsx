import upperFirst from 'lodash/upperFirst';
import { Text } from './Text';
import { VisuallyHidden } from './VisuallyHidden';
import { Month } from '../util/olivier';
import { SEASONS } from '../util/olivier/regions/valencia';
import { Box } from './Box';

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
	return (
		<Box as="table" width="28rem" mx="auto" borderCollapse="collapse">
			<thead>
				<tr>
					<th>
						<VisuallyHidden>Ingredient</VisuallyHidden>
					</th>
					{ALL_MONTHS.map((month) => (
						<th key={month}>
							<VisuallyHidden>{MONTH_NAMES[month]}</VisuallyHidden>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{Object.entries(SEASONS).map(([ingredient, monthsInSeason]) => {
					const ingredientInSeason = monthsInSeason.includes(CURRENT_SEASON);
					return (
						<Box
							as="tr"
							key={ingredient}
							css={{ _hover: { backgroundColor: 'light' } }}
						>
							<Text
								as="th"
								variant="body"
								textAlign="left"
								fontWeight={ingredientInSeason ? 'bold' : undefined}
							>
								{upperFirst(ingredient)}
							</Text>
							{ALL_MONTHS.map((month) => {
								const monthName = MONTH_NAMES[month];
								const inSeason = monthsInSeason.includes(month);
								return (
									<Text
										as="td"
										key={month}
										title={monthName}
										width="1.5rem"
										borderBlock="2px solid"
										borderColor="background"
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
						</Box>
					);
				})}
			</tbody>
		</Box>
	);
}
