import React from 'react';
import { Container, Stack } from 'tamia';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import { Subscription } from '../components/Subscription';
import Base from './Base';

type Props = {
	children: React.ReactNode;
	url: string;
	title?: string;
};

const Page = ({ children, url }: Props) => {
	return (
		<Base>
			<PageContainer>
				<Container>
					<Stack gap="xl">
						<Stack gap="l">
							<Header url={url} />
							{children}
						</Stack>
						<aside aria-label="Newsletter">
							<Subscription />
						</aside>
						<Footer />
					</Stack>
				</Container>
			</PageContainer>
		</Base>
	);
};

export default Page;
