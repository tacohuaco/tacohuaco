import uniq from 'lodash/uniq';
import { RecipeRaw } from '../types';
import { getListLines } from './getListLines';

export function mapTools(
	tools: RecipeRaw['tools'],
	subrecipes: RecipeRaw['subrecipes'] = []
) {
	const recipeTools = tools === null ? [] : getListLines(tools);
	const subrecipeTools = subrecipes.map((subrecipe) =>
		subrecipe.tools === null ? [] : getListLines(subrecipe.tools)
	);
	return uniq([...recipeTools, ...subrecipeTools.flat(1)]);
}
