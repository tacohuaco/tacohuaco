import { MenuLink, Stack } from '.';

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
		title: 'Search',
		href: '/search/',
	},
	{
		title: 'About',
		href: '/about/',
	},
];

export function Menu({ current }: Props) {
	return (
		<Stack as="ul" gap="m" direction={{ base: 'column', tablet: 'row' }}>
			{ITEMS.map(({ title, href }) => (
				<li key={href}>
					<MenuLink href={href} isCurrent={current.startsWith(href)}>
						{title}
					</MenuLink>
				</li>
			))}
		</Stack>
	);
}
