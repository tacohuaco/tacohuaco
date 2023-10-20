import React from 'react';
import clsx from 'clsx';
import { TextContent as TextContentBase } from '../tamia';
import { container, containerSmall, containerIntro } from './TextContent.css';

const variants = {
	small: containerSmall,
	intro: containerIntro,
};

type Props = {
	children?: React.ReactNode;
	variant?: keyof typeof variants;
};

export function TextContent({ children, variant }: Props) {
	return (
		<TextContentBase className={clsx(container, variant && variants[variant])}>
			{children}
		</TextContentBase>
	);
}
