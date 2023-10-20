import { type ComponentProps } from 'react';
import {
	Stack,
	Text,
	Link,
	Frame,
	RecipeFlags,
	RecipeTimes,
	HygraphImage,
	Expander,
} from '.';
import type { RecipeFragment } from '../types/Recipe';
import { frame, imageContainer, link } from './RecipeCard.css';

export function RecipeCard({
	vegan,
	vegetarian,
	glutenFree,
	lowGluten,
	dairyFree,
	noAddedSugar,
	margaritasFavorite,
	artemsFavorite,
	images,
	title,
	slug,
	time,
	overnight,
}: RecipeFragment & ComponentProps<typeof Stack>) {
	return (
		<Stack gap="s" direction="column">
			<Link href={`/recipes/${slug}/`} className={link}>
				<Stack gap="s" direction="column">
					<Expander className={imageContainer}>
						<Frame ratio={6 / 9} className={frame}>
							{images.length > 0 && (
								<HygraphImage
									handle={images[0].handle}
									width={700}
									height={700}
									alt=""
								/>
							)}
						</Frame>
					</Expander>
					<Text as="span" variant="card">
						{title}
					</Text>
				</Stack>
			</Link>
			<Stack gap="s" direction="row" alignItems="center">
				<RecipeFlags
					vegan={vegan}
					vegetarian={vegetarian}
					glutenFree={glutenFree}
					lowGluten={lowGluten}
					dairyFree={dairyFree}
					noAddedSugar={noAddedSugar}
					margaritasFavorite={margaritasFavorite}
					artemsFavorite={artemsFavorite}
				/>
				{time && <RecipeTimes time={time} overnight={overnight} size="small" />}
			</Stack>
		</Stack>
	);
}
