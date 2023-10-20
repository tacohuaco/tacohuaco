import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const container = style({});
export const containerSmall = style({});
export const containerIntro = style({});

// TODO: Where do we use this?
globalStyle(`${container} hr`, {
	textAlign: 'center',
	border: 0,
	// Make top and bottom margins more or less the same
	marginBlock: '2.5rem',
});
globalStyle(`${container} hr::after`, {
	content: '···',
	letterSpacing: '0.7em',
});

globalStyle(`${containerSmall} p`, {
	fontSize: vars.fontSizes.s,
});

globalStyle(`${containerIntro} p`, {
	fontSize: vars.fontSizes.l,
	fontStyle: 'italic',
});
