import { Box } from './Box';
import { MenuLink } from './MenuLink';

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
		title: 'Calendar',
		href: '/cal/',
	},
	{
		title: 'Coffee',
		href: '/coffee/',
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
		<Box
			as="ul"
			textAlign="center"
			rowGap="m"
			columnGap={{ base: 0, desktop: 'm' }}
			display={{ base: 'grid', desktop: 'flex' }}
			gridTemplateColumns="repeat(auto-fit, minmax(8rem, 1fr))"
		>
			{ITEMS.map(({ title, href }) => (
				<Box as="li" key={href}>
					<MenuLink href={href} isCurrent={current.startsWith(href)}>
						{title}
					</MenuLink>
				</Box>
			))}
		</Box>
	);
}
