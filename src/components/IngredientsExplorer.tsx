import React from 'react';
import { Ingredient, IngredientInfo, IngredientKind } from '../util/olivier';

type Props = {
	ingredients: Ingredient[];
	infos: IngredientInfo[];
};

const KINDS: Record<IngredientKind, string> = {
	[IngredientKind.Vegan]: 'Vegan',
	[IngredientKind.Vegetarian]: 'Vegetarian',
	[IngredientKind.Poultry]: 'Poultry',
	[IngredientKind.Fish]: 'Fish',
	[IngredientKind.Meat]: 'Meat',
	[IngredientKind.Unknown]: 'Unknown',
};

export function IngredientsExplorer({ ingredients, infos }: Props) {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Kind</th>
					<th>Has gluten</th>
					<th>Has diary</th>
					<th>Has sugar</th>
				</tr>
			</thead>
			<tbody>
				{ingredients.map((ingredient, index) => {
					const info = infos[index];
					return (
						<tr key={ingredient.name}>
							<th>{ingredient.name}</th>
							<td>{KINDS[info.kind]}</td>
							<td>{info.hasGluten ? 'yes' : ''}</td>
							<td>{info.hasDairy ? 'yes' : ''}</td>
							<td>{info.hasSugar ? 'yes' : ''}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
