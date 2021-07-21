import React from 'react';
import { graphql } from 'gatsby';
import { Image } from '../types/Image';
import Recipe from '../layouts/RecipePage';
import { RecipePageQuery, GraphCms_Asset } from '../graphql-types';
import { getRecipeIngredients, getFlags } from '../util/client';

type Props = {
	data: RecipePageQuery;
	pageContext: {
		related: any[];
	};
	location: {
		pathname: string;
	};
};

const mapImages = (
	images: Pick<GraphCms_Asset, 'url' | 'handle' | 'width' | 'height'>[]
): Image[] =>
	images.map((image) => ({
		url: image.url,
		handle: image.handle || '',
		width: image.width || 0,
		height: image.height || 0,
	}));

export default function RecipePage({
	data: { graphCmsRecipe, allGraphCmsIngredient },
	pageContext: { related = [] },
	location: { pathname },
}: Props) {
	if (!graphCmsRecipe) {
		return null;
	}

	const {
		artemsFavorite,
		cuisines,
		description,
		descriptionMdx,
		images,
		ingredientsMdx,
		margaritasFavorite,
		overnight,
		stepsMdx,
		tags,
		time,
		title,
		yields,
	} = graphCmsRecipe;
	const ingredients = getRecipeIngredients(
		graphCmsRecipe,
		allGraphCmsIngredient.nodes
	);
	const flags = getFlags(ingredients);
	return (
		<Recipe
			artemsFavorite={artemsFavorite}
			cuisines={cuisines}
			description={description || undefined}
			descriptionMdx={descriptionMdx}
			flags={flags}
			images={mapImages(images)}
			ingredientsMdx={ingredientsMdx}
			margaritasFavorite={margaritasFavorite}
			overnight={overnight}
			related={related}
			stepsMdx={stepsMdx}
			tags={tags}
			time={time || undefined}
			title={title}
			url={pathname}
			yields={yields || undefined}
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
			stepsMdx
			tags
			time
			title
			tools
			yields
			images {
				url
				handle
				width
				height
			}
		}
		allGraphCmsIngredient {
			nodes {
				name
				season
				kind
				hasDairy
				hasGluten
				hasNuts
				hasSugar
			}
		}
	}
`;