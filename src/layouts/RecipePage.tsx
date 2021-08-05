import React from 'react';
import Image from '@graphcms/react-image';
import { Stack, Grid, Heading, Text } from 'tamia';
import { Flags } from '../types/Flags';
import { Image as ImageType } from '../types/Image';
import { MDXRenderer } from '../components/MDXRenderer';
import TextContent from '../components/TextContent';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeDirections from '../components/RecipeDirections';
import Subscription from '../components/Subscription';
import Metatags from '../components/Metatags';
import RecipeMeta from '../components/RecipeMeta';
import Page from './Page';

type Props = {
	artemsFavorite?: boolean;
	cuisines: string[];
	description?: string;
	descriptionMdx: string;
	flags: Flags;
	ingredientsMdx: string;
	margaritasFavorite?: boolean;
	overnight?: boolean;
	yields?: string;
	related: any[];
	stepsMdx: string;
	tags: string[];
	time?: number;
	title: string;
	url: string;
	images: ImageType[];
};

export default function RecipePage({
	artemsFavorite,
	cuisines,
	description,
	descriptionMdx,
	flags,
	ingredientsMdx,
	margaritasFavorite,
	overnight,
	yields,
	related,
	stepsMdx,
	tags,
	time,
	title,
	url,
	images,
}: Props) {
	return (
		<Page url={url}>
			<Metatags
				slug={url}
				title={title}
				description={description}
				images={images}
			/>
			<Stack gap="xl">
				<Stack as="main" gap="m">
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
							</RecipeIngredients>
						</TextContent>
						<TextContent>
							<Heading level={2}>Directions</Heading>
							<RecipeDirections>
								<MDXRenderer>{stepsMdx}</MDXRenderer>
							</RecipeDirections>
						</TextContent>
					</Grid>
				</Stack>
				<Stack gap="l">
					<aside aria-label="Newsletter">
						<Subscription />
					</aside>
				</Stack>
			</Stack>
		</Page>
	);
}
