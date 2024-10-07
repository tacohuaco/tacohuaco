import { Text } from './Text';
import { Link } from './Link';
import { Stack } from './Stack';
import { Heading } from './Heading';
import { List, ListItem } from './List';
import { Markdown } from './Markdown';
import { formatOption, printOption } from '../util/olivier';
import Group from 'react-group';
import type { IngredientsSection, RecipeIngredient } from '../types/Recipe';

export interface ExtraSection {
	name: string;
	items: string[];
}

type Props = {
	ingredients: IngredientsSection[];
	extras: ExtraSection[];
};

const IngredientName = ({
	ingredient,
	printName,
}: {
	ingredient: RecipeIngredient;
	printName?: string;
}) => {
	const name = (
		<>
			{ingredient.modifier} {printName}
		</>
	);
	if (ingredient.subrecipeSlug) {
		return <Link href={`/recipes/${ingredient.subrecipeSlug}/`}>{name}</Link>;
	} else {
		return <>{name}</>;
	}
};

function IngredientItem({ options }: { options: RecipeIngredient[] }) {
	const comments = options.map((x) => x.comment);
	return (
		<ListItem>
			<Group
				separator={
					<>
						{' '}
						<i>or</i>{' '}
					</>
				}
			>
				{options.map((option, index) => {
					const { name, amount, suffix } = printOption(formatOption(option));
					const shouldShowAmount =
						index === 0 ||
						option.minAmount !== options[0].minAmount ||
						option.maxAmount !== options[0].maxAmount;
					return (
						<Group key={name} separator=" ">
							{shouldShowAmount && <b>{amount}</b>}
							{shouldShowAmount && suffix}
							<IngredientName ingredient={option} printName={name} />
						</Group>
					);
				})}
			</Group>
			{comments.length > 0 && (
				<Text as="div" variant="italic">
					{comments}
				</Text>
			)}
		</ListItem>
	);
}

export function RecipeIngredients({ ingredients, extras }: Props) {
	return (
		<Stack gap="l">
			{ingredients.map((section) => {
				if (section.ingredients.length === 0) {
					return null;
				}

				return (
					<Stack key={section.name} gap="m">
						{section.name && <Heading level={3}>{section.name}</Heading>}
						<List>
							{section.ingredients.map((options) => (
								<IngredientItem key={options[0].name} options={options} />
							))}
						</List>
					</Stack>
				);
			})}
			{extras.map(
				(section) =>
					section.items.length > 0 && (
						<Stack key={section.name} gap="m">
							<Heading level={3}>{section.name}</Heading>
							<List>
								{section.items.map((item) => (
									<ListItem key={item}>
										<Markdown text={item} />
									</ListItem>
								))}
							</List>
						</Stack>
					)
			)}
		</Stack>
	);
}
