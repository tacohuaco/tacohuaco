import { Stack, Heading, Text } from '.';
import {
	type CoffeeRecipe as CoffeeRecipeType,
	type Step,
	Action,
} from '../util/cafe';
import Group from 'react-group';

// HACK: Importing this library breaks the build on Netlify
// https://github.com/sindresorhus/parse-ms
function parseMilliseconds(milliseconds: number) {
	return {
		days: Math.trunc(milliseconds / 86400000),
		hours: Math.trunc(milliseconds / 3600000) % 24,
		minutes: Math.trunc(milliseconds / 60000) % 60,
		seconds: Math.trunc(milliseconds / 1000) % 60,
		milliseconds: Math.trunc(milliseconds) % 1000,
		microseconds: Math.trunc(milliseconds * 1000) % 1000,
		nanoseconds: Math.trunc(milliseconds * 1e6) % 1000,
	};
}

type Props = {
	recipe: CoffeeRecipeType;
};

const formatDuration = (durationSec: number) => {
	const { minutes, seconds } = parseMilliseconds(durationSec * 1000);
	if (minutes) {
		return `${minutes} minutes`;
	}
	if (seconds) {
		return `${seconds} seconds`;
	}
	return '';
};

const getCoffeAmount = (ratio: number, waterAmount: number) =>
	Math.floor(waterAmount / ratio);

const getWaterAmount = (step: Step, recipe: CoffeeRecipeType) => {
	if (step.action !== Action.Pour) {
		return '';
	}

	if (step.amount === null) {
		return 'the rest';
	}

	if (typeof step.amount === 'number') {
		return `${step.amount} g`;
	}

	if (typeof step.amount === 'function') {
		return `${Math.floor(
			step.amount({ amount: recipe.defaultAmount, ratio: recipe.ratio })
		)} g`;
	}

	return '';
};

const getStepText = (step: Step, recipe: CoffeeRecipeType) => {
	switch (step.action) {
		case Action.Pour:
			return (
				<>
					Pour <b>{getWaterAmount(step, recipe)}</b> of the water.
				</>
			);
		case Action.Shake:
			return <>Shake the thing.</>;
		case Action.Custom:
			return step.message;
	}

	return '';
};

const getWaitText = (step: Step) => {
	if (step.time) {
		return (
			<>
				Wait <b>{formatDuration(step.time)}</b>.
			</>
		);
	}
	return null;
};

export function CoffeeRecipe({ recipe }: Props) {
	return (
		<Stack key={recipe.name} gap="m">
			<Stack gap="s">
				<Heading level={2}>{recipe.name}</Heading>
				<Text variant="italic">Brew coffee using {recipe.brewer}</Text>
				<Stack gap="xxs">
					<Text variant="small">
						<b>{getCoffeAmount(recipe.ratio, recipe.defaultAmount)} g</b> of
						coffee for <b>{recipe.defaultAmount} g</b> of water at{' '}
						{recipe.temperature}&#8202;˚C
					</Text>
					<Text variant="small">{recipe.grind}</Text>
				</Stack>
				<Stack gap="m" as="ol">
					{recipe.steps.map((step, index) => (
						<Stack key={index} gap="s">
							<Text as="li">
								<Group>
									{getStepText(step, recipe)}
									{getWaitText(step)}
								</Group>
							</Text>
						</Stack>
					))}
				</Stack>
			</Stack>
		</Stack>
	);
}
