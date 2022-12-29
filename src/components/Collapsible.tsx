import React, { useState, useCallback, ReactNode } from 'react';
import styled from 'styled-components';
import { Collapse } from 'react-collapse';
import { Box, Link } from 'tamia';

interface CollapsibleProps {
	id: string;
	label: ReactNode;
	children: ReactNode;
}

const Wrapper = styled.div`
	.ReactCollapse--collapse {
		transition: ${(p) => p.theme.transitions.expand};
		transition-property: height;
	}
`;

export function Collapsible({ id, label, children }: CollapsibleProps) {
	const [isOpen, setIsOpen] = useState(false);

	const onClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

	return (
		<Wrapper>
			<Link
				as="button"
				aria-controls={id}
				aria-expanded={isOpen}
				onClick={onClick}
				type="button"
			>
				{label}
			</Link>
			<Collapse isOpened={isOpen} initialStyle={{ overflow: 'hidden' }}>
				<Box id={id} mt="s">
					{isOpen && children}
				</Box>
			</Collapse>
		</Wrapper>
	);
}
