import type { ReactNode } from 'react';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';
import { Heading } from '../components/Heading';
import { Page, type PageProps } from './Page';

type Props = PageProps & {
	title: ReactNode;
};

export function PageWithTitle({ title, children, ...props }: Props) {
	return (
		<Page {...props}>
			<Stack gap="xl">
				<Stack as="main" gap="l">
					<Heading level={1}>{title}</Heading>
					<Box>{children}</Box>
				</Stack>
			</Stack>
		</Page>
	);
}
