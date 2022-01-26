import React, { useState } from 'react';
import { Box, Stack, Grid, Heading, Text, VisuallyHidden } from 'tamia';
import { MDXRenderer } from '../components/MDXRenderer';
import { Image } from '../components/Image';
import TextContent from '../components/TextContent';
import RecipeIngredients, {
	IngredientListItem,
} from '../components/RecipeIngredients';
import RecipeDirections from '../components/RecipeDirections';
import Metatags from '../components/Metatags';
import RecipeMeta from '../components/RecipeMeta';
import { IngredientsExplorer } from '../components/IngredientsExplorer';
import {
	getIngredientsBySlug,
	SubrecipesContext,
} from '../components/SubrecipesContext';
import { RecipeContext } from '../components/RecipeContext';
import { GraphCms_Recipe } from '../graphql-types';
import Page from './Page';
import { scale, IngredientInfo } from '../util/olivier';
import { asList } from '../util/client';
import { Collapsible } from '../components/Collapsible';
import { RecipeYields } from '../components/RecipeYields';
import { IngredientsWithMeta } from '../types/IngredientsWithMeta';
import { Subrecipe } from '../types/Subrecipe';
import { Asset } from '../types/Asset';

type Props = Pick<
	GraphCms_Recipe,
	| 'artemsFavorite'
	| 'cuisines'
	| 'description'
	| 'descriptionMdx'
	| 'flags'
	| 'ingredients'
	| 'ingredientsMdx'
	| 'margaritasFavorite'
	| 'notesMdx'
	| 'overnight'
	| 'preconditions'
	| 'slug'
	| 'sourceMdx'
	| 'stepsMdx'
	| 'tags'
	| 'time'
	| 'title'
	| 'tips'
	| 'toolsMdx'
	| 'warnings'
	| 'yields'
> & {
	allIngredients: IngredientsWithMeta[];
	allIngredientsInfo: IngredientInfo[];
	description?: string;
	images: Asset[];
	subrecipes: Subrecipe[];
	time?: number;
	url: string;
	yields?: string;
};

// TODO: Try to use Olivier parser
const parseYields = (yields = '') => {
	const match = yields.match(/(\d+)\s+(\w+)/);
	if (!match) {
		return { amount: 0, unit: yields };
	}

	return {
		amount: Number(match[1]),
		unit: match[2],
	};
};

const getRatio = (amount: number, nextAmout: number) => {
	return nextAmout / amount;
};

const getPrevAmount = (amount: number) => {
	if (amount > 100) {
		return amount - 100;
	}
	if (amount > 12) {
		return amount - 10;
	}
	if (amount === 1) {
		return amount;
	}
	return amount - 1;
};

const getNextAmount = (amount: number) => {
	if (amount <= 12) {
		return amount + 1;
	}
	if (amount <= 100) {
		return amount + 10;
	}
	return amount + 100;
};

const scaleAllIngredients = (
	allIngredients: IngredientsWithMeta[],
	amount: number,
	currentAmout: number
) =>
	allIngredients.map((x) => ({
		...x,
		ingredients: scale(x.ingredients, getRatio(amount, currentAmout)),
	}));

export default function RecipePage({
	artemsFavorite,
	cuisines,
	description,
	descriptionMdx,
	flags,
	images,
	ingredientsMdx,
	margaritasFavorite,
	notesMdx,
	overnight,
	preconditions,
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
}: Props) {
	const { amount, unit } = parseYields(yields);
	const [currentAmout, setCurrentAmout] = useState(amount);

	const recipeIngredients = getIngredientsBySlug(allIngredients, slug);
	const scaledRecipeIngredients = scale(
		recipeIngredients,
		getRatio(amount, currentAmout)
	);
	const scaledSubrecipes = subrecipes.map((x) => ({
		...x,
		allIngredients: scaleAllIngredients(x.allIngredients, amount, currentAmout),
	}));

	return (
		<SubrecipesContext.Provider value={scaledSubrecipes}>
			<RecipeContext.Provider
				value={{ slug, ingredients: scaledRecipeIngredients }}
			>
				<Page url={url}>
					<Metatags
						slug={url}
						title={`${title} recipe`}
						description={description}
						images={images}
					/>
					<Stack as="main" gap="l">
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
						{images.length > 0 && (
							<Image
								image={images[0]}
								alt=""
								maxWidth={1026}
								transforms={['quality=value:75']}
								withWebp
							/>
						)}
						<Grid gridGap="m" gridTemplateColumns={['1fr', '1fr', '1fr 3fr']}>
							<Stack gap="m">
								<Heading level={2}>Ingredients</Heading>
								{yields && (
									<Box>
										<RecipeYields
											amount={currentAmout}
											unit={unit}
											onLess={() => setCurrentAmout((x) => getPrevAmount(x))}
											onMore={() => setCurrentAmout((x) => getNextAmount(x))}
										/>
									</Box>
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
									<Collapsible
										label="Explore ingredients"
										id="ingredients-explorer"
									>
										<VisuallyHidden as="h2">
											Ingredients explorer
										</VisuallyHidden>
										<IngredientsExplorer infos={allIngredientsInfo} />
									</Collapsible>
								</Stack>
							</TextContent>
						</Grid>
					</Stack>
				</Page>
			</RecipeContext.Provider>
		</SubrecipesContext.Provider>
	);
}
