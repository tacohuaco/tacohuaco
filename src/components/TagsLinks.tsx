import { Text } from './Text';
import { Box } from './Box';
import { Stack } from './Stack';
import { kebabCase } from 'change-case';
import { QuotedLink } from './QuotedLink';
import { formatTagName } from '../util/formatTagName';

type TagsLinksProps = {
	tags: [string, number][];
	columns?: number;
};

export function TagsLinks({ tags, columns = 1 }: TagsLinksProps) {
	return (
		<Box as="ul" rowGap="s" columnGap="xl" css={{ columns }}>
			{tags.map(([tag, count]) => (
				<Box key={tag} as="li">
					<QuotedLink href={`/tags/${kebabCase(tag)}/`}>
						<Stack as="span" gap="xs" direction="row">
							<Text as="u">{formatTagName(tag)}</Text>
							<Text as="span" color="dim">
								{count}
							</Text>
						</Stack>
					</QuotedLink>
				</Box>
			))}
		</Box>
	);
}
