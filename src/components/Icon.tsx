import { Icon as IconBase } from '../tamia';

type IconInfo = {
	width?: number;
	height?: number;
	path?: string;
	children?: React.ReactElement;
};

const ICONS: { [key: string]: IconInfo } = {
	moon: {
		width: 100,
		height: 100,
		path: 'M35.524 12C20.584 17.536 12 31.924 12 48.789 12 70.445 29.555 88 51.211 88 68.076 88 82.464 79.415 88 64.476c-4.466 1.796-9.34 2.715-14.448 2.715-21.404 0-40.743-19.34-40.743-40.743 0-5.109.919-9.982 2.715-14.448z',
	},
};

export type IconName = keyof typeof ICONS;

type Props = {
	icon: IconName;
	size: string | number;
};

export function Icon({ icon, size }: Props) {
	const { path, children, width, height } = ICONS[icon];
	return (
		<IconBase
			viewBox={{
				width: width || 512,
				height: height || 512,
			}}
			width={size}
			height={size}
		>
			{children}
			{path && <path d={path} />}
		</IconBase>
	);
}
