import React from 'react';
import { getImageUrl, stripMarkdown } from '../util/client';
import { Asset } from '../types/Asset';
import theme from '../theme';
import {
	SITE_DESCRIPTION,
	SITE_TITLE,
	SITE_INDEX_TITLE,
	SITE_URL,
} from '../shared';

type Props = {
	slug: string;
	title?: string;
	description?: string;
	images?: readonly Asset[];
	children?: React.ReactNode;
};

const TACO_SVG =
	'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌮</text></svg>';

export function Metatags({
	slug,
	title,
	description,
	images = [],
	children,
}: Props) {
	const imageUrl =
		images.length > 0 &&
		getImageUrl(images[0].url, { width: 1500, height: 1000 });
	const descriptionText = stripMarkdown(description || SITE_DESCRIPTION);
	return (
		<>
			<title>{title ? `${title} — ${SITE_TITLE}` : SITE_INDEX_TITLE}</title>
			<link rel="icon" href={TACO_SVG} />
			<meta name="theme-color" content={theme.colors.accent} />
			<meta name="description" content={descriptionText} />
			{imageUrl && <meta property="og:image" content={imageUrl} />}
			<meta property="og:type" content={slug === '/' ? 'website' : 'article'} />
			<meta property="og:title" content={title} />
			<meta property="og:url" content={`${SITE_URL}${slug}`} />
			<meta property="og:site_name" content={SITE_TITLE} />
			<meta property="og:description" content={descriptionText} />
			{imageUrl && <meta name="twitter:card" content="summary_large_image" />}
			{imageUrl && <meta name="twitter:image" content={imageUrl} />}
			<meta name="twitter:creator" content="@iamsapegin" />
			{children}
		</>
	);
}
