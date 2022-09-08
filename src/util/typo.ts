import richtypo from 'richtypo';
import rules, {
	abbrs,
	dashesBasic,
	definitions,
	ellipses,
	numberOrdinals,
	numberSeparators,
	numberUnits,
	orphans,
	prepositions,
	quotes,
	shortWords,
} from 'richtypo-rules-en';

const { hairspace } = definitions;

type MaybeText = string | undefined | null;

const degreeSigns = (text: string) =>
	text.replace(/\b(\d+)\s?[°˚]?\s?C/g, `$1${hairspace}˚C`);

const numberRanges = (text: string) =>
	text.replace(/\b(\d+)-(\d+)\b/g, '$1–$2');

const dimensions = (text: string) => text.replace(/\b(\d+)x(\d+)\b/g, '$1×$2');

const apostrophes = (text: string) => text.replace(/([a-z])'([a-z])/g, '$1’$2');

export const typo = (text: MaybeText) =>
	richtypo(
		[
			...rules,
			degreeSigns,
			numberRanges,
			dimensions,
			numberOrdinals,
			numberSeparators,
			apostrophes,
		],
		text || ''
	);

export const typoLite = (text: MaybeText) =>
	richtypo(
		[
			// Common rules
			shortWords,
			prepositions,
			orphans,
			abbrs,
			dashesBasic,
			ellipses,
			numberUnits,
			degreeSigns,
			// English rules
			quotes,
			// Custom rules
			degreeSigns,
			dimensions,
			numberRanges,
			numberOrdinals,
			numberSeparators,
			apostrophes,
		],
		text || ''
	);
