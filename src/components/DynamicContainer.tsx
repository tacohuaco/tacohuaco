import React, { useState, useEffect, ReactNode, Fragment } from 'react';

type Props = {
	children: ReactNode;
};

/**
 * Returns the key that changes depending on client or server rendering
 */
function useClientKey() {
	const [isClient, setClient] = useState(false);

	useEffect(() => {
		setClient(true);
	}, []);

	return isClient ? 'client' : 'server';
}

/**
 * Rerenders the content on client rehydration to avoid the issues with dynamic data
 * https://blog.logrocket.com/fixing-gatsbys-rehydration-issue/
 */
export function DynamicContainer({ children }: Props) {
	const key = useClientKey();
	return <Fragment key={key}>{children}</Fragment>;
}
