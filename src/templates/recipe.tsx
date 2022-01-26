import React from 'react';
import { graphql } from 'gatsby';
import Recipe from '../layouts/RecipePage';
import {
	IngredientsJson,
	IngredientInfoJson,
	RecipePageQuery,
	GraphCms_Recipe,
} from '../graphql-types';
import { Amount, IngredientInfo, IngredientKind, Month } from '../util/olivier';
import { Subrecipe } from '../types/Subrecipe';
import { IngredientsWithMeta } from '../types/IngredientsWithMeta';

type Props = {
	data: RecipePageQuery;
	location: {
		pathname: string;
	};
};

const stringToNumber = (value?: string | null): Amount | undefined => {
	if (!value) {
		return undefined;
	}
	const numberMaybe = parseInt(value);
	if (!isNaN(numberMaybe)) {
		return numberMaybe;
	}
	return value;
};

const mapAllIngredients = (
	allIngredients: IngredientsJson[]
): IngredientsWithMeta[] =>
	allIngredients.map(({ slug, ingredients }) => ({
		slug,
		ingredients: ingredients.map(
			({ name, minAmount, maxAmount, unit, modifier }) => ({
				name,
				minAmount: stringToNumber(minAmount),
				maxAmount: stringToNumber(maxAmount),
				unit: unit || undefined,
				modifier: modifier || undefined,
			})
		),
	}));

const mapAllIngredientsInfo = (
	allIngredientsInfo: IngredientInfoJson[]
): IngredientInfo[] =>
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
	subrecipes: Pick<
		GraphCms_Recipe,
		'slug' | 'allIngredients' | 'ingredients' | 'ingredientsMdx' | 'stepsMdx'
	>[]
): Subrecipe[] =>
	subrecipes.map((subrecipe) => ({
		...subrecipe,
		allIngredients: mapAllIngredients(subrecipe.allIngredients),
	}));

export default function RecipePage({
	data: { graphCmsRecipe },
	location: { pathname },
}: Props) {
	if (!graphCmsRecipe) {
		return null;
	}

	const {
		description,
		time,
		yields,
		allIngredients,
		allIngredientsInfo,
		subrecipes,
		...rest
	} = graphCmsRecipe;
	return (
		<Recipe
			{...rest}
			description={description || undefined}
			time={time || undefined}
			yields={yields || undefined}
			url={pathname}
			allIngredients={mapAllIngredients(allIngredients)}
			allIngredientsInfo={mapAllIngredientsInfo(allIngredientsInfo)}
			subrecipes={mapSubrecipes(subrecipes)}
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
				allIngredients {
					...AllIngredients
				}
				ingredientsMdx
				stepsMdx
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
