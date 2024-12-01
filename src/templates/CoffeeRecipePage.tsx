import { CoffeeRecipe } from '../components/CoffeeRecipe';
import { PageWithTitle } from './PageWithTitle';
import { type CoffeeRecipe as CoffeeRecipeType } from '../util/cafe/types';
import { Stack } from '../components/Stack';
import { Text } from '../components/Text';

type Props = CoffeeRecipeType & {
	url: string;
};

export function CoffeeRecipePage({ url, ...recipe }: Props) {
	return (
		<PageWithTitle url={url} title={`${recipe.name} coffee recipe`}>
			<Stack gap="l">
				<Text variant="intro">Brew coffee using {recipe.brewer}</Text>
				<CoffeeRecipe key={recipe.name} recipe={recipe} />
			</Stack>
		</PageWithTitle>
	);
}
