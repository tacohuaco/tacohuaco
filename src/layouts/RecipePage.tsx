import React from 'react';
import { Stack, Grid, Heading, Text } from 'tamia';
import { MDXRenderer } from '../components/MDXRenderer';
import { Image } from '../components/Image';
import TextContent from '../components/TextContent';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeDirections from '../components/RecipeDirections';
import Metatags from '../components/Metatags';
import RecipeMeta from '../components/RecipeMeta';
import { SubrecipesContext } from '../components/SubrecipesContext';
import { RecipePageQuery } from '../graphql-types';
import Page from './Page';

type Props = RecipePageQuery['graphCmsRecipe'] & {
	description?: string;
	time?: number;
	yields?: string;
	url: string;
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
	sourceMdx,
	stepsMdx,
	subrecipes,
	tags,
	time,
	title,
	toolsMdx,
	url,
	yields,
}: Props) {
	return (
		<SubrecipesContext.Provider value={subrecipes}>
			<Page url={url}>
				<Metatags
					slug={url}
					title={title}
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
					{description && (
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
								{toolsMdx && (
									<>
										<Heading level={3}>You will need</Heading>
										<MDXRenderer>{toolsMdx}</MDXRenderer>
									</>
								)}
							</RecipeIngredients>
						</TextContent>
						<TextContent>
							<Heading level={2}>Directions</Heading>
							<RecipeDirections>
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
						</TextContent>
					</Grid>
				</Stack>
			</Page>
		</SubrecipesContext.Provider>
	);
}
