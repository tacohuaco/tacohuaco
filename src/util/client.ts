export const getImageUrl = (
	baseUrl: string,
	{ width, height }: { width: number; height: number }
) =>
	baseUrl.replace(
		'https://media.graphcms.com/',
		`https://media.graphcms.com/resize=height:${height},width:${width}/quality=value:65/`
	);
