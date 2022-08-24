import React from 'react';
import { Grid } from 'tamia';
import RecipeCard from './RecipeCard';

type Props = {
	recipes: readonly Queries.RecipeMetaFragment[];
};

export const RecipeList = ({ recipes }: Props) => (
	<Grid
		as="ul"
		gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr 1fr']}
		gridColumnGap="m"
		gridRowGap="l"
	>
		{recipes.map((recipe) => (
			<RecipeCard key={recipe.slug} as="li" {...recipe} />
		))}
	</Grid>
);
