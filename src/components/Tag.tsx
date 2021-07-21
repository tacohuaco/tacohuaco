import styled from 'styled-components';
import { Link } from 'tamia';

export default styled(Link)`
	&,
	&:link,
	&:visited {
		display: inline-block;
		padding: 0.1ex ${(p) => p.theme.space.xs} 0;
		font-family: ${(p) => p.theme.fonts.ui};
		font-size: ${(p) => p.theme.fontSizes.s};
		line-height: ${(p) => p.theme.lineHeights.base};
		background-color: ${(p) => p.theme.colors.light};
		color: ${(p) => p.theme.colors.dim};
		border-radius: ${(p) => p.theme.radii.base};
		text-decoration: none;
	}
	&:hover,
	&:active {
		color: ${(p) => p.theme.colors.hover};
		cursor: pointer;
	}
`;
