import React, { ComponentProps, ComponentType } from 'react';
import { Text, Box } from 'tamia';
import { FlagName } from '../types/Flags';
import { Tooltip } from './Tooltip';

type Props = {
	type: FlagName;
};

type HrefProp = {
	href?: string;
};

const FlagLinkBase = ({ sx, ...props }: ComponentProps<typeof Box>) => (
	<Box
		as="a"
		sx={{
			color: 'inherit',
			textDecoration: 'none',
			borderRadius: 'round',
			':focus': {
				outline: 'focus',
				outlineColor: 'accent',
				outlineOffset: '2px',
			},
			...sx,
		}}
		{...props}
	/>
);

const FlagCircleLink = (props: ComponentProps<typeof Box>) => (
	<FlagLinkBase
		sx={{
			':hover': {
				filter: 'saturate(1.2) brightness(1.1)',
				cursor: 'pointer',
			},
		}}
		{...props}
	/>
);

const FlagRoundLink = (props: ComponentProps<typeof Box>) => (
	<FlagLinkBase
		sx={{
			color: 'accent',
			':hover': {
				bg: 'accent',
				color: 'bg',
			},
		}}
		{...props}
	/>
);

const TooltipWithLink = ({
	children,
	title,
	href,
	linkComponent: Link,
}: React.ComponentProps<typeof Text> &
	HrefProp & { linkComponent: ComponentType<any> }) => (
	<Tooltip renderTrigger={!href} value={title}>
		{href ? <Link href={href}>{children}</Link> : children}
	</Tooltip>
);

const Circle = ({
	children,
	title,
	color,
	href,
	...props
}: React.ComponentProps<typeof Text> & HrefProp) => (
	<TooltipWithLink href={href} title={title} linkComponent={FlagCircleLink}>
		<Text
			as="div"
			sx={{
				width: '2em',
				height: '2em',
				p: '0.3em',
				textAlign: 'center',
				fontFamily: 'ui',
				fontSize: 'xs',
				fontWeight: 'ui',
				color: 'bg',
				borderWidth: '0.2em',
				borderRadius: 'round',
				backgroundColor: color,
			}}
			{...props}
		>
			{children}
		</Text>
	</TooltipWithLink>
);

const Round = ({
	children,
	title,
	href,
	...props
}: React.ComponentProps<typeof Text> & HrefProp) => (
	<TooltipWithLink href={href} title={title} linkComponent={FlagRoundLink}>
		<Text
			as="div"
			sx={{
				width: '2em',
				height: '2em',
				p: '0.1em',
				textAlign: 'center',
				fontFamily: 'ui',
				fontSize: 'xs',
				fontWeight: 'ui',
				borderStyle: 'solid',
				borderWidth: '0.2em',
				borderRadius: 'round',
				borderColor: 'accent',
				color: 'inherit',
			}}
			{...props}
		>
			{children}
		</Text>
	</TooltipWithLink>
);

export function RecipeFlag({ type, ...props }: Props) {
	switch (type) {
		case 'vegan':
			return (
				<Circle href="/flags/vegan/" title="Vegan" {...props} color="#6fa565">
					VG
				</Circle>
			);
		case 'vegetarian':
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
		case 'glutenFree':
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
		case 'lowGluten':
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
		case 'dairyFree':
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
		case 'noAddedSugar':
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
		case 'margaritasFavorite':
			return (
				<Round
					href="/flags/margaritas-favorite/"
					title="Margarita’s favorite"
					{...props}
				>
					M
				</Round>
			);
		case 'artemsFavorite':
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
