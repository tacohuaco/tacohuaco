import React from 'react';
import AboutPage from '../layouts/AboutPage';
import Metatags from '../components/Metatags';

type Props = {
	location: {
		pathname: string;
	};
};

export default function About({ location }: Props) {
	return <AboutPage url={location.pathname} />;
}

export const Head = ({ location }: Props) => {
	return (
		<Metatags
			slug={location.pathname}
			title="About"
			description="We’ve started Tacohuaco as a better way of keeping notes about foodses we cook, and it evolves together with our cooking needs…"
		/>
	);
};
