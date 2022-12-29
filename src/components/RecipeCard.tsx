import React, { ComponentProps } from 'react';
import { graphql } from 'gatsby';
import { Box, Stack, Text, Image, Frame } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import { getImageUrl } from '../util/client';
import { RecipeFlags } from './RecipeFlags';
import { RecipeTimes } from './RecipeTimes';

export const GatsbyLink = Box.withComponent(Link);

export function RecipeCard({
	flags,
	margaritasFavorite,
	artemsFavorite,
	images,
	title,
	slug,
	time,
	overnight,
	...rest
}: Queries.RecipeMetaFragment & ComponentProps<typeof Stack>) {
	return (
		<Stack {...rest} gap="s" direction="column">
			<GatsbyLink
				href={`/recipes/${slug}/`}
				sx={{
					transition: 'hover',
					transitionProperty: 'color',
					':hover .RecipeCard__imageContainer': {
						boxShadow: [null, 'input'],
						transition: 'hover',
						transitionProperty: 'box-shadow',
						willChange: 'box-shadow',
					},
				}}
			>
				<Stack gap="s" direction="column">
					<Box>
						<Box mx={['-m', 0]} className="RecipeCard__imageContainer">
							<Frame ratio={6 / 9} sx={{ bg: 'light' }}>
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
					<Text
						as="p"
						sx={{ fontSize: 'xl', fontFamily: 'heading', color: 'inherit' }}
					>
						{title}
					</Text>
				</Stack>
			</GatsbyLink>
			<Stack gap="s" direction="row" alignItems="center">
				<RecipeFlags
					flags={flags}
					margaritasFavorite={margaritasFavorite}
					artemsFavorite={artemsFavorite}
				/>
				{time && <RecipeTimes time={time} overnight={overnight} size="small" />}
			</Stack>
		</Stack>
	);
}

export const recipeMetaFragment = graphql`
	fragment RecipeMeta on GraphCMS_Recipe {
		allIngredients {
			ingredients {
				name
			}
		}
		artemsFavorite
		createdAt
		cuisines
		flags {
			vegan
			vegetarian
			glutenFree
			lowGluten
			dairyFree
			noAddedSugar
		}
		images {
			handle
			height
			url
			width
		}
		keywordsList
		margaritasFavorite
		overnight
		seasons
		slug
		time
		title
		tags
	}
`;

export const allIngredientsFragment = graphql`
	fragment AllIngredients on IngredientsJson {
		slug
		ingredients {
			name
			minAmount
			maxAmount
			unit
			modifier
			comment
		}
	}
`;
