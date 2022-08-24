import React from 'react';
import { sortBy, upperFirst } from 'lodash';
import { Box, Text, VisuallyHidden } from 'tamia';
import { asList } from '../util/client';
import { IngredientInfo, IngredientKind, Month } from '../util/olivier';

type Props = {
	infos: readonly IngredientInfo[];
};

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

const KINDS: Record<IngredientKind, string> = {
	[IngredientKind.Vegan]: 'Vegan',
	[IngredientKind.Vegetarian]: 'Vegetarian',
	[IngredientKind.Poultry]: 'Poultry',
	[IngredientKind.Fish]: 'Fish',
	[IngredientKind.Meat]: 'Meat',
	[IngredientKind.Unknown]: 'Unknown',
};

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

const printContents = (ingredient: IngredientInfo): string =>
	upperFirst(
		asList([
			ingredient.hasGluten && 'gluten',
			ingredient.hasDairy && 'dairy',
			ingredient.hasSugar && 'refined sugar',
		])
	);

const Season = ({ ingredient }: { ingredient: IngredientInfo }) => (
	<>
		{ALL_MONTHS.map((month) => {
			const inSeason = ingredient.seasons.includes(month);
			return (
				<Text
					key={month}
					as="span"
					variant="small"
					color={inSeason ? undefined : 'light'}
				>
					{inSeason && <VisuallyHidden>{MONTH_NAMES[month]}</VisuallyHidden>}
					<span aria-hidden="true">{MONTH_NAMES[month][0]}</span>
				</Text>
			);
		})}
	</>
);

export function IngredientsExplorer({ infos }: Props) {
	const sorted = sortBy(infos, (x) => x.name);
	return (
		// HACK: Can't make a table scrollable inside a collapsible section
		<Box overflowX="scroll" width={[320, 1]}>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Kind</th>
						<th>Season</th>
						<th>Contains</th>
					</tr>
				</thead>
				<tbody>
					{sorted.map((ingredient) => {
						return (
							<tr key={ingredient.name}>
								<th>{upperFirst(ingredient.name)}</th>
								<td>{KINDS[ingredient.kind]}</td>
								<td>
									<Season ingredient={ingredient} />
								</td>
								<td>{printContents(ingredient)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Box>
	);
}
