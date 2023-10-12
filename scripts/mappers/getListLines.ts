import { visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';

/**
 * Return all list items from Markdown as an array
 * of strings
 */
export const getListLines = (markdown: string): string[] => {
	const tree = fromMarkdown(markdown);
	const items: string[] = [];
	visit(tree, 'listItem', (li) => {
		items.push(toString(li));
	});
	return items;
};
