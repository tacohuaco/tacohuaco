import { Ingredient } from '../util/olivier';

export interface IngredientsWithMeta {
	slug: string;
	ingredients: readonly Ingredient[];
}
