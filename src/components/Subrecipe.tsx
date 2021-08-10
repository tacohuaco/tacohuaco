import React from 'react';
import { Text } from 'tamia';
import { useSubrecipes } from './SubrecipesContext';
import { MDXRenderer } from './MDXRenderer';

type Props = {
	slug: string;
	value: 'ingredients' | 'steps';
};

export function Subrecipe({ slug, value }: Props) {
	const subrecipes = useSubrecipes();
	const subrecipe = subrecipes.find((x) => x.slug === slug);

	if (!subrecipe) {
		return (
			<Text>
				Subrecipe {slug} not found. Either the slug is wrong, or the subrecipe
				isn’t attached to the main recipe.
			</Text>
		);
	}

	return (
		<MDXRenderer>
			{value === 'ingredients' ? subrecipe.ingredientsMdx : subrecipe.stepsMdx}
		</MDXRenderer>
	);
}
