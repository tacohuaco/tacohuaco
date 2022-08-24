const CUISINE_TO_EMOJI: Record<string, string> = {
	_DEFAULT: '🏴',
	Chinese: '🇨🇳',
	French: '🥖',
	Klatzlandian: '🏴‍☠️',
	Greek: '🇬🇷',
	Italian: '🍕',
	Japanese: '🇯🇵',
	Korean: '🇰🇷',
	Mexican: '🇲🇽',
	MiddleEastern: '🥙',
	Russian: '🪆',
	Swedish: '🇸🇪',
	UnitedStates: '🇺🇸',
	Uzbek: '🇺🇿',
	Vietnamese: '🇻🇳',
};

export const getCuisineEmoji = (cuisine: string): string => {
	return CUISINE_TO_EMOJI[cuisine] || CUISINE_TO_EMOJI._DEFAULT;
};
