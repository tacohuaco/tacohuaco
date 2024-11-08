import { Stack } from '../components/Stack';
import { Grid } from '../components/Grid';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextContent } from '../components/TextContent';
import { Markdown } from '../components/Markdown';
import { Collapsible } from '../components/Collapsible';
import { VisuallyHidden } from '../components/VisuallyHidden';
import { formatOption } from '../util/olivier';
import type { Recipe, Yields } from '../types/Recipe';
import { asList } from '../util/asList';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeSteps } from './RecipeSteps';
import { IngredientsExplorer } from './IngredientsExplorer';
import { useScale } from '../hooks/useScale';
import { RecipeScale } from './RecipeScale';
import { RecipeChart } from './RecipeChart';

const YieldsText = ({ amount, unit }: Yields) => {
	const { minAmount: printedAmount, unit: printedUnit } = formatOption({
		minAmount: amount,
		maxAmount: amount,
		unit,
		name: '',
	});
	return `Yields ${printedAmount} ${printedUnit}`;
};

export function RecipeBody(recipe: Recipe) {
	console.log('🐿️ recipe', recipe);

	const {
		ingredients,
		notes,
		preconditions,
		chart,
		source,
		steps,
		tips,
		tools,
		warnings,
		yields,
	} = recipe;
	const {
		isScalingEnabled,
		currentAmout,
		scaledIngredients,
		handleLess,
		handleMore,
	} = useScale(recipe);
	return (
		<Grid
			gap="m"
			gridTemplateColumns={{
				base: '1fr',
				tablet: '1.2fr 2.8fr',
				desktop: '1fr 3fr',
			}}
		>
			<Stack as="section" gap="m">
				<Stack
					direction="row"
					gap={{ base: 'm', tablet: 's' }}
					alignItems="center"
				>
					<Heading level={2}>Ingredients</Heading>
					{isScalingEnabled && (
						<div>
							<RecipeScale onLess={handleLess} onMore={handleMore} />
						</div>
					)}
				</Stack>
				<Text variant="italic">
					<YieldsText amount={currentAmout} unit={yields.unit} />
				</Text>
				<RecipeIngredients
					ingredients={scaledIngredients}
					extras={[
						{
							name: 'Warnings',
							items: warnings,
						},
						{
							name: 'You will need',
							items: tools,
						},
					]}
				/>
			</Stack>
			<Stack as="section" gap="l">
				<Stack gap="m">
					<Heading level={2}>Directions</Heading>
					{preconditions.length > 0 && (
						<Text>
							<strong>Before you start:</strong> {asList(preconditions)}.
						</Text>
					)}
					<RecipeSteps steps={steps} ingredients={scaledIngredients} />
				</Stack>
				<Stack gap="m">
					{(notes.length > 0 || tips.length > 0 || source) && (
						<>
							<Heading level={2}>Notes &amp; tips</Heading>
							{notes.map((note) => (
								<TextContent key={note}>
									<Markdown text={note} />
								</TextContent>
							))}
							{tips.map((tip) => (
								<TextContent key={tip}>
									<Markdown text={tip} />
								</TextContent>
							))}
							{source && (
								<TextContent variant="small">
									<Markdown text={source} forceBlock />
								</TextContent>
							)}
						</>
					)}
				</Stack>
				<Collapsible label="Explore ingredients">
					<VisuallyHidden as="h2">Ingredients explorer</VisuallyHidden>
					<IngredientsExplorer ingredients={ingredients} />
				</Collapsible>
				<Collapsible label="Recipe chart β">
					<VisuallyHidden as="h2">Recipe chart β</VisuallyHidden>
					<RecipeChart chart={chart} />
				</Collapsible>
			</Stack>
		</Grid>
	);
}
