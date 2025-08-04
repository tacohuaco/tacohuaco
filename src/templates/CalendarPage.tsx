import { Stack } from '../components/Stack';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { RecipeList } from '../components/RecipeList';
import type { Recipe } from '../types/Recipe';
import { PageWithTitle } from './PageWithTitle';

interface SeasonalMonth {
	monthName: string;
	ingredients: string[];
	recipes: Recipe[];
}

type Props = {
	url: string;
	months: SeasonalMonth[];
};

export function CalendarPage({ url, months }: Props) {
	return (
		<PageWithTitle url={url} title="Calendar">
			<Stack gap="xl">
				{months.map((month) => (
					<Stack key={month.monthName} gap="m">
						<Heading as="h2" level={2}>
							{month.monthName}
						</Heading>
						<Text>In season: {month.ingredients.join(', ')}.</Text>
						{month.recipes.length > 0 && <RecipeList recipes={month.recipes} />}
					</Stack>
				))}
			</Stack>
		</PageWithTitle>
	);
}
