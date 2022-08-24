import React, { ReactNode } from 'react';
import { Stack, Heading } from 'tamia';
import { RecipeList } from './RecipeList';

interface RecipeListSectionProps {
	title: ReactNode;
	recipes: readonly Queries.RecipeMetaFragment[];
}

export function RecipeListSection({ title, recipes }: RecipeListSectionProps) {
	return (
		<Stack as="main" gap="l">
			<Heading as="h2" level={1}>
				{title}
			</Heading>
			<RecipeList recipes={recipes} />
		</Stack>
	);
}
