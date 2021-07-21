import React from 'react';
import { Text } from 'tamia';
import { Flags } from '../util/client';
import Tooltip from './Tooltip';

type Props = {
	// TODO: Split into two components?
	type: keyof Flags | 'margaritasFavorite' | 'artemsFavorite';
};

const Circle = ({
	children,
	title,
	color,
	...props
}: React.ComponentProps<typeof Text>) => (
	<Tooltip value={title}>
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
	</Tooltip>
);

const Round = ({
	children,
	title,
	...props
}: React.ComponentProps<typeof Text>) => (
	<Tooltip value={title}>
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
	</Tooltip>
);

export default function Flag({ type, ...props }: Props) {
	switch (type) {
		case 'vegan':
			return (
				<Circle title="Vegan" {...props} color="#6fa565">
					VG
				</Circle>
			);
		case 'vegetarian':
			return (
				<Circle title="Vegetarian" {...props} color="#ebd660">
					V
				</Circle>
			);
		case 'glutenFree':
			return (
				<Circle title="Gluten free" {...props} color="#6c94bd">
					GF
				</Circle>
			);
		case 'diaryFree':
			return (
				<Circle title="Diary free" {...props} color="#a67bb1">
					DF
				</Circle>
			);
		case 'noAddedSugar':
			return (
				<Circle title="No added sugar" {...props} color="#887676">
					NS
				</Circle>
			);
		case 'margaritasFavorite':
			return (
				<Round title="Margarita’s favorite" {...props} color="accent">
					M
				</Round>
			);
		case 'artemsFavorite':
			return (
				<Round title="Artem’s favorite" {...props} color="accent">
					A
				</Round>
			);
	}
}