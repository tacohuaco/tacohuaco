const baseUrl = 'https://media.graphassets.com';

export function getHygraphImageUrl(
	handle: string,
	{
		width,
		height,
		quality = 65,
		webP = true,
	}: { width: number; height: number; quality?: number; webP?: boolean }
) {
	return [
		baseUrl,
		`resize=w:${width * 2},h:${height * 2},fit:max`,
		`quality=value:${quality}`,
		webP && 'auto_image/', // enable WebP
		handle,
	]
		.filter(Boolean)
		.join('/');
}
