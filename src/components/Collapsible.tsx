import { type ReactNode } from 'react';
import { Box } from './Box';
import { Stack } from './Stack';

interface CollapsibleProps {
	label: ReactNode;
	children: ReactNode;
}

function CollapsibleButton({ children }: { children: ReactNode }) {
	return (
		<Box
			as="summary"
			css={{
				fontFamily: 'ui',
				fontSize: 's',
				lineHeight: 'base',
				textDecoration: 'underline',
				color: 'base',
				_hover: {
					color: 'accent',
					cursor: 'pointer',
				},
				_active: {
					color: 'accent',
				},
				_focus: {
					outline: 'focus',
					outlineOffset: 'token(borderWidths.focusOutlineOffset)',
				},
			}}
		>
			{children}
		</Box>
	);
}

export function Collapsible({ label, children }: CollapsibleProps) {
	return (
		<Stack as="details" gap="s">
			<CollapsibleButton>{label}</CollapsibleButton>
			<Box>{children}</Box>
		</Stack>
	);
}
