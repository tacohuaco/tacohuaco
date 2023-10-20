import { Children, type ReactNode } from 'react';
import { typo } from '../../util/typo';

// TODO: It's using a custom typography function which makes it impossible to
// extract Tamia as it is. Possibly we should inject typography function as a prop

type TypoProps = {
	children: ReactNode;
};

/**
 * Enhance typography
 */
export function Typo({ children }: TypoProps) {
	return Children.map(children, (child) => {
		if (typeof child === 'string' && child.trim() !== '') {
			const result = typo(child);
			if (result.includes('<')) {
				// Use dangerouslySetInnerHTML when the result contains HTML
				// (for example, <nobr>
				return <span dangerouslySetInnerHTML={{ __html: result }} />;
			} else {
				return result;
			}
		} else {
			return child;
		}
	});
}
