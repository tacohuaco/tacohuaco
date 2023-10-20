import type { ComponentProps } from 'react';
import { Image } from '.';
import { image } from './HygraphImage.css';
import { getHygraphImageUrl } from '../util/getHygraphImageUrl';

type Props = ComponentProps<typeof Image> & {
	handle: string;
	width: number;
	height: number;
	intrinsicWidth?: number;
	intrinsicHeight?: number;
	quality?: number;
};

export function HygraphImage({
	handle,
	width,
	height,
	quality = 65,
	intrinsicWidth,
	intrinsicHeight,
	...rest
}: Props) {
	const src = getHygraphImageUrl(handle, { width, height, quality });
	return (
		<Image
			className={image}
			src={src}
			width={intrinsicWidth}
			height={intrinsicHeight}
			{...rest}
		/>
	);
}
