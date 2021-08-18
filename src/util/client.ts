/**
 * Return an image asset URL on GraphCMS for a given size
 */
export const getImageUrl = (
	baseUrl: string,
	{ width, height }: { width: number; height: number }
) =>
	baseUrl.replace(
		'https://media.graphcms.com/',
		`https://media.graphcms.com/resize=height:${height},width:${width}/quality=value:65/`
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
