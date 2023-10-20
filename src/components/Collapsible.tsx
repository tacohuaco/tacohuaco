import { type ReactNode } from 'react';
import { Box } from '.';
import { button } from './Collapsible.css';

interface CollapsibleProps {
	label: ReactNode;
	children: ReactNode;
}

export function Collapsible({ label, children }: CollapsibleProps) {
	return (
		<details>
			<summary className={button}>{label}</summary>
			<Box mt="s">{children}</Box>
		</details>
	);
}
