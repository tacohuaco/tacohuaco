import { type ComponentProps } from 'react';
import { Box } from './Box';
import { inner } from './Frame.css';

// Based on https://every-layout.dev/layouts/frame/

type FrameProps = ComponentProps<typeof Box> & {
	/** Aspect ratio (e.g. `6/9`) */
	ratio: number;
};

/**
 * Container that keeps the given aspect ratio. Most useful for images.
 * Images are cropped by default (`object-fit: cover`) and other content is centered.
 */
export function Frame({ children, ratio, ...props }: FrameProps) {
	return (
		<Box
			{...props}
			position="relative"
			style={{ paddingBottom: `${ratio * 100}%` }}
		>
			<Box className={inner}>{children}</Box>
		</Box>
	);
}
