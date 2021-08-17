import React from 'react';
import { Box, Grid } from 'tamia';
import RecipeCard from './RecipeCard';
import { RecipeMetaFragment } from '../graphql-types';

type Props = {
	recipes: RecipeMetaFragment[];
};

const RecipeList = ({ recipes }: Props) => (
	<Grid as="ul" minColumnWidth={300} gridColumnGap="m" gridRowGap="l">
		{recipes.map((recipe) => (
			<Box key={recipe.slug} as="li">
				<RecipeCard {...recipe} />
			</Box>
		))}
	</Grid>
);

export default RecipeList;
