import { GraphCms_Recipe } from '../graphql-types';

export type Subrecipe = Pick<
	GraphCms_Recipe,
	'slug' | 'ingredients' | 'ingredientsMdx' | 'stepsMdx'
>;
