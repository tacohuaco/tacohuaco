import React from 'react';
import GraphCmsImage from '@graphcms/react-image';
import { Asset } from '../types/Asset';

type Props = Omit<React.ComponentProps<typeof GraphCmsImage>, 'image'> & {
	image: Asset;
};

export function Image({ image, ...rest }: Props) {
	return (
		<GraphCmsImage
			image={{
				handle: image.handle || '',
				width: image.width || 0,
				height: image.height || 0,
			}}
			{...rest}
		/>
	);
}
