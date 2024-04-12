import { css } from '../../styled-system/css';
import { Box, type BoxProps } from './Box';

export type InputProps = Omit<BoxProps<'input'>, 'className'>;

export const Input = (props: InputProps) => (
	<Box
		{...props}
		as="input"
		className={css({
			width: '100%',
			height: '2rem',
			paddingBlock: 'xxs',
			paddingInline: 's',
			fontFamily: 'ui',
			fontSize: 'm',
			fontWeight: 'ui',
			backgroundColor: 'bg',
			color: 'base',
			border: 'input',
			borderColor: 'base',
			borderRadius: 'button',
			appearance: 'none',
			_focus: {
				outline: 0,
				borderColor: 'accent',
				boxShadow: 'input',
			},
			_disabled: {
				opacity: 0.25,
			},
		})}
	/>
);
