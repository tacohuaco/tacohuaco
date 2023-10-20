import { globalFontFace } from '@vanilla-extract/css';

export const fonts = {
	base: 'ProximaNova',
	heading: 'AzoSans',
};

globalFontFace(fonts.base, {
	src: 'url("/fonts/Proxima-Nova-Regular.woff2")',
	fontDisplay: 'fallback',
});

globalFontFace(fonts.base, {
	src: 'url("/fonts/Proxima-Nova-Italic.woff2")',
	fontStyle: 'italic',
	fontDisplay: 'fallback',
});

globalFontFace(fonts.base, {
	src: 'url("/fonts/Proxima-Nova-Bold.woff2")',
	fontWeight: 'bold',
	fontDisplay: 'fallback',
});

globalFontFace(fonts.base, {
	src: 'url("/fonts/Proxima-Nova-Bold-Italic.woff2")',
	fontWeight: 'bold',
	fontStyle: 'italic',
	fontDisplay: 'fallback',
});

globalFontFace(fonts.heading, {
	src: 'url("/fonts/Azo-Sans-Light.woff2")',
	fontDisplay: 'fallback',
});

globalFontFace(fonts.heading, {
	src: 'url("/fonts/Azo-Sans-Light-Italic.woff2")',
	fontStyle: 'italic',
	fontDisplay: 'fallback',
});

globalFontFace(fonts.heading, {
	src: 'url("/fonts/Azo-Sans-Regular.woff2")',
	fontWeight: 'bold',
	fontDisplay: 'fallback',
});
