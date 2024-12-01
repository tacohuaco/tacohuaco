import { PageWithTitle } from './PageWithTitle';
import { type CoffeeRecipe as CoffeeRecipeType } from '../util/cafe/types';
import { Stack } from '../components/Stack';
import type { ReactNode } from 'react';
import { TextTypo } from '../components/TextTypo';

type Props = CoffeeRecipeType & {
	url: string;
	children: ReactNode;
};

export function CoffeeRecipePage({ url, children, ...recipe }: Props) {
	return (
		<PageWithTitle url={url} title={`${recipe.name} coffee recipe`}>
			<Stack gap="l">
				<TextTypo variant="intro">
					Brew awesome coffee using {recipe.brewer}.
				</TextTypo>
				{children}
			</Stack>
		</PageWithTitle>
	);
}
