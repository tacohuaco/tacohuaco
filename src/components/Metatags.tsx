import React from 'react';
import { Helmet } from 'react-helmet';
import { getImageUrl } from '../util/client';
import { Asset } from '../types/Asset';

const SITE_URL = 'https://tacohuaco.co';
const SITE_TITLE = 'Tacohuaco';

type Props = {
	slug: string;
	title?: string;
	description?: string;
	images?: Asset[];
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
