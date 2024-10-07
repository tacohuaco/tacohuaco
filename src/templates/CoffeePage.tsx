import { Stack } from '../components/Stack';
import { CoffeeRecipe } from '../components/CoffeeRecipe';
import { PageWithTitle } from './PageWithTitle';
import { type CoffeeRecipe as CoffeeRecipeType } from '../util/cafe';

type Props = {
	url: string;
	title: string;
	coffeeRecipes: CoffeeRecipeType[];
};

export function CoffeePage({ url, title, coffeeRecipes }: Props) {
	return (
		<PageWithTitle url={url} title={title}>
			<Stack gap="l">
				{coffeeRecipes.map((recipe) => (
					<CoffeeRecipe key={recipe.name} recipe={recipe} />
				))}
			</Stack>
		</PageWithTitle>
	);
}
