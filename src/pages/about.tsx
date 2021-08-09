import React from 'react';
import AboutPage from '../layouts/AboutPage';

type Props = {
	location: {
		pathname: string;
	};
};

const About = ({ location: { pathname } }: Props) => {
	return <AboutPage url={pathname} />;
};

export default About;
