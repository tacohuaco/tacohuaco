import React from 'react';
import { graphql } from 'gatsby';
import Recipe from '../layouts/RecipePage';
import { RecipePageQuery } from '../graphql-types';
import { Amount, IngredientKind, Month } from '../util/olivier';

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

export default function RecipePage({
	data: { graphCmsRecipe },
	location: { pathname },
}: Props) {
	if (!graphCmsRecipe) {
		return null;
	}

	const { description, time, yields, allIngredients, allIngredientsInfo } =
		graphCmsRecipe;
	return (
		<Recipe
			{...graphCmsRecipe}
			description={description || undefined}
			time={time || undefined}
			yields={yields || undefined}
			url={pathname}
			allIngredients={
				allIngredients.map(({ name, minAmount, maxAmount, unit }) => ({
					name,
					minAmount: stringToNumber(minAmount),
					maxAmount: stringToNumber(maxAmount),
					unit: unit || undefined,
				})) as any
			}
			allIngredientsInfo={allIngredientsInfo.map(
				({ name, kind, hasGluten, hasDairy, hasSugar, seasons }) => ({
					name,
					kind: kind as IngredientKind,
					hasGluten,
					hasDairy,
					hasSugar,
					seasons: seasons as Month[],
				})
			)}
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
			sourceMdx
			stepsMdx
			tags
			time
			title
			toolsMdx
			warnings
			yields
			flags {
				vegan
				vegetarian
				glutenFree
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
				ingredientsMdx
				stepsMdx
			}
			allIngredients {
				name
				minAmount
				maxAmount
				unit
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
