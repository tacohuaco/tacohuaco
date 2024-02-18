import { useRef, useEffect } from 'react';

const canUseDOM = () =>
	!!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

/**
 * A hook that indicates whether the component is run in the browser environment.
 */
export function useIsBrowser(): boolean {
	const ref = useRef(false);

	useEffect(() => {
		ref.current = canUseDOM();
		return () => {
			ref.current = false;
		};
	}, []);

	return ref.current;
}
