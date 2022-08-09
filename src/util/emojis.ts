import { countryCodeEmoji } from 'country-code-emoji';
import nationalities from 'i18n-nationality/langs/en.json';

const extendedNationalities = {
	...nationalities.nationalities,
	kr: 'Korean',
	uz: 'Uzbek',
};

const getCountryCodeByNationality = (nationality: string): string =>
	Object.entries(extendedNationalities).find(
		([, n]) => n === nationality
	)?.[0] || '';

export const getEmojiByNationality = (nationality: string): string =>
	countryCodeEmoji(getCountryCodeByNationality(nationality));
