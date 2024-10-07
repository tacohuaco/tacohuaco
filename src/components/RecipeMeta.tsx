import { Stack } from './Stack';
import { RecipeFlags } from './RecipeFlags';
import { RecipeTimes } from './RecipeTimes';
import { RecipeTags } from './RecipeTags';
import { RecipeCuisines } from './RecipeCuisines';
import type { RecipeFragment } from '../types/Recipe';

type Props = RecipeFragment;

export function RecipeMeta({
	cuisines,
	tags,
	time,
	overnight,
	...flags
}: Props) {
	return (
		<Stack gap="s">
			<Stack
				gap="s"
				direction={{ base: 'column', desktop: 'row' }}
				alignItems={{ base: 'flex-start', desktop: 'center' }}
			>
				<RecipeFlags {...flags} />
				{time && <RecipeTimes time={time} overnight={overnight} />}
			</Stack>
			{(cuisines.length > 0 || tags.length > 0) && (
				<RecipeTags tags={tags}>
					{cuisines.length > 0 && <RecipeCuisines cuisines={cuisines} />}
				</RecipeTags>
			)}
		</Stack>
	);
}
