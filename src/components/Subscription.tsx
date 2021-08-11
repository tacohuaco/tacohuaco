import React from 'react';
import styled from 'styled-components';
import { Box, Stack, Heading, Text } from 'tamia';
import SubscriptionForm from './SubscriptionForm';

const Container = styled(Stack)`
	backdrop-filter: blur(1px);
`;

export default function Subscription() {
	return (
		<Box
			p="l"
			backgroundColor="accent"
			backgroundImage="url(/raspberries.jpg)"
			backgroundPosition="center"
		>
			<Container p="m" gap="m" backgroundColor="hsla(0,100%,100%,0.8)">
				<Heading as="h2" level={2}>
					Want more delicious recipes?
				</Heading>
				<Text variant="small">
					Join our newsletter to get the latest recipes and cooking tips!{' '}
					<i>No spam, unsubscribe at any time.</i>
				</Text>
				<SubscriptionForm />
			</Container>
		</Box>
	);
}
