import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

const ARROW_SIZE = vars.space.xs;

export const trigger = style({
	position: 'relative',
});

export const defaultTrigger = style({
	padding: 0,
	border: 0,
	background: 'none',
});

export const tooltip = style({
	pointerEvents: 'none',
	opacity: 0,
	position: 'absolute',
	left: '50%',
	bottom: `calc(${ARROW_SIZE} * -2)`,
	transform: 'translate(-50%, 100%)',
	paddingInline: vars.space.xs,
	paddingBlock: vars.space.xxs,
	fontFamily: vars.fonts.ui,
	fontSize: vars.fontSizes.xs,
	fontWeight: vars.fontWeights.base,
	color: vars.colors.bg,
	textAlign: 'center',
	borderRadius: vars.radii.base,
	backgroundColor: vars.colors.accent,
	whiteSpace: 'nowrap',
	transition: vars.transitions.hover,
	transitionProperty: 'opacity',
	'::after': {
		content: '',
		position: 'absolute',
		top: `calc(${ARROW_SIZE} * -1 + 1px)`,
		left: `calc(50% - ${ARROW_SIZE})`,
		color: vars.colors.accent,
		borderLeft: `${ARROW_SIZE} solid transparent`,
		borderRight: `${ARROW_SIZE} solid transparent`,
		borderBottom: `${ARROW_SIZE} solid`,
	},
});

globalStyle(`${trigger}:hover ${tooltip}, ${trigger}:focus ${tooltip}`, {
	opacity: 1,
});
