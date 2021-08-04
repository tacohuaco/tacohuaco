import mdx from '@mdx-js/mdx';
import { transform } from 'sucrase';

// Based on https://spectrum.chat/gatsby-js/general/rendering-content-to-page-with-frontmatter-data~4bda35b1-c923-4e96-ad89-5eb8bdd8dfec
export const getMdx = async (source: string) => {
	const code = await mdx(source || '');
	const result = transform(code, {
		transforms: ['jsx'],
		jsxPragma: 'mdx',
	});
	return result.code.replace(
		/export\s*default\s*function\s*MDXContent\s*/,
		`return function MDXContent`
	);
};
