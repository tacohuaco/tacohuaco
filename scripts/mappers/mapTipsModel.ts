import { TipModel, TipModelRaw } from '../types';
import { mapMaybeString } from './mapMaybeString';

export function mapTipsModel(ingredients: TipModelRaw[]): TipModel[] {
	return ingredients.map(({ content, tags, ingredient }) => ({
		content,
		tags,
		ingredient: mapMaybeString(ingredient),
	}));
}
