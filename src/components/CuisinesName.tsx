import startCase from 'lodash/startCase';
import { getCuisineEmoji } from '../util/emojis';
import { Stack } from './Stack';
import { Box } from './Box';
import { VisuallyHidden } from './VisuallyHidden';

type Props = {
	cuisine: string;
	underline?: boolean;
};

export function CuisineName({ cuisine, underline }: Props) {
	return (
		<Stack as="span" gap="xs" direction="row" display="inline-flex">
			<Box as="span" aria-hidden="true">
				{getCuisineEmoji(cuisine)}
			</Box>
			<Box as={underline ? 'u' : 'span'}>
				{startCase(cuisine)} <VisuallyHidden>cuisine</VisuallyHidden>
			</Box>
		</Stack>
	);
}
