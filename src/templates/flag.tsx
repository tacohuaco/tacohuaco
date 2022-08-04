import React from 'react';
import { graphql } from 'gatsby';
import FlagPage, { TITLES } from '../layouts/FlagPage';
import Metatags from '../components/Metatags';
import { FlagName } from '../types/Flags';

type Props = {
	data: Queries.RecipesPageQuery;
	location: {
		pathname: string;
	};
	pageContext: {
		flag: FlagName;
	};
};

const filterRecipes = (
	recipes: readonly Queries.RecipeMetaFragment[],
	flag: FlagName
) => {
	return recipes.filter(
		// HACK: Use any, otherwise the could would be unnecessary complex
		(recipe) => (recipe as any).flags[flag] || (recipe as any)[flag]
	);
};

export default function FlagRecipes({ data, location, pageContext }: Props) {
	const recipes = data.allGraphCmsRecipe?.nodes;
	if (!recipes) {
		return null;
	}

	const filteredRecipes = filterRecipes(recipes, pageContext.flag);

	if (filteredRecipes.length === 0) {
		return <h1>Not found</h1>;
	}

	return (
		<FlagPage
			url={location.pathname}
			flag={pageContext.flag}
			recipes={filteredRecipes}
		/>
	);
}

export const Head = ({ data, location, pageContext }: Props) => {
	const recipes = data.allGraphCmsRecipe?.nodes;
	if (!recipes) {
		return null;
	}

	const filteredRecipes = filterRecipes(recipes, pageContext.flag);

	if (filteredRecipes.length === 0) {
		return null;
	}

	return (
		<Metatags
			slug={location.pathname}
			title={TITLES[pageContext.flag]}
			images={filteredRecipes?.[0].images}
		/>
	);
};

// HACK: We can't filter by flags so have to query all recipes and filter in render
export const pageQuery = graphql`
	query FlagPage {
		allGraphCmsRecipe(sort: { fields: [title], order: ASC }) {
			nodes {
				...RecipeMeta
			}
		}
	}
`;
