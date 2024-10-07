import { Heading } from '../components/Heading';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Stack } from '../components/Stack';
import { TextContent } from '../components/TextContent';
import { Markdown } from '../components/Markdown';
import type { Shop } from '../types/Shop';
import { PageWithTitle } from './PageWithTitle';

type Props = {
	url: string;
	title: string;
	shops: Shop[];
};

function FormattedAddress({
	address,
	city,
	country,
	neighbourhood,
	zip,
}: Shop) {
	return [address, zip, neighbourhood, city, country]
		.filter(Boolean)
		.join(', ');
}

function getMapLink({ name, address, city, country, zip }: Shop) {
	return `https://www.google.com/maps/?q=${encodeURIComponent(
		[name, address, zip, city, country].filter(Boolean).join(', ')
	)}`;
}

export function ShopsPage({ url, title, shops }: Props) {
	return (
		<PageWithTitle url={url} title={title}>
			<Stack as="ul" gap="l">
				{shops.map((shop) => (
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
											<FormattedAddress {...shop} />
										</Link>
									</Text>
								)}
							</Stack>
						</TextContent>
					</Stack>
				))}
			</Stack>
		</PageWithTitle>
	);
}
