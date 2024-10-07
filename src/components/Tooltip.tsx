import { type ReactElement, type ReactNode } from 'react';
import { css } from '../../styled-system/css';
import { Box } from './Box';

const ARROW_SIZE = 'token(spacing.xs)';

type Props = {
	value: string;
	children: (props: {
		triggerProps: Record<string, unknown>;
		tooltipNode: ReactElement;
	}) => ReactElement;
};

export function TooltipTrigger(props: { children: ReactNode }) {
	return (
		<Box
			as="button"
			{...props}
			type="button"
			position="relative"
			padding={0}
			border={0}
			bg="none"
		/>
	);
}

export function Tooltip({ value, children }: Props) {
	return children({
		triggerProps: {
			className: css({
				position: 'relative',
			}),
		},
		tooltipNode: (
			<Box
				as="span"
				role="tooltip"
				css={{
					pointerEvents: 'none',
					opacity: 0,
					position: 'absolute',
					left: '50%',
					bottom: `calc(${ARROW_SIZE} * -2)`,
					transform: 'translate(-50%, 100%)',
					paddingInline: 'xs',
					paddingBlock: 'xxs',
					fontFamily: 'ui',
					fontSize: 'xs',
					fontWeight: 'normal',
					color: 'bg',
					textAlign: 'center',
					borderRadius: 'base',
					backgroundColor: 'accent',
					whiteSpace: 'nowrap',
					transitionDuration: 'hover',
					transitionTimingFunction: 'hover',
					transitionProperty: 'opacity',
					_after: {
						content: `''`,
						position: 'absolute',
						top: `calc(${ARROW_SIZE} * -1 + 1px)`,
						left: `calc(50% - ${ARROW_SIZE})`,
						color: 'accent',
						borderLeft: `${ARROW_SIZE} solid transparent`,
						borderRight: `${ARROW_SIZE} solid transparent`,
						borderBottom: `${ARROW_SIZE} solid`,
					},
					':is(button,a):hover &': {
						opacity: 1,
					},
					':is(button,a):focus &': {
						opacity: 1,
					},
				}}
			>
				{value}
			</Box>
		),
	});
}
