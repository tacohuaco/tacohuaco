import { flatten } from 'lodash';
import { UNITS } from './langs/en/units';
import {
	ARTICLES,
	CONNECTORS,
	RANGE_SEPARATORS,
	UNITLESS,
} from './langs/en/translations';
import { Ingredient } from './types';

type State = 'BEGINNING' | 'NUMBER' | 'UNIT' | 'NAME' | 'COMMENT';

const ALL_UNITS = flatten(UNITS);

const isNumber = (s: string) => /^[\d,./—–-]+$/.test(s);
const isRangeSeparator = (s: string) =>
	RANGE_SEPARATORS.includes(s.toLocaleLowerCase());
const isUnit = (s: string) => ALL_UNITS.includes(s.toLowerCase());
const isUnitless = (s: string) => UNITLESS.includes(s.toLowerCase());
const isArticle = (s: string) => ARTICLES.includes(s.toLowerCase());
const isConnector = (s: string) => CONNECTORS.includes(s.toLowerCase());
const isLastWordOfName = (s: string) => /;$/.test(s);
const trimSemicolon = (s: string) => s.replace(/;$/, '');

/**
 * Parse a line of recipe ingredient, like
 * 1-3 g apples; in small dice
 */
export function parse(text: string): Ingredient {
	const tokens = text.split(/\s+/);
	let state: State = 'BEGINNING';
	let name = '';
	let amount = '';
	let unit = '';
	let comment = '';
	let token = tokens.shift();
	while (token) {
		switch (state) {
			case 'BEGINNING':
				if (isNumber(token) || isArticle(token)) {
					amount = token;
					state = 'NUMBER';
				} else {
					state = 'NAME';
					continue;
				}
				break;
			case 'NUMBER':
				if (isConnector(token)) {
					// Ignore
				} else if (isRangeSeparator(token)) {
					amount += '-';
				} else if (isNumber(token) || isUnitless(token)) {
					amount += amount ? ` ${token}` : token;
				} else if (isUnit(token)) {
					unit = token;
					state = 'UNIT';
				} else {
					state = 'NAME';
					continue;
				}
				break;
			case 'UNIT':
				state = 'NAME';
				continue;
			case 'NAME':
				if (isConnector(token)) {
					// Ignore
				} else if (isLastWordOfName(token)) {
					name += trimSemicolon(token);
					state = 'COMMENT';
				} else {
					name += name ? ` ${token}` : token;
				}
				break;
			case 'COMMENT':
				comment += comment ? ` ${token}` : token;
				break;
		}

		token = tokens.shift();
	}
	const [min, max] = amount.split(/\s*-\s*/);
	return {
		name,
		minAmount: min || undefined,
		maxAmount: max || min || undefined,
		unit: unit || undefined,
		comment: comment || undefined,
	};
}
