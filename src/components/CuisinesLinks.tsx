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
		<Box
			as="ul"
			columnGap={{ base: 'm', tablet: 'l', desktop: 'xl' }}
			css={{ columns: { base: 2, tablet: 3, desktop: 4 } }}
		>
			{cuisines.map(([cuisine, count]) => (
				<Box key={cuisine} as="li" mb="s">
					<QuotedLink
						href={`/cuisines/${kebabCase(cuisine)}/`}
						display="block"
						width="fit-content"
					>
						<Stack as="span" gap="xs" direction="row">
							<CuisineName cuisine={cuisine} underline />
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
