import React from 'react';
import { Grid } from 'tamia';
import RecipeCard from './RecipeCard';

type Props = {
	recipes: readonly Queries.RecipeMetaFragment[];
};

export const RecipeList = ({ recipes }: Props) => (
	<Grid as="ul" minColumnWidth={300} gridColumnGap="m" gridRowGap="l">
		{recipes.map((recipe) => (
			<RecipeCard key={recipe.slug} as="li" {...recipe} />
		))}
	</Grid>
);
