import React from 'react';
import { paramCase } from 'param-case';
import { Stack, Box } from 'tamia';
import { getEmojiByNationality } from '../util/emojis';
import Tag from './Tag';

type Props = {
	cuisines: readonly string[];
};

export function RecipeCuisines({ cuisines }: Props) {
	return (
		<Stack gap="s" direction="row">
			{cuisines.map((cuisine) => (
				<Tag key={cuisine} href={`/cuisines/${paramCase(cuisine)}/`}>
					<Stack as="span" gap="xs" direction="row">
						<Box as="span" aria-hidden="true">
							{getEmojiByNationality(cuisine)}
						</Box>
						<Box as="span">{cuisine}</Box>
					</Stack>
				</Tag>
			))}
		</Stack>
	);
}
