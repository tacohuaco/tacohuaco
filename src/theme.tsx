const baseFont = 'LeMondeJournal, Georgia, serif';
const headingFont = 'AzoSans, Helvetica Neue, sans-serif';
const space = {
	0: 0,
	xxs: '0.125rem', // 2px
	xs: '0.25rem', // 4px
	s: '0.5rem', // 8px
	m: '1rem', // 16px
	l: '2rem', // 32px
	xl: '4rem', // 64px
	xxl: '8rem', // 128px
	xxxl: '16rem', // 256px
	'-xxs': '-0.125rem', // 2px
	'-xs': '-0.25rem', // 4px
	'-s': '-0.5rem', // 8px
	'-m': '-1rem', // 16px
	'-l': '-2rem', // 32px
	'-xl': '-4rem', // 64px
	'-xxl': '-8rem', // 128px
	'-xxxl': '-16rem', // 256px
};
const breakpoints = [
	'38rem', // 608px
	'48rem', // 768px
	'66rem', // 1056px
	'75rem', // 1200px
];
const fonts = {
	base: baseFont,
	heading: headingFont,
	ui: headingFont,
};
const fontSizes = {
	base: '1rem',
	xxl: '2.1rem',
	xl: '1.3rem',
	l: '1.1rem',
	m: '1rem',
	s: '0.9rem',
	xs: '0.75rem',
};
const colors = {
	bg: '#fff',
	base: '#362a1b',
	primary: '#362a1b',
	dim: '#664f33',
	light: '#eee6dd',
	hover: '#dc3737',
	focus: '#dc3737',
	accent: '#d05656',
	moon: '#7277c0',
	selection: 'rgb(255,237,117)',
	selectionAlpha: 'rgba(255,237,117,0.25)',
};
const borders = {
	focus: '3px solid',
	input: '2px solid',
	thin: '1px solid',
};
const radii = {
	base: '0.15rem',
	button: '0.25rem',
	round: '99999px',
};
const shadows = {
	popover: '0 6px 15px -2px hsla(0,0%,0%,0.25)',
};
const fontWeights = {
	base: 'normal',
	heading: 'bold',
	ui: 'bold',
};
const lineHeights = {
	base: 1.5,
	heading: 1.1,
	small: 1.4,
	large: 1.8,
};
const letterSpacings = {
	base: 0,
	heading: '0.05ex',
	uppercase: '0.15ex',
};
const headingBaseStyles = {
	color: 'base',
	fontFamily: 'heading',
	fontWeight: 'heading',
	lineHeight: 'heading',
	letterSpacing: 'heading',
};
const textBaseStyles = {
	color: 'base',
	fontFamily: 'base',
	fontWeight: 'base',
	lineHeight: 'base',
	letterSpacing: 'base',
};

const theme = {
	baseFontSize: '1.125em',
	blockMarginBottom: space.m,
	headingMarginTop: space.l,
	listMargin: '1.2rem',
	focusOutlineOffset: '2px',
	page: {
		bodyPaddingX: 0,
		bodyPaddingY: 0,
		contentMaxWidth: '59rem',
		contentPaddingX: space.m,
		contentPaddingY: space.l,
		textMaxWidth: '44rem',
	},
	fonts,
	space,
	fontSizes,
	fontWeights,
	lineHeights,
	letterSpacings,
	colors,
	borders,
	radii,
	shadows,
	breakpoints,
	headingStyles: {
		1: {
			...headingBaseStyles,
			fontWeight: 'base',
			fontSize: 'xxl',
			letterSpacing: 'base',
		},
		2: {
			...headingBaseStyles,
			fontSize: 'xl',
		},
		3: {
			...headingBaseStyles,
			fontSize: 'm',
		},
	},
	textStyles: {
		base: {
			...textBaseStyles,
			fontSize: 'm',
		},
		small: {
			...textBaseStyles,
			fontSize: 's',
		},
		ui: {
			...textBaseStyles,
			fontFamily: 'ui',
			fontSize: 'm',
		},
		xsmall: {
			...textBaseStyles,
			fontFamily: 'ui',
			fontSize: 'xs',
		},
		italic: {
			...textBaseStyles,
			fontStyle: 'italic',
		},
		menu: {
			...headingBaseStyles,
			fontSize: 'm',
			fontWeight: 'normal',
			textTransform: 'uppercase',
			letterSpacing: 'uppercase',
		},
	},
} as const;

export default theme;

export const inverted = {
	...theme,
	colors: {
		...theme.colors,
		bg: colors.accent,
		base: colors.bg,
		primary: colors.bg,
		hover: '#fff',
		accent: '#fff',
	},
} as const;
