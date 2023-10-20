import clsx from 'clsx';
import { image } from './Image.css';

/**
 * Responsive image.
 */
export function Image(props: JSX.IntrinsicElements['img']) {
	return (
		<img loading="lazy" {...props} className={clsx(image, props.className)} />
	);
}
