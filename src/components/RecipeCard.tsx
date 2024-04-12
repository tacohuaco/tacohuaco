import { type ElementType } from 'react';
import {
	Text,
	Link,
	Frame,
	RecipeFlags,
	RecipeTimes,
	HygraphImage,
	Expander,
} from '.';
import { Stack, type StackProps } from './Stack';
import type { RecipeFragment } from '../types/Recipe';

export function RecipeCard<C extends ElementType = 'div'>({
	as,
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
}: RecipeFragment & StackProps<C>) {
	return (
		<Stack as={as ?? 'div'} gap="s" direction="column">
			<Link
				href={`/recipes/${slug}/`}
				css={{
					transitionDuration: 'hover',
					transitionTimingFunction: 'hover',
					transitionProperty: 'color',
				}}
			>
				<Stack gap="s" direction="column">
					<Expander
						css={{
							tablet: {
								'a:hover &': {
									boxShadow: 'input',
									transitionDuration: 'hover',
									transitionTimingFunction: 'hover',
									transitionProperty: 'box-shadow',
									willChange: 'box-shadow',
								},
							},
						}}
					>
						<Frame aspectRatio="9/6" bg="light">
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
