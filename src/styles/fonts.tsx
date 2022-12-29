import { createGlobalStyle } from 'styled-components';

const fontDisplay = 'fallback';

export const Fonts = createGlobalStyle`
	@font-face {
		font-family: "AzoSans";
		src: url("/fonts/Azo-Sans-Light.woff2");
		font-style: normal;
		font-weight: normal;
		font-display: ${fontDisplay};
	}
	@font-face {
		font-family: "AzoSans";
		src: url("/fonts/Azo-Sans-Light-Italic.woff2");
		font-style: italic;
		font-weight: normal;
		font-display: ${fontDisplay};
	}
	@font-face {
		font-family: "AzoSans";
		src: url("/fonts/Azo-Sans-Regular.woff2");
		font-style: normal;
		font-weight: bold;
		font-display: ${fontDisplay};
	}

	@font-face {
		font-family: "ProximaNova";
		src: url("/fonts/Proxima-Nova-Regular.woff2");
		font-style: normal;
		font-weight: normal;
		font-display: ${fontDisplay};
	}
	@font-face {
		font-family: "ProximaNova";
		src: url("/fonts/Proxima-Nova-Italic.woff2");
		font-style: italic;
		font-weight: normal;
		font-display: ${fontDisplay};
	}
	@font-face {
		font-family: "ProximaNova";
		src: url("/fonts/Proxima-Nova-Bold.woff2");
		font-style: normal;
		font-weight: bold;
		font-display: ${fontDisplay};
	}
	@font-face {
		font-family: "ProximaNova";
		src: url("/fonts/Proxima-Nova-Bold-Italic.woff2");
		font-style: italic;
		font-weight: bold;
		font-display: ${fontDisplay};
	}
`;
