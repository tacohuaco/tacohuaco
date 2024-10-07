import { RecipeListSection, Stack, VisuallyHidden, Text } from '../components';
import type { Recipe } from '../types/Recipe';
import { Page } from './Page';

type Props = {
	url: string;
	newRecipes: Recipe[];
	recipesInSeason: Recipe[];
	recipesNextSeason: Recipe[];
	ingredientsInSeason: string[];
	ingredientsNextSeason: string[];
};

export function MainPage({
	url,
	newRecipes,
	recipesInSeason,
	recipesNextSeason,
	ingredientsInSeason,
	ingredientsNextSeason,
}: Props) {
	return (
		<Page url={url}>
			<VisuallyHidden as="h1">Recipes</VisuallyHidden>
			<Stack as="main" gap="xl">
				<RecipeListSection title="New recipes" recipes={newRecipes} />
				{recipesInSeason.length > 0 && (
					<RecipeListSection title="Cook seasonal" recipes={recipesInSeason}>
						<Text>
							In season now in Valencia, Spain: {ingredientsInSeason.join(', ')}
							.
						</Text>
					</RecipeListSection>
				)}
				{recipesNextSeason.length > 0 && (
					<RecipeListSection
						title="Get excited for the next month"
						recipes={recipesNextSeason}
					>
						<Text>
							In season next month: {ingredientsNextSeason.join(', ')}.
						</Text>
					</RecipeListSection>
				)}
			</Stack>
		</Page>
	);
}
