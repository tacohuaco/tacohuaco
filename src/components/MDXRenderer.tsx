import React from 'react';
import { mdx } from '@mdx-js/react';

interface MDXRendererProps {
	children: string;
}

// Based on gatsby-plugin-mdx
export function MDXRenderer({ children, ...props }: MDXRendererProps) {
	// Memoize the compiled component
	const End = React.useMemo(() => {
		if (!children) {
			return null;
		}

		const fullScope: Record<string, unknown> = {
			mdx,
		};

		const keys = Object.keys(fullScope);
		const values = keys.map((key) => fullScope[key]);
		// eslint-disable-next-line no-new-func
		const fn = new Function(`_fn`, ...keys, `${children}`);

		return fn({}, ...values);
	}, [children]);

	return React.createElement(End, { ...props });
}
