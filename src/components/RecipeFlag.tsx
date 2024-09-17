import { type ComponentProps, type ComponentType, type ReactNode } from 'react';
import { Text, Box, Tooltip } from '.';
import type { FlagName } from '../types/Flags';

type Props = {
	type: FlagName;
};

type HrefProp = {
	href?: string;
};

type ColorProp = {
	color?: string;
};

type FlagProps = {
	title?: string;
	children?: ReactNode;
};

const FlagLink = (props: ComponentProps<typeof Box>) => (
	<Box
		as="a"
		{...props}
		css={{
			color: 'inherit',
			textDecoration: 'none',
			borderRadius: 'round',
			_focus: {
				outline: 'focus',
				outlineColor: 'accent',
				outlineOffset: 'token(borderWidths.focusOutlineOffset)',
			},
		}}
	/>
);

const TooltipWithLink = ({
	children,
	title,
	href,
	linkComponent: Link,
}: React.ComponentProps<typeof Text> &
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	HrefProp & { linkComponent: ComponentType<any> }) => (
	<Tooltip value={title}>
		{({ triggerProps, tooltipNode }) => (
			<Link href={href} {...triggerProps}>
				{tooltipNode}
				{children}
			</Link>
		)}
	</Tooltip>
);

const Circle = ({
	children,
	title,
	color,
	href,
	...props
}: FlagProps & HrefProp & ColorProp) => (
	<TooltipWithLink href={href} title={title} linkComponent={FlagLink}>
		<Box
			as="span"
			aria-hidden="true"
			css={{
				display: 'block',
				width: '2em',
				height: '2em',
				padding: '0.3em',
				textAlign: 'center',
				fontFamily: 'ui',
				fontSize: 'xs',
				fontWeight: 'ui',
				color: 'bg',
				borderWidth: '0.2em',
				borderRadius: 'round',
				'a:hover &': {
					filter: 'saturate(1.2) brightness(1.1)',
					cursor: 'pointer',
				},
			}}
			style={{ backgroundColor: color }}
			{...props}
		>
			{children}
		</Box>
	</TooltipWithLink>
);

const Round = ({ children, title, href, ...props }: FlagProps & HrefProp) => (
	<TooltipWithLink href={href} title={title} linkComponent={FlagLink}>
		<Box
			as="span"
			aria-hidden="true"
			css={{
				display: 'block',
				width: '2em',
				height: '2em',
				padding: '0.1em',
				textAlign: 'center',
				fontFamily: 'ui',
				fontSize: 'xs',
				fontWeight: 'ui',
				color: 'accent',
				borderWidth: '0.2em',
				borderRadius: 'round',
				borderStyle: 'solid',
				borderColor: 'accent',
				'a:hover &': {
					backgroundColor: 'accent',
					color: 'bg',
					cursor: 'pointer',
				},
			}}
			{...props}
		>
			{children}
		</Box>
	</TooltipWithLink>
);

export function RecipeFlag({ type, ...props }: Props) {
	switch (type) {
		case 'vegan': {
			return (
				<Circle href="/flags/vegan/" title="Vegan" {...props} color="#6fa565">
					VG
				</Circle>
			);
		}
		case 'vegetarian': {
			return (
				<Circle
					href="/flags/vegetarian/"
					title="Vegetarian"
					{...props}
					color="#ebd660"
				>
					V
				</Circle>
			);
		}
		case 'glutenFree': {
			return (
				<Circle
					href="/flags/gluten-free/"
					title="Gluten free"
					{...props}
					color="#6c94bd"
				>
					GF
				</Circle>
			);
		}
		case 'lowGluten': {
			return (
				<Circle
					href="/flags/low-gluten/"
					title="Low gluten"
					{...props}
					color="#78bdc9"
				>
					LG
				</Circle>
			);
		}
		case 'dairyFree': {
			return (
				<Circle
					href="/flags/dairy-free/"
					title="Dairy free"
					{...props}
					color="#a67bb1"
				>
					DF
				</Circle>
			);
		}
		case 'noAddedSugar': {
			return (
				<Circle
					href="/flags/no-added-sugar/"
					title="No refined sugar"
					{...props}
					color="#887676"
				>
					NS
				</Circle>
			);
		}
		case 'margaritasFavorite': {
			return (
				<Round
					href="/flags/margaritas-favorite/"
					title="Margarita’s favorite"
					{...props}
				>
					M
				</Round>
			);
		}
		case 'artemsFavorite': {
			return (
				<Round
					href="/flags/artems-favorite/"
					title="Artem’s favorite"
					{...props}
				>
					A
				</Round>
			);
		}
	}
}
