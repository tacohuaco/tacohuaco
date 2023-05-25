import React from 'react';
import CoffeePage from '../layouts/CoffeePage';
import { Metatags } from '../components/Metatags';

type Props = {
	location: {
		pathname: string;
	};
};

export default function About({ location }: Props) {
	return <CoffeePage url={location.pathname} />;
}

export const Head = ({ location }: Props) => {
	return (
		<Metatags
			slug={location.pathname}
			title="Coffee recipes"
			description="How to brew coffee using different brewers: Chemex, V6, Aeropress..."
		/>
	);
};
