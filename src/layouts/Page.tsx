import React from 'react';
import { Page as PageTamia, Container, Stack } from 'tamia';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import Subscription from '../components/Subscription';
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
					<PageTamia>
						<Stack gap="l">
							<Header url={url} />
							{children}
							<Stack gap="l">
								<aside aria-label="Newsletter">
									<Subscription />
								</aside>
							</Stack>
						</Stack>
						<PageTamia.Footer>
							<Footer />
						</PageTamia.Footer>
					</PageTamia>
				</Container>
			</PageContainer>
		</Base>
	);
};

export default Page;
