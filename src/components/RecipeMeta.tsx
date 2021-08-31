import React from 'react';
import { Stack } from 'tamia';
import { Flags } from '../types/Flags';
import RecipeFlags from './RecipeFlags';
import RecipeTags from './RecipeTags';
import RecipeTimes from './RecipeTimes';
import { RecipeCuisines } from './RecipeCuisines';

type Props = {
	flags: Flags;
	margaritasFavorite?: boolean;
	artemsFavorite?: boolean;
	cuisines: string[];
	tags: string[];
	time?: number;
	overnight?: boolean;
};

export default function RecipeMeta({
	flags,
	margaritasFavorite,
	artemsFavorite,
	cuisines,
	tags,
	time,
	overnight,
}: Props) {
	return (
		<Stack gap="xs">
			<Stack gap="m" direction={['column', 'row']}>
				<RecipeFlags
					flags={flags}
					margaritasFavorite={margaritasFavorite}
					artemsFavorite={artemsFavorite}
				/>
				{(cuisines || tags.length > 0) && (
					<Stack gap="s" direction="row">
						{cuisines.length > 0 && <RecipeCuisines cuisines={cuisines} />}
						<RecipeTags tags={tags} />
					</Stack>
				)}
			</Stack>
			{time && <RecipeTimes time={time} overnight={overnight} />}
		</Stack>
	);
}
