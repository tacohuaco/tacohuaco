import { FlagsJson } from '../graphql-types';

export type Flags = Pick<
	FlagsJson,
	'vegan' | 'vegetarian' | 'gluten' | 'diary' | 'addedSugar'
>;
