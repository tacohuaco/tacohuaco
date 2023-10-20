import { Grid } from '.';
import type { RecipeFragment } from '../types/Recipe';
import { RecipeCard } from './RecipeCard';
import { grid } from './RecipeList.css';

type Props = {
	recipes: readonly RecipeFragment[];
};

export const RecipeList = ({ recipes }: Props) => (
	<Grid as="ul" columnGap="m" rowGap="l" className={grid}>
		{recipes.map((recipe) => (
			<RecipeCard key={recipe.slug} as="li" {...recipe} />
		))}
	</Grid>
);
