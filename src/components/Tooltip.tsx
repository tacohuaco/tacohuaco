import React, { forwardRef, ComponentProps, ReactElement } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Box, Text } from 'tamia';

type Props = {
	value: string;
	children: ReactElement;
	renderTrigger?: boolean;
};

const ARROW_SIZE = '0.25rem';

const Container = (props: ComponentProps<typeof Text>) => (
	<Text
		tabIndex={-1}
		textAlign="center"
		sx={{
			px: '0.3rem',
			py: '0.1rem',
			fontFamily: 'ui',
			fontSize: 'xs',
			fontWeight: 'base',
			color: 'bg',
			borderRadius: 'base',
			bg: 'accent',
		}}
		{...props}
	/>
);

const Arrow = () => (
	<Box
		as="span"
		data-popper-arrow=""
		sx={{
			top: `-${ARROW_SIZE}`,
			color: 'accent',
			position: 'relative',
			borderLeft: `${ARROW_SIZE} solid transparent`,
			borderRight: `${ARROW_SIZE} solid transparent`,
			borderBottom: `${ARROW_SIZE} solid`,
		}}
	/>
);

const DefaultTrigger = forwardRef((props: ComponentProps<typeof Box>, ref) => (
	<Box
		ref={ref}
		as="button"
		p={0}
		sx={{ border: 'none', bg: 'transparent' }}
		{...props}
	/>
));

export function Tooltip({ value, children, renderTrigger = true }: Props) {
	return (
		<Tippy
			placement="bottom"
			render={(attrs) => (
				<Container {...attrs}>
					<Arrow />
					{value}
				</Container>
			)}
		>
			{renderTrigger ? <DefaultTrigger>{children}</DefaultTrigger> : children}
		</Tippy>
	);
}
