import React from 'react';
import { Heading, Text } from 'tamia';
import SubscriptionForm from './SubscriptionForm';

export default function Subscription() {
	return (
		<>
			<Heading as="h2" level={2} mb="m">
				Join the newsletter
			</Heading>
			<Text variant="small" mb="m">
				Subscribe to get our latest recipes!{' '}
				<i>No spam, unsubscribe at any time.</i>
			</Text>
			<SubscriptionForm />
		</>
	);
}
