import type { ReactNode } from 'react';
import { TextContent } from '../components';
import { PageWithTitle } from './PageWithTitle';

type Props = {
	url: string;
	children: ReactNode;
};

export function AboutPage({ url, children }: Props) {
	return (
		<PageWithTitle
			url={url}
			title={
				<>
					About Tacohuaco <span aria-hidden="true">🌮</span>
				</>
			}
		>
			<TextContent>{children}</TextContent>
		</PageWithTitle>
	);
}
