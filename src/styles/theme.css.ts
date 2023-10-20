import { defaultTheme, createTheme, type Theme } from '../tamia';
import { fonts } from './fonts.css';

export const colors = {
	bg: '#fff',
	base: '#362a1b',
	primary: '#362a1b',
	border: '#362a1b',
	dim: '#664f33',
	light: '#eee6dd',
	hover: '#c94a4a',
	focus: '#c94a4a',
	accent: '#c94a4a',
	moon: '#7277c0',
	selection: 'rgb(255,237,117)',
	selectionAlpha: 'rgba(255,237,117,0.25)',
};

export const theme = {
	...defaultTheme,
	baseFontSize: '1.125em',
	blockMarginBottom: defaultTheme.space.m,
	headingMarginTop: defaultTheme.space.l,
	listMargin: '1.2rem',
	page: {
		textMaxWidth: '52rem',
		contentPaddingX: defaultTheme.space.m,
		contentPaddingY: defaultTheme.space.l,
		contentMaxWidth: '59rem',
	},
	colors,
	fonts: {
		base: [fonts.base, 'sans-serif'].join(', '),
		heading: [fonts.heading, 'serif'].join(', '),
		ui: [fonts.heading, 'sans-serif'].join(', '),
	},
	fontSizes: {
		base: '1rem',
		xxl: '2.1rem',
		xl: '1.3rem',
		l: '1.1rem',
		m: '1rem',
		s: '0.9rem',
		xs: '0.75rem',
	},
	fontWeights: {
		base: 'normal',
		bold: 'bold',
		heading: 'bold',
		ui: 'bold',
	},
	lineHeights: {
		base: '1.5',
		heading: '1.1',
		small: '1.4',
		large: '1.8',
	},
	letterSpacings: {
		base: '0',
		heading: '0',
		uppercase: '0.15ex',
	},
	borders: { focus: '2px solid', input: '2px solid', thin: '1px solid' },
	radii: {
		base: '1px',
		button: '0',
		round: '99999px',
	},
	shadows: {
		popover: '0 6px 20px -2px hsla(0,0%,0%,0.2)',
		menu: `5px 5px 0 -2px ${colors.bg}, 5px 5px 0 ${colors.accent}`,
		input: `5px 5px 0 ${colors.accent}`,
		heading: `2px 2px 0 ${colors.light}`,
	},
	transitions: {
		expand: '300ms ease-in-out',
		fade: '0.15s ease-out',
		hover: '0.1s ease-in',
	},
} as const satisfies Theme;

export const [themeClass, vars] = createTheme(theme);
