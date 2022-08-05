import React from 'react';
import Provider from './Provider';
import { Fonts } from '../styles/fonts';

type Props = {
	children: React.ReactNode;
};

export default function Base({ children }: Props) {
	return (
		<Provider>
			<Fonts />
			{children}
		</Provider>
	);
}
