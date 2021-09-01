import React from 'react';
import { graphql } from 'gatsby';
import { Box, Stack, Text, Image, Frame } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import { getImageUrl } from '../util/client';
import { RecipeMetaFragment } from '../graphql-types';
import RecipeFlags from './RecipeFlags';

export default function RecipeCard({
	flags,
	margaritasFavorite,
	artemsFavorite,
	images,
	title,
	slug,
}: RecipeMetaFragment) {
	return (
		<Stack gap="s" direction="column">
			<Link href={`/recipes/${slug}/`}>
				<Stack gap="s" direction="column">
					<Box>
						<Box mx={['-m', 0]}>
							<Frame ratio={6 / 9} bg="light">
								{images.length > 0 && (
									<Image
										src={getImageUrl(images[0].url, {
											width: 700,
											height: 700,
										})}
										alt=""
									/>
								)}
							</Frame>
						</Box>
					</Box>
					<Text fontSize="xl" fontFamily="heading" color="inherit" as="p">
						{title}
					</Text>
				</Stack>
			</Link>
			<RecipeFlags
				flags={flags}
				margaritasFavorite={margaritasFavorite}
				artemsFavorite={artemsFavorite}
			/>
		</Stack>
	);
}

export const recipeMetaFragment = graphql`
	fragment RecipeMeta on GraphCMS_Recipe {
		flags {
			vegan
			vegetarian
			glutenFree
			dairyFree
			noAddedSugar
		}
		margaritasFavorite
		artemsFavorite
		time
		title
		seasons
		slug
		images {
			handle
			height
			url
			width
		}
	}
`;
