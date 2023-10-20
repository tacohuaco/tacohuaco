import { type ReactElement, type ReactNode } from 'react';
import { Box } from '.';
import { trigger, defaultTrigger, tooltip } from './Tooltip.css';
import clsx from 'clsx';

type Props = {
	value: string;
	children: (props: {
		triggerProps: Record<string, unknown>;
		tooltipNode: ReactElement;
	}) => ReactElement;
};

export function TooltipTrigger(props: { children: ReactNode }) {
	return (
		<button
			{...props}
			type="button"
			className={clsx(trigger, defaultTrigger)}
		/>
	);
}

export function Tooltip({ value, children }: Props) {
	return children({
		triggerProps: { className: trigger },
		tooltipNode: (
			<Box as="span" className={tooltip} role="tooltip">
				{value}
			</Box>
		),
	});
}
