import { Stack } from './Stack';
import { OrderedList, OrderedListItem } from './OrderedList';
import {
	type CoffeeRecipe as CoffeeRecipeType,
	type Step,
	Action,
} from '../util/cafe/types';
import Group from 'react-group';
import { useCoffeeScale } from '../hooks/useCoffeeScale';
import { RecipeScale } from './RecipeScale';
import {
	GRAMS_IN_TABLESPOON_COFFEE_BEANS,
	GRAMS_IN_TABLESPOON_GROUND_COFFEE,
	ONE_CUP_GRAMS,
} from '../util/cafe';
import { TextTypo } from './TextTypo';
import { CoffeeRecipeMeta } from './CoffeeRecipeMeta';

type Props = {
	recipe: CoffeeRecipeType;
};

const roundToTen = (value: number) => Math.floor(value / 10) * 10;

const roundToHalf = (value: number) => Math.round(value * 2) / 2;

const formatDuration = (durationSec: number) => {
	const minutes = Math.trunc(durationSec / 60) % 60;
	const seconds = Math.trunc(durationSec) % 60;
	if (minutes) {
		return `${minutes} minutes`;
	}
	if (seconds) {
		return `${seconds} seconds`;
	}
	return '';
};

const getCoffeeAmountInGrams = (ratio: number, waterAmount: number) =>
	Math.floor(waterAmount / ratio);

const getCoffeeBeansAmountInTablespoons = (coffeeInGrams: number) =>
	roundToHalf(coffeeInGrams / GRAMS_IN_TABLESPOON_COFFEE_BEANS);

const getGroundCoffeeAmountInTablespoons = (coffeeInGrams: number) =>
	roundToHalf(coffeeInGrams / GRAMS_IN_TABLESPOON_GROUND_COFFEE);

const getWaterAmount = (step: Step, currentAmount: number) => {
	if (step.action !== Action.Pour) {
		return '';
	}

	if (step.amount === null) {
		return 'the rest';
	}

	return `${roundToTen(currentAmount * step.amount)} g`;
};

const getStepText = (
	step: Step,
	recipe: CoffeeRecipeType,
	currentAmount: number
) => {
	switch (step.action) {
		case Action.Rinse: {
			return <>Rinse the filter, and discard the dirty water.</>;
		}
		case Action.Pour: {
			return (
				<>
					Pour <b>{getWaterAmount(step, currentAmount)}</b> of water.
				</>
			);
		}
		case Action.Shake: {
			return <>Shake the thing.</>;
		}
		case Action.Custom: {
			return step.message;
		}
	}
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
	const { isScalingEnabled, currentAmount, handleLess, handleMore } =
		useCoffeeScale(recipe);

	// Special case for one cup if the recipe has it
	const steps =
		recipe.stepsOneCup && currentAmount <= ONE_CUP_GRAMS
			? recipe.stepsOneCup
			: recipe.steps;

	if (steps.length === 0) {
		return null;
	}

	const coffeeInGrams = getCoffeeAmountInGrams(recipe.ratio, currentAmount);

	return (
		<Stack key={recipe.name} gap="m">
			<Stack gap="l">
				<CoffeeRecipeMeta
					coffeeAmount={getCoffeeAmountInGrams(recipe.ratio, currentAmount)}
					waterAmount={currentAmount}
				>
					{isScalingEnabled && (
						<RecipeScale onLess={handleLess} onMore={handleMore} />
					)}
				</CoffeeRecipeMeta>
				<OrderedList maxWidth="35rem">
					<OrderedListItem>
						<Stack gap="xs">
							<TextTypo>
								{recipe.temperature === 100 ? (
									<>Boil water.</>
								) : (
									<>
										Heat water to{' '}
										<TextTypo as="b">{`${recipe.temperature}C`}</TextTypo>.
									</>
								)}
							</TextTypo>
							{recipe.temperature < 100 && (
								<TextTypo>
									(If your kettle doesn’t have a temperature setting, let the
									water cool down for 30 seconds before brewing coffee.)
								</TextTypo>
							)}
						</Stack>
					</OrderedListItem>
					<OrderedListItem>
						<TextTypo>
							Grind <b>{coffeeInGrams} g</b> of coffee ({recipe.grind}).
						</TextTypo>
						<TextTypo>
							(It’s roughly {getCoffeeBeansAmountInTablespoons(coffeeInGrams)}{' '}
							tablespoons of coffee beans or{' '}
							{getGroundCoffeeAmountInTablespoons(coffeeInGrams)} tablespoons of
							ground coffee.)
						</TextTypo>
					</OrderedListItem>
					{steps.map((step, index) => (
						<OrderedListItem key={index} pause={(step.time ?? 0) > 30}>
							<TextTypo>
								<Group>
									{getStepText(step, recipe, currentAmount)}
									{getWaitText(step)}
								</Group>
							</TextTypo>
						</OrderedListItem>
					))}
					<OrderedListItem>
						<TextTypo>Enjoy your coffee! ☕️</TextTypo>
					</OrderedListItem>
				</OrderedList>
			</Stack>
		</Stack>
	);
}
