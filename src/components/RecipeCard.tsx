import { type ElementType } from 'react';
import { Text } from './Text';
import { Link } from './Link';
import { Frame } from './Frame';
import { RecipeFlags } from './RecipeFlags';
import { RecipeTimes } from './RecipeTimes';
import { HygraphImage } from './HygraphImage';
import { Expander } from './Expander';
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
	favorite,
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
									width={480}
									height={480}
									quality={30}
									alt=""
									loading="lazy"
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
					favorite={favorite}
					hasLinks={false}
				/>
				{time && <RecipeTimes time={time} overnight={overnight} size="small" />}
			</Stack>
		</Stack>
	);
}
