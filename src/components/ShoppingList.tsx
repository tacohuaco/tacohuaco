import React from 'react';
import { Heading, Stack } from 'tamia';
import Group from 'react-group';
import { formatOption, printOption, Ingredient, merge } from '../util/olivier';
import { Subrecipe } from '../types/Subrecipe';
import { groupBy, sortBy } from 'lodash';
import {
	GROUPS,
	NO_SHOPPING_INGREDIENTS,
	NO_AMOUNTS_GROUPS,
} from '../util/olivier/langs/en/info';
import {
	DEFAULT_GROUP_NAME,
	GROUP_NAMES,
	GROUP_NAMES_ORDER,
} from '../util/olivier/langs/en/translations';
import { TodoItem } from './TodoItem';

// TODO: Don't show ingredients from linked subrecipes in the shoppping

type GroupName = keyof typeof GROUP_NAMES;

type Props = {
	recipes: readonly Subrecipe[];
};

const getAllSubrecipeIngredients = (
	subrecipes: readonly Subrecipe[]
): readonly Ingredient[] => {
	return subrecipes.flatMap((subrecipe) =>
		subrecipe.allIngredients.flatMap(({ ingredients }) => ingredients)
	);
};

const getIngredientGroup = (ingredient: Ingredient) => {
	const maybeGroup = Object.entries(GROUPS).find(([, names]) =>
		names.find((name) => ingredient.name === name)
	);
	return Array.isArray(maybeGroup) ? maybeGroup[0] : undefined;
};

const groupIngredients = (ingredients: readonly Ingredient[]) => {
	const filteredIngredients = ingredients.filter(
		(x) => NO_SHOPPING_INGREDIENTS.includes(x.name) === false
	);
	const sortedIngredients = sortBy(filteredIngredients, (x) => x.name);
	return groupBy(sortedIngredients, getIngredientGroup);
};

const getGroupName = (group?: string) => {
	return group && group in GROUP_NAMES
		? GROUP_NAMES[group as GroupName]
		: DEFAULT_GROUP_NAME;
};

export function ShoppingList({ recipes }: Props) {
	const allIngredients = merge(getAllSubrecipeIngredients(recipes));
	const groupedIngredients = groupIngredients(allIngredients);
	return (
		<Stack gap="m" direction="column">
			{GROUP_NAMES_ORDER.map((group) => {
				const ingredients = groupedIngredients[group as GroupName];
				if (ingredients === undefined) {
					return null;
				}
				const shouldShowAmount = group
					? NO_AMOUNTS_GROUPS.includes(group) === false
					: true;
				return (
					<form key={group || 'misc'}>
						<Heading level={3}>{getGroupName(group)}</Heading>
						<Stack
							as="fieldset"
							gap="s"
							direction="column"
							m={0}
							sx={{ border: 'none' }}
						>
							{ingredients.map((ingredient) => {
								const { name, amount, suffix, modifier } = printOption(
									formatOption(ingredient)
								);
								return (
									<TodoItem key={`${ingredient.name}/${ingredient.unit}`}>
										<Group separator=" ">
											{shouldShowAmount && amount && <b>{amount}</b>}
											{shouldShowAmount && suffix}
											{modifier}
											{name}
										</Group>
									</TodoItem>
								);
							})}
						</Stack>
					</form>
				);
			})}
		</Stack>
	);
}
