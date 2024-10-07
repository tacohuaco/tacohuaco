import startCase from 'lodash/startCase';
import { paramCase } from 'param-case';
import { getCuisineEmoji } from '../util/emojis';
import { Stack } from './Stack';
import { Box } from './Box';
import { VisuallyHidden } from './VisuallyHidden';
import { Tag } from './Tag';

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
							{getCuisineEmoji(cuisine)}
						</Box>
						<Box as="span">
							{startCase(cuisine)} <VisuallyHidden>cuisine</VisuallyHidden>
						</Box>
					</Stack>
				</Tag>
			))}
		</Stack>
	);
}
