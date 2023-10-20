import {
	Heading,
	Link,
	Markdown,
	Stack,
	Text,
	TextContent,
} from '../components';
import type { Shop } from '../types/Shop';
import { PageWithTitle } from './PageWithTitle';

type Props = {
	url: string;
	title: string;
	shops: Shop[];
};

const formatAddress = ({ address, city, country, neighbourhood, zip }: Shop) =>
	[address, zip, neighbourhood, city, country].filter(Boolean).join(', ');

const getMapLink = ({ name, address, city, country, zip }: Shop) =>
	`https://www.google.com/maps/?q=${encodeURIComponent(
		[name, address, zip, city, country].filter(Boolean).join(', ')
	)}`;

export function ShopsPage({ url, title, shops }: Props) {
	return (
		<PageWithTitle url={url} title={title}>
			<Stack as="ul" gap="l">
				{shops.map((shop) => {
					return (
						<Stack key={shop.name} as="li" gap="m">
							<TextContent>
								<Heading level={2}>
									{shop.url ? (
										<Link href={shop.url}>{shop.name}</Link>
									) : (
										shop.name
									)}
								</Heading>
								<Stack gap="m">
									{shop.description && (
										<TextContent variant="small">
											<Markdown text={shop.description} />
										</TextContent>
									)}
									{shop.address && (
										<Text variant="small">
											<Link
												href={getMapLink(shop)}
												target="_blank"
												rel="noopener"
											>
												{formatAddress(shop)}
											</Link>
										</Text>
									)}
								</Stack>
							</TextContent>
						</Stack>
					);
				})}
			</Stack>
		</PageWithTitle>
	);
}
