import { GraphCms_Recipe } from '../graphql-types';
import { IngredientsWithMeta } from './IngredientsWithMeta';

export type Subrecipe = Pick<
	GraphCms_Recipe,
	'slug' | 'ingredients' | 'ingredientsMdx' | 'stepsMdx'
> & {
	allIngredients: IngredientsWithMeta[];
};
