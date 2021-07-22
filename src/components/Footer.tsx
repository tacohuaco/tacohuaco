import React from 'react';
import { Text } from 'tamia';
import { Link } from 'tamia-gatsby-link';

export default function Footer() {
	return (
		<footer>
			<Text variant="xsmall" mb="xs">
				©{' '}
				<Link href="https://github.com/margaritadiaz">
					Dr. Margarita Diaz Cortes
				</Link>{' '}
				and <Link href="https://sapegin.me/">Artem Sapegin</Link>
				{', '}
				{new Date().getFullYear()}. Made with The Secret Ingredient™ in Berlin.{' '}
				<Link href="/atom.xml">RSS</Link>
			</Text>
		</footer>
	);
}
