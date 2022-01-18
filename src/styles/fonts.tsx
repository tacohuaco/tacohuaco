import { createGlobalStyle } from 'styled-components';

const fontDisplay = 'fallback';

export const Fonts = createGlobalStyle`
	body {
		/* Disable hyphenation because of the issue with the Le Monde font */
		hyphens: none;
	}
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
		font-family: "LeMondeJournal";
		src: url("/fonts/Le-Monde-Journal-Std-Regular.woff2");
		font-style: normal;
		font-weight: normal;
		font-display: ${fontDisplay};
	}
	@font-face {
		font-family: "LeMondeJournal";
		src: url("/fonts/Le-Monde-Journal-Std-Italic.woff2");
		font-style: italic;
		font-weight: normal;
		font-display: ${fontDisplay};
	}
	@font-face {
		font-family: "LeMondeJournal";
		src: url("/fonts/Le-Monde-Journal-Std-Bold.woff2");
		font-style: normal;
		font-weight: bold;
		font-display: ${fontDisplay};
	}
	@font-face {
		font-family: "LeMondeJournal";
		src: url("/fonts/Le-Monde-Journal-Std-Bold-Italic.woff2");
		font-style: italic;
		font-weight: bold;
		font-display: ${fontDisplay};
	}
`;
