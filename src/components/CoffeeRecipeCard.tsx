import { Stack } from './Stack';
import { Text } from './Text';
import { type CoffeeRecipe as CoffeeRecipeType } from '../util/cafe/types';
import { Link } from './Link';
import { Box } from './Box';

type Props = {
	recipe: CoffeeRecipeType;
};

export function CoffeeRecipeCard({ recipe: { name, slug } }: Props) {
	return (
		<Link
			href={`/coffee/${slug}/`}
			css={{
				transitionDuration: 'hover',
				transitionTimingFunction: 'hover',
				transitionProperty: 'color',
			}}
		>
			<Stack gap="s" direction="row" alignItems="center">
				<Box
					as="img"
					src={`/images/coffee/${slug}.svg`}
					width={30}
					height={30}
				/>
				<Text as="span" variant="card">
					{name}
				</Text>
			</Stack>
		</Link>
	);
}
