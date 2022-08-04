/**
 * Return an image asset URL on GraphCMS for a given size
 */
export const getImageUrl = (
	baseUrl: string,
	{ width, height }: { width: number; height: number }
) =>
	baseUrl.replace(
		'https://media.graphassets.com/',
		`https://media.graphassets.com/resize=height:${height},width:${width}/quality=value:65/`
	);

/**
 * Remove Markdown formating
 * Based on https://github.com/stiang/remove-markdown
 */
export const stripMarkdown = (md: string): string => {
	return (
		md
			// Remove HTML tags
			.replace(/<[^>]*>/g, '')
			// Remove images
			.replace(/!\[(.*?)\][[(].*?[\])]/g, '')
			// Remove inline links
			.replace(/\[(.*?)\][[(].*?[\])]/g, '$1')
			// Remove emphasis (repeat the line to remove double emphasis)
			.replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
			.replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
			.trim()
	);
};

export const asList = (
	list: readonly (string | false | undefined | null)[]
): string => {
	const filtered = list.filter((x) => typeof x === 'string').map(String);

	if (filtered.length === 0) {
		return '';
	}

	return filtered.reduce((acc, item, index) => {
		return [acc, index === list.length - 1 ? ' and ' : ', ', item].join('');
	});
};
