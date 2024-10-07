import { Grid } from './Grid';
import type { RecipeFragment } from '../types/Recipe';
import { RecipeCard } from './RecipeCard';

type Props = {
	recipes: readonly RecipeFragment[];
};

export const RecipeList = ({ recipes }: Props) => (
	<Grid
		as="ul"
		columnGap="m"
		rowGap="l"
		gridTemplateColumns={{
			base: '1fr',
			tablet: '1fr 1fr',
			desktop: '1fr 1fr 1fr',
		}}
	>
		{recipes.map((recipe) => (
			<RecipeCard key={recipe.slug} as="li" {...recipe} />
		))}
	</Grid>
);
