import { Text } from './Text';
import { Link } from './Link';

export function Footer() {
	return (
		<footer>
			<Text variant="xsmall" mb="xs">
				©{' '}
				<Link href="https://drtaco.net/">Dr.&nbsp;Margarita Diaz Cortes</Link>{' '}
				and&nbsp;<Link href="https://sapegin.me/">Artem Sapegin</Link>
				{', '}
				{new Date().getFullYear()}
			</Text>
			<Text variant="xsmall" mb="xs">
				Made with The&nbsp;Secret Ingredient™ in&nbsp;Berlin
				&amp;&nbsp;Valencia
				{' • '}Follow&nbsp;us on&nbsp;
				<Link href="https://twitter.com/tacohuaco">Twitter</Link> and&nbsp;
				<Link href="https://www.instagram.com/tacohuaco.co/">Instagram</Link>!
				{' • '}
				<Link href="https://www.buymeacoffee.com/sapegin">Buy us coffee</Link>
				{' • '}
				<Link href="/atom.xml">RSS</Link>
			</Text>
		</footer>
	);
}
