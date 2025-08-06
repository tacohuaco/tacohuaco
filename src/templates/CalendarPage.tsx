import { Stack } from '../components/Stack';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import type { Recipe } from '../types/Recipe';
import { PageWithTitle } from './PageWithTitle';

interface SeasonalMonth {
	monthName: string;
	ingredients: string[];
	breakfasts?: [string[], string[]];
	lunches?: [string[], string[]];
	specials?: [string[], string[]];
	sweets?: [string[], string[]];
	snacks?: [string[], string[]];
}

type Props = {
	url: string;
	title: string;
	months: SeasonalMonth[];
	allRecipes: Recipe[];
};

function MonthRecipesSection({
	label,
	recipes,
	// allRecipes,
}: {
	label: string;
	recipes?: [string[], string[]];
	allRecipes: Recipe[];
}) {
	if (
		recipes === undefined ||
		(recipes[0].length === 0 && recipes[1].length === 0)
	) {
		return null;
	}

	return (
		<Stack gap="s">
			<Heading as="h3" level={3}>
				{label}
			</Heading>
			{recipes[0].length > 0 && <Text>{recipes[0].join(', ')}.</Text>}
			{recipes[1].length > 0 && (
				<Text variant="small">{recipes[1].join(', ')}.</Text>
			)}
		</Stack>
	);
}

export function CalendarPage({ url, title, months, allRecipes }: Props) {
	return (
		<PageWithTitle url={url} title={title}>
			<Stack gap="xl">
				{months.map((month) => {
					return (
						<Stack key={month.monthName} gap="l">
							<Heading as="h2" level={2}>
								{month.monthName}
							</Heading>
							<Text variant="intro">
								In season: {month.ingredients.join(', ')}.
							</Text>
							<MonthRecipesSection
								label="Breakfasts"
								recipes={month.breakfasts}
								allRecipes={allRecipes}
							/>
							<MonthRecipesSection
								label="Lunches"
								recipes={month.lunches}
								allRecipes={allRecipes}
							/>
							<MonthRecipesSection
								label="Specials"
								recipes={month.specials}
								allRecipes={allRecipes}
							/>
							<MonthRecipesSection
								label="Sweets"
								recipes={month.sweets}
								allRecipes={allRecipes}
							/>
							<MonthRecipesSection
								label="Snacks"
								recipes={month.snacks}
								allRecipes={allRecipes}
							/>
						</Stack>
					);
				})}
			</Stack>
		</PageWithTitle>
	);
}
