import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react/headless';
import { Box, Text } from 'tamia';

type Props = {
	value: string;
	children: React.ReactNode;
};

const ARROW_SIZE = '0.25rem';

const Arrow = styled(Box)`
	border-left: ${ARROW_SIZE} solid transparent;
	border-right: ${ARROW_SIZE} solid transparent;
	border-bottom: ${ARROW_SIZE} solid;
`;

export default function Tooltip({ value, children }: Props) {
	return (
		<Tippy
			placement="bottom"
			render={(attrs) => (
				<Text
					tabIndex={-1}
					px="0.3rem"
					py="0.1rem"
					textAlign="center"
					fontFamily="ui"
					fontSize="xs"
					fontWeight="base"
					color="bg"
					borderRadius="base"
					bg="accent"
					{...attrs}
				>
					<Arrow
						as="span"
						color="accent"
						position="relative"
						top={`-${ARROW_SIZE}`}
						data-popper-arrow=""
					/>
					{value}
				</Text>
			)}
		>
			<Box as="button" border="none" bg="transparent" p={0}>
				{children}
			</Box>
		</Tippy>
	);
}
