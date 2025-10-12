import Group from 'react-group';
import { Stack } from '../components/Stack';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { VisuallyHidden } from '../components/VisuallyHidden';
import capitalize from 'lodash/capitalize';
import type { Recipe } from '../types/Recipe';
import { Box } from '../components/Box';

export interface SeasonalMonth {
	monthName: string;
	ingredients: string[];
	breakfasts?: [string[], string[]];
	lunches?: [string[], string[]];
	specials?: [string[], string[]];
	sweets?: [string[], string[]];
	snacks?: [string[], string[]];
}

// Ingredient emoji mapping
// Ingredient lists use singular names but snacks are usually plural
const INGREDIENT_TO_EMOJI: Record<string, string> = {
	apple: '🍎',
	apples: '🍎',
	apricot: '🍑',
	apricots: '🍑',
	avocado: '🥑',
	avocadoes: '🥑',
	banana: '🍌',
	bananas: '🍌',
	beetroot: '🫜',
	beetroots: '🫜',
	berries: '🫐',
	blackberry: '🫐',
	blueberries: '🫐',
	broccoli: '🥦',
	'young carrot': '🥕',
	'young carrots': '🥕',
	cherry: '🍒',
	cherries: '🍒',
	cucumber: '🥒',
	cucumbers: '🥒',
	eggplant: '🍆',
	eggplants: '🍆',
	'garrofó bean': '🫘',
	grape: '🍇',
	grapes: '🍇',
	kiwi: '🥝',
	mandarin: '🍊',
	mandarins: '🍊',
	mango: '🥭',
	mangoes: '🥭',
	melon: '🍈',
	nectarine: '🍑',
	nectarines: '🍑',
	orange: '🍊',
	oranges: '🍊',
	peach: '🍑',
	peaches: '🍑',
	pear: '🍐',
	pears: '🍐',
	pineapple: '🍍',
	pineapples: '🍍',
	pumpkin: '🎃',
	pumpkins: '🎃',
	'young potato': '🥔',
	'young potatos': '🥔',
	'sweet potato': '🍠',
	'sweet potatos': '🍠',
	spinach: '🍃',
	strawberry: '🍓',
	strawberries: '🍓',
	tomato: '🍅',
	tomatoes: '🍅',
	watermelon: '🍉',
};

function getIngredientEmoji(ingredient: string): string | undefined {
	const normalizedIngredient = ingredient.toLowerCase().trim();
	return INGREDIENT_TO_EMOJI[normalizedIngredient];
}

// Some recipes have shorter names or point to similar recipes
const NORMALIZED_RECIPE_NAMES: Record<string, string> = {
	burger: 'klatz burger',
	'chicken wings': 'air-fried chicken wings and legs with potatoes',
	frittata: 'frittata with vegetables',
	hotdogs: 'klatz hot dog',
	'hummus and bread': 'hummus',
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

function IngredientName({ name, first }: { name: string; first?: boolean }) {
	const emoji = getIngredientEmoji(name);
	const nameToDisplay = first ? capitalize(name) : name;

	return (
		<Box as="span" whiteSpace="nowrap">
			{nameToDisplay}
			{emoji && (
				<Text as="span" fontStyle="normal">
					{' '}
					{emoji}
				</Text>
			)}
		</Box>
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
								<IngredientName key={x} name={x} first={index === 0} />
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
					<Group separator=", ">
						{recipes[1].map((x, index) =>
							isSnacks ? (
								<IngredientName key={x} name={x} first={index === 0} />
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

export function CalendarMonthPanel({
	month,
	allRecipes,
	labelledBy,
	id,
}: {
	month: SeasonalMonth;
	allRecipes: Recipe[];
	labelledBy: string;
	id: string;
}) {
	return (
		<div role="tabpanel" aria-labelledby={labelledBy} id={id}>
			<Stack key={month.monthName} gap="l">
				<VisuallyHidden as="h2" level={2}>
					{month.monthName}
				</VisuallyHidden>
				<Text variant="intro">
					In season:{' '}
					<Group separator=", ">
						{month.ingredients.map((ingredient) => (
							<IngredientName key={ingredient} name={ingredient} />
						))}
					</Group>
					.
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
		</div>
	);
}
