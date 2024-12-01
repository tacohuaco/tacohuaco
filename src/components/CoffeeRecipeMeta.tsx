import { Stack } from './Stack';
import { Text } from './Text';
import { Box } from './Box';
import type { ReactNode } from 'react';

type Props = {
	coffeeAmount: number;
	waterAmount: number;
	children: ReactNode;
};

export function CoffeeRecipeMeta({
	coffeeAmount,
	waterAmount,
	children,
}: Props) {
	return (
		<Stack gap="m" direction="row" alignItems="center">
			<Stack as="span" direction="row" gap="s" alignItems="baseline">
				<Stack as="span" alignItems="center">
					<Text
						css={{
							fontSize: '2rem',
							fontVariant: 'tabular-nums',
						}}
					>
						{coffeeAmount}&thinsp;g
					</Text>
					<Text variant="small" mt="-xs">
						coffee
					</Text>
				</Stack>
				<Box
					css={{
						// marginTop: '0.5rem',
						height: '1.5rem',
						width: '2px',
						backgroundColor: 'dim',
					}}
				/>
				<Stack as="span" alignItems="center">
					<Text
						css={{
							fontSize: '2rem',
							fontVariant: 'tabular-nums',
						}}
					>
						{waterAmount}&thinsp;g
					</Text>
					<Text variant="small" mt="-xs">
						water
					</Text>
				</Stack>
			</Stack>
			<Box mt="-m">{children}</Box>
		</Stack>
	);
}
