import { kebabCase } from 'change-case';
import { Stack } from './Stack';
import { Tag } from './Tag';
import { CuisineName } from './CuisinesName';

type Props = {
	cuisines: readonly string[];
};

export function RecipeCuisines({ cuisines }: Props) {
	return (
		<Stack gap="s" direction="row">
			{cuisines.map((cuisine) => (
				<Tag key={cuisine} href={`/cuisines/${kebabCase(cuisine)}/`}>
					<CuisineName cuisine={cuisine} />
				</Tag>
			))}
		</Stack>
	);
}
