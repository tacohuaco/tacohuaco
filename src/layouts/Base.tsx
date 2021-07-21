import React from 'react';
import { Helmet } from 'react-helmet';
import Provider from './Provider';
import theme from '../theme';
import { Fonts } from '../styles/fonts';

type Props = {
	children: React.ReactNode;
};

export default function Base({ children }: Props) {
	return (
		<>
			<Helmet>
				<html lang="en" />
				<meta name="theme-color" content={theme.colors.accent} />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌮</text></svg>"
				/>
			</Helmet>
			<Provider>
				<Fonts />
				{children}
			</Provider>
		</>
	);
}
