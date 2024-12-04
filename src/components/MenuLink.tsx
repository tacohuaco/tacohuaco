import { cva } from '../../styled-system/css';
import { Box, type BoxProps } from './Box';

type Props = Omit<BoxProps<'a'>, 'className'> & {
	isCurrent?: boolean;
};

const menuLink = cva({
	base: {
		margin: 'calc(0.25rem + 2px)',
		padding: 'xs',
		color: 'accent',
		backgroundColor: 'background',
		fontFamily: 'ui',
		fontWeight: 'normal',
		fontSize: 'm',
		lineHeight: 'heading',
		textDecoration: 'none',
		textTransform: 'uppercase',
		letterSpacing: 'uppercase',
		transitionDuration: 'hover',
		transitionTimingFunction: 'hover',
		transitionProperty: 'all',
		borderStyle: 'solid',
		borderColor: 'accent',
		borderWidth: 0,
		borderRadius: 'button',
	},
	variants: {
		variant: {
			base: {
				_hover: {
					borderBottomWidth: 2,
					cursor: 'pointer',
				},
				_focusVisible: {
					border: 0,
					outline: 'input',
					outlineColor: 'accent',
					outlineOffset: 0,
				},
			},
			current: {
				marginBlock: 0,
				border: 'input',
				boxShadow: 'menu',
				fontWeight: 'bold',
				borderWidth: 2,
				_hover: {
					color: 'background',
					backgroundColor: 'accent',
				},
				_focusVisible: {
					outline: 0,
					color: 'background',
					backgroundColor: 'accent',
				},
			},
		},
	},
});

/**
 * Menu link.
 */
export function MenuLink({ isCurrent, ...props }: Props) {
	return (
		<Box
			as="a"
			className={menuLink({ variant: isCurrent ? 'current' : 'base' })}
			{...props}
		/>
	);
}
