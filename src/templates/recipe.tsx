import React from 'react';
import { graphql } from 'gatsby';
import Recipe from '../layouts/RecipePage';
import { RecipePageQuery } from '../graphql-types';

type Props = {
	data: RecipePageQuery;
	location: {
		pathname: string;
	};
};

export default function RecipePage({
	data: { graphCmsRecipe },
	location: { pathname },
}: Props) {
	if (!graphCmsRecipe) {
		return null;
	}

	const { description, time, yields } = graphCmsRecipe;
	return (
		<Recipe
			{...graphCmsRecipe}
			description={description || undefined}
			time={time || undefined}
			yields={yields || undefined}
			url={pathname}
		/>
	);
}

export const pageQuery = graphql`
	query RecipePage($slug: String!) {
		graphCmsRecipe(slug: { eq: $slug }) {
			artemsFavorite
			cuisines
			description
			descriptionMdx
			ingredients
			ingredientsMdx
			margaritasFavorite
			notesMdx
			overnight
			sourceMdx
			stepsMdx
			tags
			time
			title
			toolsMdx
			yields
			flags {
				vegan
				vegetarian
				gluten
				diary
				addedSugar
			}
			images {
				url
				handle
				width
				height
			}
			subrecipes {
				slug
				ingredientsMdx
				stepsMdx
			}
		}
	}
`;
