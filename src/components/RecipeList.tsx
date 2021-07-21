import React from 'react';
import { Box } from 'tamia';
import { Link } from 'tamia-gatsby-link';

type Props = {
	recipes: any[];
};

const RecipeList = ({ recipes }: Props) => (
	<Box as="ul" mb="m">
		{recipes.map((recipe) => (
			<Box key={recipe.slug} as="li" mb="s">
				<Link href={recipe.slug}>{recipe.title}</Link>
			</Box>
		))}
	</Box>
);

export default RecipeList;
