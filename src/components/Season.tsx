import { Text, VisuallyHidden } from '.';
import type { RecipeIngredient } from '../types/Recipe';
import { Month } from '../util/olivier';

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
};

export function Season({ ingredient }: { ingredient: RecipeIngredient }) {
	return (
		<>
			{ALL_MONTHS.map((month) => {
				const inSeason = ingredient.seasons.includes(month);
				return (
					<Text
						key={month}
						as="span"
						variant="small"
						// TODO: This may not override `small` styles
						color={inSeason ? undefined : 'light'}
					>
						{inSeason && <VisuallyHidden>{MONTH_NAMES[month]}</VisuallyHidden>}
						<span aria-hidden="true">{MONTH_NAMES[month][0]}</span>
					</Text>
				);
			})}
		</>
	);
}
