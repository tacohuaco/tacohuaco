import { type ElementType } from 'react';
import { cva, type RecipeVariantProps } from '../../styled-system/css';
import { createBox, type BoxProps } from './Box';

const button = cva({
	base: {
		display: 'inline-block',
		width: '2rem',
		height: '2rem',
		padding: 0,
		paddingTop: '0.1em',
		border: 'input',
		borderColor: 'accent',
		borderRadius: 'round',
		textAlign: 'center',
		fontFamily: 'body',
		fontSize: 'xl',
		fontWeight: 'normal',
		lineHeight: 1,
		color: 'accent',
		background: 'transparent',
		'&::-moz-focus-inner': {
			border: 0,
		},
		// TODO: condition?
		'@media (any-hover: hover)': {
			width: '1.2rem',
			height: '1.2rem',
			fontSize: 's',
			fontWeight: 'ui',
		},
		_hover: {
			cursor: 'pointer',
			color: 'bg',
			backgroundColor: 'accent',
		},
		_active: {
			cursor: 'pointer',
			color: 'bg',
			backgroundColor: 'accent',
		},
		_focus: {
			outline: 0,
			boxShadow: `0 0 0 2px token(colors.bg), 0 0 0 4px token(colors.focus)`,
		},
	},
	variants: {
		variant: {},
	},
});

export type ButtonProps<C extends ElementType> = Omit<
	BoxProps<C>,
	'className'
> &
	RecipeVariantProps<typeof button>;

export function Button<C extends ElementType = 'button'>(
	props: ButtonProps<C>
) {
	return createBox(
		{
			...props,
			className: button(),
		},
		'button'
	);
}
