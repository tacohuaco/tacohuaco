import React from 'react';
import { Box, Stack } from 'tamia';
import { Button } from './Button';

type Props = {
	onLess: () => void;
	onMore: () => void;
};

export function RecipeScale({ onLess, onMore }: Props) {
	return (
		<Stack
			direction="row"
			gap={['s', 'xs']}
			alignItems="center"
			minWidth="auto"
		>
			<Button onClick={onLess} aria-label="Less">
				－
			</Button>
			<Button onClick={onMore} aria-label="More">
				＋
			</Button>
		</Stack>
	);
}
