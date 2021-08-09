import React from 'react';
import { Stack, Text, Image, Frame } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import { getImageUrl } from '../util/client';
import { RecipeMeta } from '../types/Recipe';
import RecipeFlags from './RecipeFlags';

export default function RecipeCard({
	flags,
	margaritasFavorite,
	artemsFavorite,
	images,
	time,
	title,
	slug,
}: RecipeMeta) {
	return (
		<Stack gap="s" direction="column">
			<Link href={slug}>
				<Stack gap="s" direction="column">
					<Frame ratio={6 / 9} bg="light">
						{images.length > 0 && (
							<Image
								src={getImageUrl(images[0].url, { width: 700, height: 700 })}
								alt=""
							/>
						)}
					</Frame>
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
