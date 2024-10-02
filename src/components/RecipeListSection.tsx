import { type ReactNode } from 'react';
import { Stack, Heading } from '.';
import { RecipeList } from './RecipeList';
import type { RecipeFragment } from '../types/Recipe';

interface Props {
	title: ReactNode;
	recipes: RecipeFragment[];
	children?: ReactNode;
}

export function RecipeListSection({ title, recipes, children }: Props) {
	return (
		<Stack as="section" gap="l">
			<Stack as="section" gap="s">
				<Heading as="h2" level={1}>
					{title}
				</Heading>
				{children}
			</Stack>
			<RecipeList recipes={recipes} />
		</Stack>
	);
}
