import React from 'react';
import { paramCase } from 'param-case';
import { countryCodeEmoji } from 'country-code-emoji';
import nationalities from 'i18n-nationality/langs/en.json';
import { Stack, Box } from 'tamia';
import Tag from './Tag';

type Props = {
	cuisines: string[];
};

const getCountryCodeByNationality = (nationality: string): string =>
	Object.entries(nationalities.nationalities).find(
		([, n]) => n === nationality
	)?.[0] || '';

const getEmojiByNationality = (nationality: string): string =>
	countryCodeEmoji(getCountryCodeByNationality(nationality));

export default function RecipeCuisine({ cuisines }: Props) {
	return (
		<Stack gap="s" direction="row">
			{cuisines.map((cuisine) => (
				<Tag key={cuisine} href={`/cuisines/${paramCase(cuisine)}`}>
					<Stack as="span" gap="xs" direction="row">
						<Box as="span" aria-hidden="true">
							{getEmojiByNationality(cuisine)}
						</Box>
						<Box as="span">{cuisine}</Box>
					</Stack>
				</Tag>
			))}
		</Stack>
	);
}
