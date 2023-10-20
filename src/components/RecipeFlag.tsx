import clsx from 'clsx';
import { type ComponentProps, type ComponentType, type ReactNode } from 'react';
import { Text, Box, Tooltip } from '.';
import {
	circle,
	flagCircleLink,
	flagLinkBase,
	flagRoundLink,
	round,
} from './RecipeFlag.css';
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

const FlagCircleLink = (props: ComponentProps<typeof Box>) => (
	<Box
		as="a"
		{...props}
		className={clsx(flagLinkBase, flagCircleLink, props.className)}
	/>
);

const FlagRoundLink = (props: ComponentProps<typeof Box>) => (
	<Box
		as="a"
		{...props}
		className={clsx(flagLinkBase, flagRoundLink, props.className)}
	/>
);

const TooltipWithLink = ({
	children,
	title,
	href,
	// eslint-disable-next-line @typescript-eslint/naming-convention
	linkComponent: Link,
}: React.ComponentProps<typeof Text> &
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
	<TooltipWithLink href={href} title={title} linkComponent={FlagCircleLink}>
		<Text
			as="span"
			aria-hidden="true"
			className={circle}
			style={{ backgroundColor: color }}
			{...props}
		>
			{children}
		</Text>
	</TooltipWithLink>
);

const Round = ({ children, title, href, ...props }: FlagProps & HrefProp) => (
	<TooltipWithLink href={href} title={title} linkComponent={FlagRoundLink}>
		<Text
			as="span"
			aria-hidden="true"
			className={clsx(circle, round)}
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
