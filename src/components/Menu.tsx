import React from 'react';
import { Link } from 'tamia-gatsby-link';
import { Text, Stack } from 'tamia';

type Props = {
	current: string;
};

type Item = {
	title: string;
	hint?: string;
	href: string;
	isCurrent?: (href: string) => boolean;
};

const ITEMS: Item[] = [
	{
		title: 'Recipes',
		href: '/recipes/',
	},
	// {
	// 	title: 'Ingredients',
	// 	href: '/ingredients/',
	// },
	{
		title: 'Shops',
		href: '/shops/',
	},
	{
		title: 'About',
		href: '/about/',
	},
];

const isCurrentItem = (
	current: string,
	item: Pick<Item, 'href' | 'isCurrent'>
): boolean =>
	item.isCurrent ? item.isCurrent(current) : current.startsWith(item.href);

export default function Menu({ current }: Props) {
	return (
		<Stack as="ul" gap="m" direction={['column', 'row']}>
			{ITEMS.map(({ title, hint, href, isCurrent }) => (
				<Text
					key={href}
					as="li"
					variant="menu"
					fontWeight={
						isCurrentItem(current, { href, isCurrent }) ? 'bold' : undefined
					}
				>
					<Link href={href} title={hint} aria-label={hint}>
						{title}
					</Link>
				</Text>
			))}
		</Stack>
	);
}
