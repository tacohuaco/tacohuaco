export const CONTENTS_FLAGS = [
	'vegan',
	'vegetarian',
	'glutenFree',
	'lowGluten',
	'dairyFree',
	'noAddedSugar',
] as const;

export const FAVORITES_FLAGS = [
	'margaritasFavorite',
	'artemsFavorite',
] as const;

export const ALL_FLAGS = [...CONTENTS_FLAGS, ...FAVORITES_FLAGS] as const;
