import React from 'react';
import { Text, Stack } from 'tamia';
import { Button } from './Button';

type Props = {
	amount: number;
	unit: string;
	onLess: () => void;
	onMore: () => void;
};

export function RecipeYields({ amount, unit, onLess, onMore }: Props) {
	return (
		<Stack direction="row" gap="m">
			<Text variant="small">
				Yields {amount} {unit}
			</Text>
			<Stack direction="row" gap="s">
				<Button onClick={onLess} aria-label="Less">
					–
				</Button>
				<Button onClick={onMore} aria-label="More">
					+
				</Button>
			</Stack>
		</Stack>
	);
}
