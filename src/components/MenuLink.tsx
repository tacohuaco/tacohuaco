import clsx from 'clsx';
import { Box, type BoxProps } from '../tamia/components/Box';
import { link, linkCurrent } from './MenuLink.css';

type Props = Omit<BoxProps<'a'>, 'as'> & {
	isCurrent?: boolean;
};

/**
 * Menu link.
 */
export function MenuLink({ isCurrent, ...props }: Props) {
	return (
		<Box as="a" className={clsx(link, isCurrent && linkCurrent)} {...props} />
	);
}
