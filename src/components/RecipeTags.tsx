import React, { ReactNode } from 'react';
import { sentenceCase } from 'sentence-case';
import { paramCase } from 'param-case';
import { Stack } from 'tamia';
import { Tag } from './Tag';

type Props = {
	tags?: readonly string[];
	children?: ReactNode;
};

export function RecipeTags({ tags = [], children }: Props) {
	return (
		<Stack gap="s" direction="row" flexWrap="wrap">
			{children}
			{tags.map((tag) => (
				<Tag key={tag} href={`/tags/${paramCase(tag)}/`}>
					{sentenceCase(tag)}
				</Tag>
			))}
		</Stack>
	);
}
