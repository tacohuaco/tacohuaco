import { Text } from './Text';
import { Box } from './Box';
import { CuisineName } from './CuisinesName';
import { Stack } from './Stack';
import { kebabCase } from 'change-case';
import { QuotedLink } from './QuotedLink';

type CuisinesLinksProps = {
	cuisines: [string, number][];
};

export function CuisinesLinks({ cuisines }: CuisinesLinksProps) {
	return (
		<Stack as="ul" gap="s">
			{cuisines.map(([cuisine, count]) => (
				<Box key={cuisine} as="li">
					<QuotedLink href={`/cuisines/${kebabCase(cuisine)}/`}>
						<Stack as="span" gap="xs" direction="row">
							<CuisineName cuisine={cuisine} underline />
							<Text as="span" color="dim">
								{count}
							</Text>
						</Stack>
					</QuotedLink>
				</Box>
			))}
		</Stack>
	);
}
