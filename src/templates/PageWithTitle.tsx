import type { ReactNode } from 'react';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';
import { Heading } from '../components/Heading';
import { Page } from './Page';

type Props = {
	children: ReactNode;
	url: string;
	title: ReactNode;
};

export function PageWithTitle({ url, title, children }: Props) {
	return (
		<Page url={url}>
			<Stack gap="xl">
				<Stack as="main" gap="l">
					<Heading level={1}>{title}</Heading>
					<Box>{children}</Box>
				</Stack>
			</Stack>
		</Page>
	);
}
