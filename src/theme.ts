import { type Config } from '@pandacss/dev';

export const colors = {
	background: '#fff',
	text: '#362a1b',
	primary: '#362a1b',
	border: '#362a1b',
	dim: '#664f33',
	light: '#eee6dd',
	accent: '#c94a4a',
	moon: '#7277c0',
	selection: '#faebaf',
};

export const colorsDark = {
	background: '#362a1b',
	text: '#d7cbc1',
	primary: '#d7cbc1',
	border: '#d7cbc1',
	dim: '#d1c1b8',
	light: '#5e4f3d',
	accent: '#f06958',
	moon: '#7277c0',
	selection: '#61656b',
};

export const lineHeights = {
	base: '1.5',
	small: '1.4',
	heading: '1.1',
	code: '1.3',
};

function createPalette(
	light: Record<string, string>,
	dark: Record<string, string>
) {
	const palette: Record<string, { value: { base: string; _osDark: string } }> =
		{};
	for (const name in light) {
		palette[name] = {
			value: { base: light[name], _osDark: dark[name] },
		};
	}
	return palette;
}

export const theme = {
	theme: {
		extend: {
			tokens: {
				fonts: {
					body: { value: "ProximaNova, 'Helvetica Neue', Arial, sans-serif" },
					heading: { value: "AzoSans, 'Helvetica Neue', Arial, sans-serif" },
					ui: { value: "AzoSans, 'Helvetica Neue', Arial, sans-serif" },
				},
				fontSizes: {
					xxl: { value: '2.1rem' },
					xl: { value: '1.3rem' },
					l: { value: '1.1rem' },
					m: { value: '1rem' },
					s: { value: '0.9rem' },
					xs: { value: '0.75rem' },
				},
				fontWeights: {
					normal: { value: '400' },
					heading: { value: '400' },
					bold: { value: '800' },
					ui: { value: '800' },
				},
				lineHeights: {
					base: { value: '1.5' },
					heading: { value: '1.1' },
					small: { value: '1.4' },
					large: { value: '1.8' },
				},
				letterSpacings: {
					base: { value: '0' },
					heading: { value: '0' },
					uppercase: { value: '0.15ex' },
				},
				borders: {
					input: { value: '2px solid' },
					thin: { value: '1px solid' },
				},
				radii: {
					base: { value: '1px' },
					button: { value: '0' },
					round: { value: '99999px' },
				},
				shadows: {
					popover: { value: '0 6px 20px -2px hsla(0,0%,0%,0.2)' },
					menu: {
						value: `5px 5px 0 -2px ${colors.bg}, 5px 5px 0 ${colors.accent}`,
					},
					input: { value: `5px 5px 0 ${colors.accent}` },
					heading: { value: `2px 2px 0 ${colors.light}` },
				},
				easings: {
					expand: { value: 'ease-in-out' },
					fade: { value: 'ease-out' },
					hover: { value: 'ease-in' },
				},
				durations: {
					expand: { value: '300ms' },
					fade: { value: '0.15s' },
					hover: { value: '0.1s' },
				},
			},
			semanticTokens: {
				colors: createPalette(colors, colorsDark),
				fontSizes: {
					root: { value: '1.125em' },
					article: { value: '1.1rem' },
				},
				spacing: {
					listMargin: { value: '1.2rem' },
				},
				sizes: {
					textMaxWidth: { value: '52rem' },
				},
			},
		},
	},

	// TODO: Extract
	globalCss: {
		// Top and bottom lines
		body: {
			minHeight: '100vh',
			position: 'relative',
			_before: {
				content: `''`,
				position: 'absolute',
				left: 0,
				right: 0,
				height: 'token(spacing.s)',
				backgroundColor: 'accent',
				top: 0,
			},
			_after: {
				content: `''`,
				position: 'absolute',
				left: 0,
				right: 0,
				height: 'token(spacing.s)',
				backgroundColor: 'accent',
				bottom: 0,
			},
		},
	},
} as const satisfies Config;
