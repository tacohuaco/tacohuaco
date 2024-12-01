import type { ReactNode } from 'react';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export type PageProps = {
	children: ReactNode;
	extraFooter?: ReactNode;
	url: string;
};

export function Page({ children, extraFooter, url }: PageProps) {
	return (
		<Box mx="auto" px="contentPaddingX" maxWidth="59rem">
			<Stack gap="xl" minHeight="100vh" py="l">
				<Stack gap="l">
					<Header url={url} />
					{children}
				</Stack>
				<Footer extraFooter={extraFooter} />
			</Stack>
		</Box>
	);
}
