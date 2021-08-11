import React from 'react';
import GraphCmsImage from '@graphcms/react-image';
import { Box } from 'tamia';
import { Asset } from '../types/Asset';

type Props = Omit<React.ComponentProps<typeof GraphCmsImage>, 'image'> & {
	image: Asset;
};

export function Image({ image, ...rest }: Props) {
	return (
		<Box>
			<Box mx={['-m', 0]}>
				<GraphCmsImage
					image={{
						handle: image.handle || '',
						width: image.width || 0,
						height: image.height || 0,
					}}
					{...rest}
				/>
			</Box>
		</Box>
	);
}
