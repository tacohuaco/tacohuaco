import { ALL_FLAGS, CONTENTS_FLAGS, FAVORITES_FLAGS } from '../consts';

export type FlagName = (typeof ALL_FLAGS)[number];
export type ContentsFlagName = (typeof CONTENTS_FLAGS)[number];
export type FavoriteFlagName = (typeof FAVORITES_FLAGS)[number];
