import React, { ReactNode } from 'react';
import { sentenceCase } from 'sentence-case';
import { paramCase } from 'param-case';
import { Flex } from 'tamia';
import { Tag } from './Tag';

type Props = {
	tags?: readonly string[];
	children?: ReactNode;
};

export function RecipeTags({ tags = [], children }: Props) {
	return (
		<Flex gap="s" flexWrap="wrap">
			{children}
			{tags.map((tag) => (
				<Tag key={tag} href={`/tags/${paramCase(tag)}/`}>
					{sentenceCase(tag)}
				</Tag>
			))}
		</Flex>
	);
}
