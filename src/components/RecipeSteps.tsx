import {
	OrderedList,
	OrderedListItem,
	Stack,
	Heading,
	Markdown,
	Link,
} from '.';
import { formatOption, printOption } from '../util/olivier';
import type {
	IngredientsSection,
	RecipeIngredient,
	Step,
	StepsSection,
} from '../types/Recipe';

// TODO: Responsive font size fontSize={['l', 'l', 'l', 'm']}

type Props = {
	steps: StepsSection[];
	ingredients: IngredientsSection[];
};

function findIngredient(
	ingredients: RecipeIngredient[],
	name: string,
	modifier?: string
) {
	return (
		ingredients.find((x) => x.name === name && x.modifier === modifier) ||
		// Fallback to search by name, without modifier
		ingredients.find((x) => x.name === name) ||
		// Fallback to search by partial name to catch generic names like "sugar" or "flour"
		ingredients.find((x) => x.name.endsWith(name))
	);
}

const IngredientAmount = ({
	ingredients,
	name,
	modifier,
}: {
	ingredients: RecipeIngredient[];
	name: string;
	modifier?: string;
}) => {
	const ingredient = findIngredient(ingredients, name, modifier);

	if (!ingredient) {
		return (
			<b style={{ color: 'red' }}>
				ingredient not found: {modifier} {name}
			</b>
		);
	}
	const printed = printOption(formatOption(ingredient));
	return (
		<nobr>
			<em>{printed.amount}</em> {printed.suffix} {printed.modifier}{' '}
			{printed.name}
		</nobr>
	);
};

function StepItem({
	text,
	pause,
	ingredients,
}: Step & { ingredients: RecipeIngredient[] }) {
	const markdownOverrides = {
		a: {
			component: Link,
		},
		Ingredient: {
			component: IngredientAmount,
			props: { ingredients },
		},
	};
	return (
		<OrderedListItem pause={pause}>
			<Markdown text={text} overrides={markdownOverrides} />
		</OrderedListItem>
	);
}

export function RecipeSteps({ steps, ingredients }: Props) {
	return (
		<Stack gap="m">
			{steps.length !== ingredients.length && (
				<p style={{ color: 'red' }}>
					Number of sections of ingredients and steps don’t match:{' '}
					{steps.length} vs. {ingredients.length}.
				</p>
			)}
			{steps.map((section, index) => {
				if (section.steps.length === 0) {
					return null;
				}

				const sectionIngredients = ingredients[index]?.ingredients.flat(1);
				return (
					<Stack key={section.name} gap="m">
						{section.name && <Heading level={3}>{section.name}</Heading>}
						<OrderedList>
							{section.steps.map((step) => (
								<StepItem
									key={step.text}
									{...step}
									ingredients={sectionIngredients}
								/>
							))}
						</OrderedList>
					</Stack>
				);
			})}
		</Stack>
	);
}
