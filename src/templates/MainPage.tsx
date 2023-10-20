import { RecipeListSection, Stack, VisuallyHidden } from '../components';
import type { Recipe } from '../types/Recipe';
import { Page } from './Page';

type Props = {
	url: string;
	title: string;
	newRecipes: Recipe[];
	recipesInSeason: Recipe[];
};

export function MainPage({ url, newRecipes, recipesInSeason }: Props) {
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
					/>
				)}
			</Stack>
		</Page>
	);
}
