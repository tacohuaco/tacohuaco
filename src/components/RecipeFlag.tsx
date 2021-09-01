import React from 'react';
import styled from 'styled-components';
import { Text } from 'tamia';
import { FlagName } from '../types/Flags';
import Tooltip from './Tooltip';

type Props = {
	type: FlagName;
};

type HrefProp = {
	href?: string;
};

const FlagLink = styled.a`
	display: block;
	color: inherit;
	text-decoration: none;
	border-radius: ${(p) => p.theme.radii.round};

	&:hover {
		filter: saturate(1.2) brightness(1.1);
		cursor: pointer;
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${(p) => p.theme.colors.bg},
			0 0 0 4px ${(p) => p.theme.colors.focus};
	}
`;

const TooltipWithLink = ({
	children,
	title,
	href,
}: React.ComponentProps<typeof Text> & HrefProp) => (
	<Tooltip renderTrigger={!href} value={title}>
		{href ? <FlagLink href={href}>{children}</FlagLink> : children}
	</Tooltip>
);

const Circle = ({
	children,
	title,
	color,
	href,
	...props
}: React.ComponentProps<typeof Text> & HrefProp) => (
	<TooltipWithLink href={href} title={title}>
		<Text
			as="div"
			width="2em"
			height="2em"
			p="0.3em"
			textAlign="center"
			fontFamily="ui"
			fontSize="xs"
			fontWeight="ui"
			color="bg"
			borderWidth="0.2em"
			borderRadius="round"
			backgroundColor={color}
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
	<TooltipWithLink href={href} title={title}>
		<Text
			as="div"
			width="2em"
			height="2em"
			p="0.1em"
			textAlign="center"
			fontFamily="ui"
			fontSize="xs"
			fontWeight="ui"
			borderStyle="solid"
			borderWidth="0.2em"
			borderRadius="round"
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
				<Circle href="/flags/vegan" title="Vegan" {...props} color="#6fa565">
					VG
				</Circle>
			);
		case 'vegetarian':
			return (
				<Circle
					href="/flags/vegetarian"
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
					href="/flags/gluten-free"
					title="Gluten free"
					{...props}
					color="#6c94bd"
				>
					GF
				</Circle>
			);
		case 'dairyFree':
			return (
				<Circle
					href="/flags/dairy-free"
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
					href="/flags/no-added-sugar"
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
					href="/flags/margaritas-favorite"
					title="Margarita’s favorite"
					{...props}
					color="accent"
				>
					M
				</Round>
			);
		case 'artemsFavorite':
			return (
				<Round
					href="/flags/artems-favorite"
					title="Artem’s favorite"
					{...props}
					color="accent"
				>
					A
				</Round>
			);
	}
}
