import React from 'react';
import { Link } from 'gatsby';
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
	{
		title: 'Shops',
		href: '/shops/',
	},
	{
		title: 'About',
		href: '/about/',
	},
];

export const GatsbyLink = Text.withComponent(Link);

const MenuItem = ({
	href,
	title,
	isCurrent,
}: {
	href: string;
	title: string;
	isCurrent: boolean;
}) => (
	<li>
		<GatsbyLink
			to={href}
			variant="menu"
			sx={{
				':link,:visited': {
					transition: 'hover',
					transitionProperty: 'all',
					padding: 'xs',
					color: 'accent',
					bg: 'bg',
					textDecoration: 'none',
					borderRadius: 'button',
					...(isCurrent
						? {
								fontWeight: 'bold',
								border: 'input',
								borderColor: 'accent',
								boxShadow: 'menu',
						  }
						: {
								paddingBottom: 'xs',
								margin: 'calc(0.25rem + 2px)',
						  }),
				},
				':active,:hover,:focus': {
					...(isCurrent
						? { color: 'bg', bg: 'accent' }
						: {
								border: 'input',
								borderWidth: '0 0 2px 0',
						  }),
				},
				':focus': {
					...(isCurrent
						? { outline: 0 }
						: {
								border: 'none',
								outline: 'input',
								outlineColor: 'accent',
						  }),
				},
			}}
		>
			{title}
		</GatsbyLink>
	</li>
);

export function Menu({ current }: Props) {
	return (
		<Stack as="ul" gap="m" direction={['column', 'row']}>
			{ITEMS.map(({ title, href }) => (
				<MenuItem
					key={href}
					href={href}
					title={title}
					isCurrent={current.startsWith(href)}
				/>
			))}
		</Stack>
	);
}
