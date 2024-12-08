import { Text } from './Text';
import { Box } from './Box';
import { Stack } from './Stack';
import { kebabCase } from 'change-case';
import { QuotedLink } from './QuotedLink';
import { formatTagName } from '../util/formatTagName';

type TagsLinksProps = {
	tags: [string, number][];
};

export function TagsLinks({ tags }: TagsLinksProps) {
	return (
		<Box
			as="ul"
			columnGap={{ base: 'm', tablet: 'l', desktop: 'xl' }}
			css={{ columns: { base: 2, tablet: 3, desktop: 4 } }}
		>
			{tags.map(([tag, count]) => (
				<Box key={tag} as="li" mb="s">
					<QuotedLink
						href={`/tags/${kebabCase(tag)}/`}
						display="block"
						width="fit-content"
					>
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
