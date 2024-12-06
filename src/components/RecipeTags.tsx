import { type ReactNode } from 'react';
import { kebabCase } from 'change-case';
import { Stack } from './Stack';
import { Tag } from './Tag';
import { formatTagName } from '../util/formatTagName';

type Props = {
	tags?: readonly string[];
	children?: ReactNode;
};

export function RecipeTags({ tags = [], children }: Props) {
	return (
		<Stack gap="s" direction="row" flexWrap="wrap">
			{children}
			{tags.map((tag) => (
				<Tag key={tag} href={`/tags/${kebabCase(tag)}/`}>
					{formatTagName(tag)}
				</Tag>
			))}
		</Stack>
	);
}
