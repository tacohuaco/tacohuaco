const canUseDOM = () =>
	Boolean(
		typeof globalThis !== 'undefined' &&
			globalThis.document &&
			globalThis.document.createElement
	);

/**
 * A hook that indicates whether the component is run in the browser environment.
 */
export function useIsBrowser(): boolean {
	return canUseDOM();
}
