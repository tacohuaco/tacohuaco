import { GraphCms_Recipe } from '../graphql-types';
import { Asset } from './Asset';
import { Flags } from './Flags';

export type RecipeMeta = Pick<
	GraphCms_Recipe,
	'margaritasFavorite' | 'artemsFavorite' | 'time' | 'title' | 'slug'
> & {
	flags: Flags;
	images: Asset[];
};
