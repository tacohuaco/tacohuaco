import React from 'react';
import { Stack, Heading } from 'tamia';
import Page from './Page';
import { COFFEE_RECIPES } from '../util/cafe';
import CoffeeRecipe from '../components/CoffeeRecipe';

type Props = {
	url: string;
};

export default function CoffeePage({ url }: Props) {
	return (
		<Page url={url}>
			<Stack as="main" gap="l">
				<Heading level={1}>Coffee recipes</Heading>
				<Stack gap="l">
					{COFFEE_RECIPES.map((recipe) => (
						<CoffeeRecipe key={recipe.name} recipe={recipe} />
					))}
				</Stack>
			</Stack>
		</Page>
	);
}
