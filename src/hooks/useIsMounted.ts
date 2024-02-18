import { useRef, useEffect, useCallback } from 'react';

/**
 * A hook that indicates whether the component is mounted or not.
 * Based on https://github.com/hupe1980/react-is-mounted-hook
 */
export function useIsMounted(): () => boolean {
	const ref = useRef(false);

	useEffect(() => {
		ref.current = true;
		return () => {
			ref.current = false;
		};
	}, []);

	return useCallback(() => ref.current, [ref]);
}
