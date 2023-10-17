import { TipModel, TipModelRaw } from '../types';

export function mapTipsModel(ingredients: TipModelRaw[]): TipModel[] {
	return ingredients.map(({ content, tags, ingredient }) => ({
		content,
		tags,
		ingredient: ingredient === null ? undefined : ingredient,
	}));
}
