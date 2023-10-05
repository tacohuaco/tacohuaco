import React from 'react';
import { graphql } from 'gatsby';
import Recipe from '../layouts/RecipePage';
import { Metatags } from '../components/Metatags';
import {
	normalizeAmount,
	normalizeAmountValue,
	IngredientInfo,
	IngredientKind,
	Month,
} from '../util/olivier';
import { Subrecipe } from '../types/Subrecipe';
import { IngredientsWithMeta } from '../types/IngredientsWithMeta';

type Props = {
	data: Queries.RecipePageQuery;
	location: {
		pathname: string;
	};
};

const mapAllIngredients = (
	allIngredients: readonly Queries.IngredientsJson[]
): readonly IngredientsWithMeta[] =>
	allIngredients.map(({ slug, ingredients }) => ({
		slug,
		ingredients: ingredients.map((ingredient) => {
			const { amount: maxAmount, unit } = normalizeAmount(
				ingredient.maxAmount || undefined,
				ingredient.unit || undefined
			);
			const { amount: minAmount } = normalizeAmount(
				ingredient.minAmount || undefined,
				ingredient.unit || undefined,
				unit
			);
			return {
				name: ingredient.name,
				minAmount: normalizeAmountValue(minAmount || ''),
				maxAmount: normalizeAmountValue(maxAmount || ''),
				unit: unit || undefined,
				modifier: ingredient.modifier || undefined,
			};
		}),
	}));

const mapAllIngredientsInfo = (
	allIngredientsInfo: readonly Queries.IngredientInfoJson[]
): readonly IngredientInfo[] =>
	allIngredientsInfo.map(
		({ name, kind, hasGluten, hasDairy, hasSugar, seasons }) => ({
			name,
			kind: kind as IngredientKind,
			hasGluten,
			hasDairy,
			hasSugar,
			seasons: seasons as Month[],
		})
	);

const mapSubrecipes = (
	subrecipes: readonly Pick<
		Queries.GraphCMS_Recipe,
		| 'slug'
		| 'allIngredients'
		| 'ingredients'
		| 'ingredientsMdx'
		| 'stepsMdx'
		| 'title'
	>[]
): readonly Subrecipe[] =>
	subrecipes.map((subrecipe) => ({
		...subrecipe,
		allIngredients: mapAllIngredients(subrecipe.allIngredients),
	}));

export default function RecipePage({ data, location }: Props) {
	const recipe = data.graphCmsRecipe;
	const allRecipes = data.allGraphCmsRecipe?.nodes;
	if (!recipe || !allRecipes) {
		return null;
	}

	const {
		time,
		yields,
		allIngredients,
		allIngredientsInfo,
		subrecipes,
		...rest
	} = recipe;
	return (
		<Recipe
			{...rest}
			time={time || undefined}
			yields={yields || undefined}
			url={location.pathname}
			allIngredients={mapAllIngredients(allIngredients)}
			allIngredientsInfo={mapAllIngredientsInfo(allIngredientsInfo)}
			subrecipes={mapSubrecipes(subrecipes)}
			allRecipes={allRecipes}
		/>
	);
}

export const Head = ({ data, location }: Props) => {
	const recipe = data.graphCmsRecipe;
	if (!recipe) {
		return null;
	}

	return (
		<Metatags
			slug={location.pathname}
			title={`${recipe.title} recipe`}
			description={recipe.description || undefined}
			images={recipe.images}
		/>
	);
};

export const pageQuery = graphql`
	query RecipePage($slug: String!) {
		allGraphCmsRecipe(sort: { title: ASC }) {
			nodes {
				...RecipeMeta
			}
		}
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
			preconditions
			slug
			sourceMdx
			stepsMdx
			tags
			time
			title
			tips
			toolsMdx
			warnings
			yields
			keywordsList
			flags {
				vegan
				vegetarian
				glutenFree
				lowGluten
				dairyFree
				noAddedSugar
			}
			images {
				url
				handle
				width
				height
			}
			subrecipes {
				slug
				title
				ingredients
				allIngredients {
					...AllIngredients
				}
				ingredientsMdx
				stepsMdx
			}
			recipes {
				...RecipeMeta
			}
			allIngredients {
				...AllIngredients
			}
			allIngredientsInfo {
				name
				kind
				hasGluten
				hasDairy
				hasSugar
				seasons
			}
		}
	}
`;
