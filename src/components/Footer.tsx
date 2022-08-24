import React from 'react';
import { Text } from 'tamia';
import { Link } from 'tamia-gatsby-link';

export function Footer() {
	return (
		<footer>
			<Text variant="xsmall" mb="xs">
				©{' '}
				<Link href="https://www.linkedin.com/in/dr-margarita-diaz-cortes-4544a513a/">
					Dr.&nbsp;Margarita Diaz Cortes
				</Link>{' '}
				and&nbsp;<Link href="https://sapegin.me/">Artem Sapegin</Link>
				{', '}
				{new Date().getFullYear()}
				{' • '}Made with The&nbsp;Secret Ingredient™ in&nbsp;Berlin{' • '}
				<Link href="https://www.buymeacoffee.com/sapegin">Buy us coffee</Link>
				{' • '}
				<Link href="/atom.xml">RSS</Link>
			</Text>
		</footer>
	);
}
