import { RecipeListSection } from '../components/RecipeListSection';
import { Stack } from '../components/Stack';
import { VisuallyHidden } from '../components/VisuallyHidden';
import { Text } from '../components/Text';
import type { Recipe } from '../types/Recipe';
import { Page } from './Page';
import { IngredientsSeasonChart } from '../components/IngredientsSeasonChart';
import { Heading } from '../components/Heading';
import { CuisinesLinks } from '../components/CuisinesLinks';
import { TagsLinks } from '../components/TagsLinks';

// TODO: Fix focus outline on QuotedLink

type Props = {
	url: string;
	newRecipes: Recipe[];
	recipesInSeason: Recipe[];
	recipesNextSeason: Recipe[];
	favoriteRecipes: Recipe[];
	ingredientsInSeason: string[];
	ingredientsNextSeason: string[];
	cuisines: [string, number][];
	meals: [string, number][];
	tags: [string, number][];
};

export function MainPage({
	url,
	newRecipes,
	recipesInSeason,
	recipesNextSeason,
	favoriteRecipes,
	ingredientsInSeason,
	ingredientsNextSeason,
	cuisines,
	meals,
	tags,
}: Props) {
	return (
		<Page url={url}>
			<VisuallyHidden as="h1">Recipes</VisuallyHidden>
			<Stack as="main" gap="xl">
				<RecipeListSection title="New recipes" recipes={newRecipes} />
				{recipesInSeason.length > 0 && (
					<RecipeListSection title="In season now" recipes={recipesInSeason}>
						<Text>
							In season now in Valencia, Spain: {ingredientsInSeason.join(', ')}
							.
						</Text>
					</RecipeListSection>
				)}
				{recipesNextSeason.length > 0 && (
					<RecipeListSection
						title="In season next month"
						recipes={recipesNextSeason}
					>
						<Text>
							In season next month: {ingredientsNextSeason.join(', ')}.
						</Text>
					</RecipeListSection>
				)}
				{favoriteRecipes.length > 0 && (
					<RecipeListSection
						title="Our favorite recipes"
						recipes={favoriteRecipes}
					/>
				)}
				<Stack as="section" gap="m">
					<Heading as="h2" level={1}>
						Cuisines
					</Heading>
					<CuisinesLinks cuisines={cuisines} />
				</Stack>
				<Stack as="section" gap="m">
					<Heading as="h2" level={1}>
						Meals
					</Heading>
					<TagsLinks tags={meals} />
				</Stack>
				<Stack as="section" gap="m">
					<Heading as="h2" level={1}>
						Tags
					</Heading>
					<TagsLinks tags={tags} />
				</Stack>
				<Stack as="section" gap="l">
					<Heading as="h2" level={1}>
						Seasonal ingredients
					</Heading>
					<IngredientsSeasonChart />
				</Stack>
			</Stack>
		</Page>
	);
}
