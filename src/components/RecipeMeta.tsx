import React from 'react';
import { Stack } from 'tamia';
import { RecipeFlags } from './RecipeFlags';
import { RecipeTags } from './RecipeTags';
import { RecipeTimes } from './RecipeTimes';
import { RecipeCuisines } from './RecipeCuisines';

type Props = {
	flags: Queries.FlagsJson;
	margaritasFavorite?: boolean;
	artemsFavorite?: boolean;
	cuisines: readonly string[];
	tags: readonly string[];
	time?: number;
	overnight?: boolean;
};

export function RecipeMeta({
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
			<Stack gap="m" direction={['column', 'column', 'row']}>
				<RecipeFlags
					flags={flags}
					margaritasFavorite={margaritasFavorite}
					artemsFavorite={artemsFavorite}
				/>
				{(cuisines.length > 0 || tags.length > 0) && (
					<RecipeTags tags={tags}>
						{cuisines.length > 0 && <RecipeCuisines cuisines={cuisines} />}
					</RecipeTags>
				)}
			</Stack>
			{time && <RecipeTimes time={time} overnight={overnight} />}
		</Stack>
	);
}
