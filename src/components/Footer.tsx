import { Text } from './Text';
import { Link } from './Link';
import type { ReactNode } from 'react';
import { Stack } from './Stack';

interface Props {
	extraFooter?: ReactNode;
}

export function Footer({ extraFooter }: Props) {
	return (
		<Stack as="footer" gap="xs" mt="auto">
			<Text variant="xsmall">
				©{' '}
				<Link href="https://drtaco.net/">Dr.&nbsp;Margarita Diaz Cortes</Link>{' '}
				and&nbsp;<Link href="https://sapegin.me/">Artem Sapegin</Link>
				{', '}
				{new Date().getFullYear()}
			</Text>
			<Text variant="xsmall">
				Made with The&nbsp;Secret Ingredient™ in&nbsp;miserable Berlin
				&amp;&nbsp;sunny Valencia
				{' • '}Follow&nbsp;us on&nbsp;
				<Link href="https://twitter.com/tacohuaco">Twitter</Link> and&nbsp;
				<Link href="https://www.instagram.com/tacohuaco.co/">Instagram</Link>
				{' • '}
				<Link href="https://www.buymeacoffee.com/sapegin">Buy us coffee</Link>
				{' • '}
				<Link href="/atom.xml">RSS</Link>
			</Text>
			{extraFooter && <Text variant="xsmall">{extraFooter}</Text>}
		</Stack>
	);
}
