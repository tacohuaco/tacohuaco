import { Stack } from '../components/Stack';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import type { Recipe } from '../types/Recipe';
import { PageWithTitle } from './PageWithTitle';
import Group from 'react-group';
import { Link } from '../components/Link';
import capitalize from 'lodash/capitalize';

// Snack emoji mapping using shared stems to handle singular/plural variations
const SNACK_TO_EMOJI: Record<string, string> = {
	apple: '🍎',
	apricot: '🍑',
	banana: '🍌',
	berr: '🫐', // Matches "berry" and "berries"
	blueberr: '🫐', // Matches "blueberry" and "blueberries"
	cherr: '🍒', // Matches "cherry" and "cherries"
	grape: '🍇',
	kiwi: '🥝',
	mandarin: '🍊',
	mango: '🥭',
	melon: '🍈',
	orange: '🍊',
	peach: '🍑',
	pear: '🍐',
	pineapple: '🍍',
	strawberr: '🍓', // Matches "strawberry" and "strawberries"
	watermelon: '🍉',
};

function getSnackEmoji(snack: string): string {
	const normalizedSnack = snack.toLowerCase().trim();

	// Try exact match first
	if (SNACK_TO_EMOJI[normalizedSnack]) {
		return SNACK_TO_EMOJI[normalizedSnack];
	}

	// Try matching by shared stem (for singular/plural variations)
	for (const [stem, emoji] of Object.entries(SNACK_TO_EMOJI)) {
		if (normalizedSnack.startsWith(stem)) {
			return emoji;
		}
	}

	return '';
}

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

// Some recipes have shorter names or point to similar recipes
const NORMALIZED_RECIPE_NAMES: Record<string, string> = {
	burger: 'klatz burger',
	'caprese salad': 'caprese salad with pesto',
	'chicken wings': 'air-fried chicken wings and legs with potatoes',
	frittata: 'frittata with vegetables',
	hotdogs: 'klatz hot dog',
	'kimchi soup': 'kimchi lava soup',
	'olivier salad': 'olivier salad with chicken',
	pho: 'chicken pho',
	'potato hash': 'potato hash with kimchi',
	'pumpkin soup': 'roasted pumpkin soup',
	'strawberry cobbler': 'blueberry cobbler',
	svekolnik: 'svekolnik (cold borscht)',
	'tres leches': 'pastel tres leches',
	zapekanka: 'cottage cheesecake (zapekanka)',
} as const;

function getNormalizedRecipeName(name: string) {
	const lowerCaseName = name.toLowerCase();
	return NORMALIZED_RECIPE_NAMES[lowerCaseName] ?? lowerCaseName;
}

function RecipeName({
	name,
	first,
	allRecipes,
}: {
	name: string;
	first: boolean;
	allRecipes: Recipe[];
}) {
	const normalizedTitle = getNormalizedRecipeName(name);
	const recipe = allRecipes.find(
		(x) => x.title.toLowerCase() === normalizedTitle
	);

	const nameToDisplay = first ? capitalize(name) : name;

	if (recipe === undefined) {
		return nameToDisplay;
	}

	return <Link href={`/recipes/${recipe.slug}`}>{nameToDisplay}</Link>;
}

function SnackName({ name, first }: { name: string; first: boolean }) {
	const emoji = getSnackEmoji(name);
	const nameToDisplay = first ? capitalize(name) : name;

	return (
		<>
			{nameToDisplay}
			{emoji && ` ${emoji}`}
		</>
	);
}

function MonthRecipesSection({
	label,
	recipes,
	allRecipes,
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

	const isSnacks = label.toLowerCase() === 'snacks';

	return (
		<Stack gap="s">
			<Heading as="h3" level={3}>
				{label}
			</Heading>
			{recipes[0].length > 0 && (
				<Text>
					<Group separator=", ">
						{recipes[0].map((x, index) =>
							isSnacks ? (
								<SnackName key={x} name={x} first={index === 0} />
							) : (
								<RecipeName
									key={x}
									name={x}
									first={index === 0}
									allRecipes={allRecipes}
								/>
							)
						)}
					</Group>
					.
				</Text>
			)}
			{recipes[1].length > 0 && (
				<Text variant="small">
					{' '}
					<Group separator=", ">
						{recipes[1].map((x, index) =>
							isSnacks ? (
								<SnackName key={x} name={x} first={index === 0} />
							) : (
								<RecipeName
									key={x}
									name={x}
									first={index === 0}
									allRecipes={allRecipes}
								/>
							)
						)}
					</Group>
					.
				</Text>
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
