import { style, globalStyle } from '@vanilla-extract/css';

export const inner = style({
	overflow: 'hidden',
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

globalStyle(`${inner} > :is(img, video)`, {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
});
