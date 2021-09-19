import mdx from '@mdx-js/mdx';
import { transform } from 'sucrase';
import richtypo from 'richtypo';
import rules, {
	numberOrdinals,
	numberSeparators,
	definitions,
} from 'richtypo-rules-en';

const { hairspace } = definitions;

const degreeSigns = (text: string) =>
	text.replace(/\b(\d+)\s?[°˚]?\s?C/g, `$1${hairspace}°º˚C`);

const numberRanges = (text: string) =>
	text.replace(/\b(\d+)-(\d+)\b/g, '$1&ndash;$2');

const apostrophes = (text: string) => text.replace(/([a-z])'([a-z])/g, '$1’$2');

const typo = (text: string) =>
	richtypo(
		[
			...rules,
			degreeSigns,
			numberRanges,
			numberOrdinals,
			numberSeparators,
			apostrophes,
		],
		text
	);

// Based on https://spectrum.chat/gatsby-js/general/rendering-content-to-page-with-frontmatter-data~4bda35b1-c923-4e96-ad89-5eb8bdd8dfec
export const getMdx = async (source?: string | null) => {
	if (!source) {
		return '';
	}

	const code = await mdx(typo(source));
	const result = transform(code, {
		transforms: ['jsx'],
		jsxPragma: 'mdx',
	});
	return result.code.replace(
		/export\s*default\s*function\s*MDXContent\s*/,
		`return function MDXContent`
	);
};
