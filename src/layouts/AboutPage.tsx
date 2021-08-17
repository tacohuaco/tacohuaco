import React from 'react';
import { Stack, Heading } from 'tamia';
import Metatags from '../components/Metatags';
import Page from './Page';

type Props = {
	url: string;
};

export default function AboutPage({ url }: Props) {
	return (
		<Page url={url}>
			<Metatags slug={url} title="About" />
			<Stack as="main" gap="l">
				<Heading level={1}>
					About Tacohuaco <span aria-hidden="true">🌮</span>
				</Heading>
				<Stack gap="m">
					<p>
						Klats-klats! <span aria-hidden="true">🦀</span>
					</p>
				</Stack>
			</Stack>
		</Page>
	);
}
