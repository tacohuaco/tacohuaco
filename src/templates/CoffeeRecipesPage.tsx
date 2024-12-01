import { Stack } from '../components/Stack';
import { CoffeeRecipeCard } from '../components/CoffeeRecipeCard';
import { PageWithTitle } from './PageWithTitle';
import { type CoffeeRecipe as CoffeeRecipeType } from '../util/cafe/types';
import { Link } from '../components/Link';

type Props = {
	url: string;
	title: string;
	coffeeRecipes: CoffeeRecipeType[];
};

export function CoffeeRecipesPage({ url, title, coffeeRecipes }: Props) {
	return (
		<PageWithTitle
			url={url}
			title={title}
			extraFooter={
				<>
					Icons by{' '}
					<Link href="https://thenounproject.com/creator/yusufmahfudin732">
						Mahfudin yusuf
					</Link>{' '}
					and{' '}
					<Link href="https://thenounproject.com/creator/seren.crea">
						Serena
					</Link>
					.
				</>
			}
		>
			<Stack gap="l">
				{coffeeRecipes.map((recipe) => (
					<CoffeeRecipeCard key={recipe.name} recipe={recipe} />
				))}
			</Stack>
		</PageWithTitle>
	);
}
