import React from 'react';
import { Helmet } from 'react-helmet';
import { Image as ImageType } from '../types/Image';

const SITE_URL = 'https://tacohuaco.co';
const SITE_TITLE = 'Tacohuaco';

const getImageUrl = (
	baseUrl: string,
	{ width, height }: { width: number; height: number }
) =>
	baseUrl.replace(
		'https://media.graphcms.com/',
		`https://media.graphcms.com/resize=height:${height},width:${width}/`
	);

type Props = {
	slug: string;
	title?: string;
	description?: string;
	images: ImageType[];
	children?: React.ReactNode;
};

export default function Metatags({
	slug,
	title,
	description = 'TODO',
	images = [],
	children,
}: Props) {
	const imageUrl =
		images.length > 0 &&
		getImageUrl(images[0].url, { width: 1500, height: 1000 });
	return (
		<Helmet title={title ? `${title} — ${SITE_TITLE}` : SITE_TITLE}>
			<meta name="description" content={description} />
			{imageUrl && <meta property="og:image" content={imageUrl} />}
			<meta property="og:type" content={slug === '/' ? 'website' : 'article'} />
			<meta property="og:title" content={title} />
			<meta property="og:url" content={`${SITE_URL}${slug}`} />
			<meta property="og:site_name" content={SITE_TITLE} />
			<meta property="og:description" content={description} />
			{imageUrl && <meta name="twitter:card" content="summary_large_image" />}
			{imageUrl && <meta name="twitter:image" content={imageUrl} />}
			<meta name="twitter:creator" content="@iamsapegin" />
			{children}
		</Helmet>
	);
}
