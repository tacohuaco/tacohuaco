import type { ReactNode } from 'react';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

type Props = {
	children: ReactNode;
	url: string;
};

export function Page({ children, url }: Props) {
	return (
		<Box mx="auto" py="l" px="contentPaddingX" maxWidth="59rem">
			<Stack gap="xl">
				<Stack gap="l">
					<Header url={url} />
					{children}
				</Stack>
				<Footer />
			</Stack>
		</Box>
	);
}
