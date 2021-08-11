import React from 'react';
import { Box, Stack, Heading, Text } from 'tamia';
import { SubscriptionForm } from './SubscriptionForm';

export function Subscription() {
	return (
		<Box
			mx={['-m', 0]}
			p="l"
			backgroundColor="accent"
			backgroundImage="url(/raspberries.jpg)"
			backgroundPosition="center"
		>
			<Stack
				p="m"
				gap="m"
				backgroundColor="hsla(0,100%,100%,0.8)"
				css={{
					backdropFilter: 'blur(1px)',
				}}
			>
				<Heading as="h2" level={2}>
					Want more delicious recipes?
				</Heading>
				<Text variant="small">
					Join our newsletter to get the latest recipes and cooking tips!{' '}
					<i>No spam, unsubscribe at any time.</i>
				</Text>
				<SubscriptionForm />
			</Stack>
		</Box>
	);
}
