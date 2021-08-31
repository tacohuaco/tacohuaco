import React from 'react';
import { Box, Stack, Grid, Heading, Text, VisuallyHidden } from 'tamia';
import { MDXRenderer } from '../components/MDXRenderer';
import { Image } from '../components/Image';
import TextContent from '../components/TextContent';
import RecipeIngredients, {
	IngredientItem,
} from '../components/RecipeIngredients';
import RecipeDirections from '../components/RecipeDirections';
import Metatags from '../components/Metatags';
import RecipeMeta from '../components/RecipeMeta';
import { IngredientsExplorer } from '../components/IngredientsExplorer';
import { SubrecipesContext } from '../components/SubrecipesContext';
import { RecipeContext } from '../components/RecipeContext';
import { RecipePageQuery } from '../graphql-types';
import Page from './Page';
import { Ingredient, IngredientInfo } from '../util/olivier';
import { asList } from '../util/client';
import { Collapsible } from '../components/Collapsible';

type Props = RecipePageQuery['graphCmsRecipe'] & {
	description?: string;
	time?: number;
	yields?: string;
	url: string;
	allIngredients: Ingredient[];
	allIngredientsInfo: IngredientInfo[];
};

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
	sourceMdx,
	stepsMdx,
	subrecipes,
	tags,
	time,
	title,
	toolsMdx,
	url,
	warnings,
	yields,
	allIngredients,
	allIngredientsInfo,
}: Props) {
	return (
		<SubrecipesContext.Provider value={subrecipes}>
			<RecipeContext.Provider value={{ ingredients: allIngredients }}>
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
							<TextContent>
								<Heading level={2}>Ingredients</Heading>
								{yields && <Text variant="small">Yields {yields}</Text>}
								<RecipeIngredients>
									<MDXRenderer>{ingredientsMdx}</MDXRenderer>
									{warnings.length > 0 && (
										<>
											<Heading level={3}>Warnings</Heading>
											<ul>
												{warnings.map((warning) => (
													<Text
														key={warning}
														as={IngredientItem}
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
										<RecipeDirections allIngredients={allIngredients}>
											<MDXRenderer>{stepsMdx}</MDXRenderer>
										</RecipeDirections>
										{(notesMdx || sourceMdx) && (
											<>
												<Heading level={2}>Notes</Heading>
												{notesMdx && <MDXRenderer>{notesMdx}</MDXRenderer>}
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
										<IngredientsExplorer
											ingredients={allIngredients}
											infos={allIngredientsInfo}
										/>
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
