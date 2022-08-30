import React, { useState } from 'react';
import { Box, Stack, Grid, Heading, Text, VisuallyHidden } from 'tamia';
import { intersection, sortBy } from 'lodash';
import { MDXRenderer } from '../components/MDXRenderer';
import { Image } from '../components/Image';
import { TextContent } from '../components/TextContent';
import {
	RecipeIngredients,
	IngredientListItem,
} from '../components/RecipeIngredients';
import { RecipeDirections } from '../components/RecipeDirections';
import { RecipeMeta } from '../components/RecipeMeta';
import { IngredientsExplorer } from '../components/IngredientsExplorer';
import {
	getIngredientsBySlug,
	SubrecipesContext,
} from '../components/SubrecipesContext';
import { RecipeContext } from '../components/RecipeContext';
import {
	scale,
	parse,
	normalize,
	formatOption,
	printOption,
	Ingredient,
	IngredientInfo,
	Amount,
} from '../util/olivier';
import { asList } from '../util/client';
import { Collapsible } from '../components/Collapsible';
import { Button } from '../components/Button';
import { SubrecipesToTry } from '../components/SubrecipesToTry';
import { ShoppingList } from '../components/ShoppingList';
import { RecipeList } from '../components/RecipeList';
import { IngredientsWithMeta } from '../types/IngredientsWithMeta';
import { Subrecipe } from '../types/Subrecipe';
import { Asset } from '../types/Asset';
import Page from './Page';

type Props = Pick<
	Queries.GraphCMS_Recipe,
	| 'artemsFavorite'
	| 'cuisines'
	| 'descriptionMdx'
	| 'flags'
	| 'ingredients'
	| 'ingredientsMdx'
	| 'keywordsList'
	| 'margaritasFavorite'
	| 'notesMdx'
	| 'overnight'
	| 'preconditions'
	| 'slug'
	| 'sourceMdx'
	| 'stepsMdx'
	| 'tags'
	| 'title'
	| 'tips'
	| 'toolsMdx'
	| 'warnings'
> & {
	allIngredients: readonly IngredientsWithMeta[];
	allIngredientsInfo: readonly IngredientInfo[];
	images: readonly Asset[];
	subrecipes: readonly Subrecipe[];
	recipes: readonly Queries.RecipeMetaFragment[];
	time?: number;
	url: string;
	yields?: string;
	allRecipes: readonly Queries.RecipeMetaFragment[];
};

const parseYields = (yields = ''): Ingredient => {
	return normalize(parse(`${yields} yields`))[0];
};

const printYields = (ingredient: Ingredient): string => {
	const { amount, ...printed } = printOption(formatOption(ingredient));
	const name = printed.name.replace(/\s*yields$/, '');
	const suffix = name ? printed.suffix : '';
	return `Yields ${amount} ${suffix} ${name}`;
};

const getRatio = (amount: number, nextAmout: number) => {
	return nextAmout / amount;
};

const getPrevAmount = (amount: number) => {
	if (amount > 100) {
		return amount - 100;
	}
	if (amount > 20) {
		return amount - 10;
	}
	if (amount === 1) {
		return amount;
	}
	return amount - 1;
};

const getNextAmount = (amount: number) => {
	if (amount < 20) {
		return amount + 1;
	}
	if (amount < 100) {
		return amount + 10;
	}
	return amount + 100;
};

const scaleAllIngredients = (
	allIngredients: readonly IngredientsWithMeta[],
	amount: number,
	currentAmout: number
) => {
	return allIngredients.map((x) => ({
		...x,
		ingredients: scale(x.ingredients, getRatio(amount, currentAmout)),
	}));
};

const normalizeAmount = (amount?: Amount): number => {
	return typeof amount === 'number' ? amount : 1;
};

const filterGenericCuisines = (cuisines: Queries.GraphCMS_Recipe['cuisines']) =>
	cuisines.filter((x) => x !== 'Klatzlandian');

const getRelatedRecipes = (
	allRecipes: readonly Queries.RecipeMetaFragment[],
	{
		slug,
		cuisines,
		tags,
	}: Pick<Queries.GraphCMS_Recipe, 'slug' | 'cuisines' | 'tags'>
): readonly Queries.RecipeMetaFragment[] => {
	const filteredRecipes = allRecipes.filter((recipe) => {
		// Don't show the same recipe
		if (recipe.slug === slug) {
			return false;
		}
		// Show foundation recipes and all other recipes separately
		if (
			tags.includes('Foundation')
				? !recipe.tags.includes('Foundation')
				: recipe.tags.includes('Foundation')
		) {
			return false;
		}
		return true;
	});

	// Filter out Klatzlandian recipes
	const filteredCuisines = filterGenericCuisines(cuisines);

	// Calculate weights
	const weightedRecipes: readonly [Queries.RecipeMetaFragment, number][] =
		filteredRecipes.map((recipe) => {
			const tagsWeight = intersection(recipe.tags, tags).length * 10;
			const cuisineWeight = intersection(
				filterGenericCuisines(recipe.cuisines),
				filteredCuisines
			).length;
			return [recipe, tagsWeight + cuisineWeight];
		});

	// Sort by weight
	const sortedRecipes = sortBy(weightedRecipes, (x) => -x[1]);

	// Discard recipes with 0 weight and return 6 top recipes
	return sortedRecipes
		.filter(([, weight]) => weight > 0)
		.map(([recipe]) => recipe)
		.slice(0, 6);
};

export default function RecipePage({
	artemsFavorite,
	cuisines,
	descriptionMdx,
	flags,
	images,
	ingredientsMdx,
	keywordsList,
	margaritasFavorite,
	notesMdx,
	overnight,
	preconditions,
	recipes,
	slug,
	sourceMdx,
	stepsMdx,
	subrecipes,
	tags,
	time,
	tips,
	title,
	toolsMdx,
	url,
	warnings,
	yields,
	allIngredients,
	allIngredientsInfo,
	allRecipes,
}: Props) {
	const parsedYields = parseYields(yields);
	const baseAmount = normalizeAmount(parsedYields.minAmount);

	const [currentAmout, setCurrentAmout] = useState(baseAmount);

	const recipeIngredients = getIngredientsBySlug(allIngredients, slug);
	const scaledRecipeIngredients = scale(
		recipeIngredients,
		getRatio(baseAmount, currentAmout)
	);
	const scaledSubrecipes = subrecipes.map((x) => ({
		...x,
		allIngredients: scaleAllIngredients(
			x.allIngredients,
			baseAmount,
			currentAmout
		),
	}));

	const recipeWithSubrecipes: Subrecipe[] = [
		{
			slug,
			title,
			ingredients: '',
			ingredientsMdx: '',
			stepsMdx: '',
			allIngredients: [
				{
					slug,
					ingredients: scaledRecipeIngredients,
				},
			],
		},
		...scaledSubrecipes,
	];

	const relatedRecipes = getRelatedRecipes(allRecipes, {
		slug,
		cuisines,
		tags,
	});

	return (
		<SubrecipesContext.Provider value={scaledSubrecipes}>
			<RecipeContext.Provider
				value={{ slug, ingredients: scaledRecipeIngredients }}
			>
				<Page url={url}>
					<Stack as="main" gap="xl">
						<Stack gap="l">
							<Stack gap="m">
								<Heading level={1}>{title}</Heading>
								<RecipeMeta
									flags={flags}
									margaritasFavorite={margaritasFavorite}
									artemsFavorite={artemsFavorite}
									cuisines={cuisines}
									tags={tags}
									time={time}
									overnight={overnight}
								/>
							</Stack>
							{descriptionMdx && (
								<TextContent fontSize="l" fontStyle="italic">
									<MDXRenderer>{descriptionMdx}</MDXRenderer>
								</TextContent>
							)}
							<VisuallyHidden>
								Keywords: {keywordsList.join(', ')}
							</VisuallyHidden>
							{images.length > 0 && (
								<Image
									image={images[0]}
									alt=""
									maxWidth={1026}
									transforms={['quality=value:75']}
									withWebp
								/>
							)}
							<Grid
								gridGap="m"
								gridTemplateColumns={['1fr', '1fr', '1.2fr 2.8fr', '1fr 3fr']}
							>
								<Stack gap="m">
									<Stack direction="row" gap="s" alignItems="center">
										<Heading level={2}>Ingredients</Heading>
										{yields && (
											<div>
												<Stack
													direction="row"
													gap="s"
													alignItems="center"
													minWidth="auto"
												>
													<Button
														onClick={() =>
															setCurrentAmout((x) => getPrevAmount(x))
														}
														aria-label="Less"
													>
														–
													</Button>
													<Button
														onClick={() =>
															setCurrentAmout((x) => getNextAmount(x))
														}
														aria-label="More"
													>
														+
													</Button>
												</Stack>
											</div>
										)}
									</Stack>
									{yields && (
										<Text variant="small">
											{printYields({
												...parsedYields,
												minAmount: currentAmout,
												maxAmount: currentAmout,
											})}
										</Text>
									)}
									<TextContent>
										<RecipeIngredients>
											<MDXRenderer>{ingredientsMdx}</MDXRenderer>
											{warnings.length > 0 && (
												<>
													<Heading level={3}>Warnings</Heading>
													<ul>
														{warnings.map((warning) => (
															<Text
																key={warning}
																as={IngredientListItem}
																variant="small"
															>
																<MDXRenderer>{warning}</MDXRenderer>
															</Text>
														))}
													</ul>
												</>
											)}
											{toolsMdx && (
												<>
													<Heading level={3}>You will need</Heading>
													<MDXRenderer>{toolsMdx}</MDXRenderer>
												</>
											)}
										</RecipeIngredients>
									</TextContent>
								</Stack>
								<TextContent>
									<Stack gap="l">
										<Box>
											<Heading level={2}>Directions</Heading>
											{preconditions.length > 0 && (
												<Text>
													<strong>Before you start:</strong>{' '}
													{asList(preconditions)}.
												</Text>
											)}
											<RecipeDirections>
												<MDXRenderer>{stepsMdx}</MDXRenderer>
											</RecipeDirections>
											{(notesMdx || sourceMdx || tips.length > 0) && (
												<>
													<Heading level={2}>Notes &amp; tips</Heading>
													<SubrecipesToTry />
													{notesMdx && <MDXRenderer>{notesMdx}</MDXRenderer>}
													{tips.map((tip) => (
														<MDXRenderer key={tip}>{tip}</MDXRenderer>
													))}
													{sourceMdx && (
														<TextContent fontSize="s">
															<MDXRenderer>{sourceMdx}</MDXRenderer>
														</TextContent>
													)}
												</>
											)}
										</Box>
										<Stack gap="s">
											<Collapsible
												label="Explore ingredients"
												id="ingredients-explorer"
											>
												<VisuallyHidden as="h2">
													Ingredients explorer
												</VisuallyHidden>
												<IngredientsExplorer infos={allIngredientsInfo} />
											</Collapsible>
											<Collapsible label="Shopping list β" id="shopping-list">
												<VisuallyHidden as="h2">Shopping list β</VisuallyHidden>
												<ShoppingList recipes={recipeWithSubrecipes} />
											</Collapsible>
										</Stack>
									</Stack>
								</TextContent>
							</Grid>
						</Stack>
						{recipes.length > 0 && (
							<Stack gap="m">
								<Heading level={2}>Recipes with {title.toLowerCase()}</Heading>
								<RecipeList recipes={recipes} />
							</Stack>
						)}
						{relatedRecipes.length > 0 && (
							<Stack gap="m">
								<Heading level={2}>
									More recipes like {title.toLowerCase()}
								</Heading>
								<RecipeList recipes={relatedRecipes} />
							</Stack>
						)}
					</Stack>
				</Page>
			</RecipeContext.Provider>
		</SubrecipesContext.Provider>
	);
}
