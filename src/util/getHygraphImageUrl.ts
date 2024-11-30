const baseUrl = 'https://eu-central-1.graphassets.com/Aeh74QOS5TIWHefSmr6nTz';

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
		`resize=width:${width * 2},height:${height * 2},fit:max`,
		`quality=value:${quality}`,
		webP && 'auto_image', // enable WebP
		handle,
	]
		.filter(Boolean)
		.join('/');
}
