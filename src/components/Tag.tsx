import type { ComponentProps } from 'react';
import { Box } from './Box';
import { Link } from './Link';

export function Tag(props: ComponentProps<typeof Link>) {
	return (
		<Box
			as="a"
			{...props}
			css={{
				display: 'inline-block',
				paddingTop: '0.1ex',
				paddingInline: 'xs',
				backgroundColor: 'light',
				border: 0,
				fontFamily: 'ui',
				fontSize: 's',
				lineHeight: 'base',
				textDecoration: 'none',
				color: 'dim',
				borderRadius: 'base',
				whiteSpace: 'nowrap',
				_hover: {
					color: 'accent',
					cursor: 'pointer',
				},
				_focus: {
					outline: 'focus',
					outlineOffset: 'token(borderWidths.focusOutlineOffset)',
				},
			}}
		/>
	);
}
