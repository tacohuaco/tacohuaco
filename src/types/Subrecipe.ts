import { IngredientsWithMeta } from './IngredientsWithMeta';

export type Subrecipe = Pick<
	Queries.GraphCMS_Recipe,
	'slug' | 'title' | 'ingredients' | 'ingredientsMdx' | 'stepsMdx'
> & {
	allIngredients: readonly IngredientsWithMeta[];
};
