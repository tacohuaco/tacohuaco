import { RecipeListSection, Stack, VisuallyHidden, Text } from '../components';
import type { Recipe } from '../types/Recipe';
import { Page } from './Page';

type Props = {
	url: string;
	newRecipes: Recipe[];
	recipesInSeason: Recipe[];
	ingredientsInSeason: string[];
};

export function MainPage({
	url,
	newRecipes,
	recipesInSeason,
	ingredientsInSeason,
}: Props) {
	return (
		<Page url={url}>
			<VisuallyHidden as="h1">Recipes</VisuallyHidden>
			<Stack as="main" gap="xl">
				<RecipeListSection
					title="Recently added recipes"
					recipes={newRecipes}
				/>
				{recipesInSeason.length > 0 && (
					<RecipeListSection
						title="Recipes with ingredients in season"
						recipes={recipesInSeason}
					>
						<Text>
							In season now in Valencia, Spain: {ingredientsInSeason.join(', ')}
							.
						</Text>
					</RecipeListSection>
				)}
			</Stack>
		</Page>
	);
}
