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
		transition: height 300ms ease-in-out;
	}
`;

export function Collapsible({ id, label, children }: CollapsibleProps) {
	const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

	const onClick = useCallback(
		() => setIsButtonCollapseOpen(!isButtonCollapseOpen),
		[isButtonCollapseOpen]
	);

	return (
		<Wrapper>
			<Link
				as="button"
				aria-controls={id}
				aria-expanded={isButtonCollapseOpen}
				onClick={onClick}
				type="button"
			>
				{label}
			</Link>
			<Collapse
				isOpened={isButtonCollapseOpen}
				initialStyle={{ overflow: 'hidden' }}
			>
				<Box id={id} mt="s">
					{children}
				</Box>
			</Collapse>
		</Wrapper>
	);
}
