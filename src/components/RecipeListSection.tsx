import { type ReactNode } from 'react';
import { Stack, Heading } from '.';
import { RecipeList } from './RecipeList';
import type { RecipeFragment } from '../types/Recipe';

interface Props {
	title: ReactNode;
	recipes: RecipeFragment[];
}

export function RecipeListSection({ title, recipes }: Props) {
	return (
		<Stack as="section" gap="l">
			<Heading as="h2" level={1}>
				{title}
			</Heading>
			<RecipeList recipes={recipes} />
		</Stack>
	);
}
