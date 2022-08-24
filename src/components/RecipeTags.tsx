import React from 'react';
import { sentenceCase } from 'sentence-case';
import { paramCase } from 'param-case';
import { Stack } from 'tamia';
import { Tag } from './Tag';

type Props = {
	tags?: readonly string[];
};

export function RecipeTags({ tags = [] }: Props) {
	return (
		<Stack gap="s" direction="row">
			{tags.map((tag) => (
				<Tag key={tag} href={`/tags/${paramCase(tag)}/`}>
					{sentenceCase(tag)}
				</Tag>
			))}
		</Stack>
	);
}
