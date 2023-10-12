import { visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';

/**
 * Returns a slug from a Markdown link:
 * [#](spicy-gremolata) -> spicy-gremolata
 */
export function getSubrecipeSlug(markdown: string): string | undefined {
	const tree = fromMarkdown(markdown);
	let slug;
	visit(tree, 'link', (link) => {
		if (link.children[0].type === 'text' && link.children[0].value === '#') {
			slug = link.url;
		}
	});
	return slug;
}
