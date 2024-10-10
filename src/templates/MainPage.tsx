import { RecipeListSection } from '../components/RecipeListSection';
import { Stack } from '../components/Stack';
import { VisuallyHidden } from '../components/VisuallyHidden';
import { Text } from '../components/Text';
import type { Recipe } from '../types/Recipe';
import { Page } from './Page';

type Props = {
	url: string;
	newRecipes: Recipe[];
	recipesInSeason: Recipe[];
	recipesNextSeason: Recipe[];
	favoriteRecipes: Recipe[];
	ingredientsInSeason: string[];
	ingredientsNextSeason: string[];
};

export function MainPage({
	url,
	newRecipes,
	recipesInSeason,
	recipesNextSeason,
	favoriteRecipes,
	ingredientsInSeason,
	ingredientsNextSeason,
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
			</Stack>
		</Page>
	);
}
