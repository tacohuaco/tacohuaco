import React, { ComponentProps } from 'react';
import { random, sample } from 'lodash';
import { Link } from 'gatsby';
import { Box, Stack, Text } from 'tamia';
import {
	Taco,
	TORTILLAS,
	FILLINGS,
	EYES,
	NOSES,
	MOUTHES,
	GLASSES,
} from './Taco';

const TORTILLA_NAMES = Object.keys(TORTILLAS) as (keyof typeof TORTILLAS)[];
const FILLING_NAMES = Object.keys(FILLINGS) as (keyof typeof FILLINGS)[];
const EYES_NAMES = Object.keys(EYES) as (keyof typeof EYES)[];
const NOSE_NAMES = Object.keys(NOSES) as (keyof typeof NOSES)[];
const MOUTH_NAMES = Object.keys(MOUTHES) as (keyof typeof MOUTHES)[];
const GLASSES_NAMES = Object.keys(GLASSES) as (keyof typeof GLASSES)[];

const EYES_FOR_GLASSES: (keyof typeof EYES)[] = ['small'];

const getTacoProps = (): ComponentProps<typeof Taco> => {
	const eyes = sample(EYES_NAMES);
	const glasses =
		eyes && EYES_FOR_GLASSES.includes(eyes) && random() > 0.8
			? sample(GLASSES_NAMES)
			: undefined;
	return {
		tortilla: sample(TORTILLA_NAMES),
		filling: sample(FILLING_NAMES),
		eyes,
		nose: sample(NOSE_NAMES),
		mouth: sample(MOUTH_NAMES),
		glasses,
	};
};

export const GatsbyLink = Text.withComponent(Link);

export function Logo() {
	return (
		<GatsbyLink
			to="/"
			variant="menu"
			sx={{
				':link,:visited': {
					transition: 'hover',
					transitionProperty: 'all',
					marginTop: '-s',
					padding: 'xs',
					color: 'accent',
					bg: 'bg',
					fontWeight: 'bold',
					textDecoration: 'none',
				},
				':active .Logo__text, :hover .Logo__text': {
					border: 'input',
					borderWidth: '0 0 2px 0',
				},
				':focus': {
					outline: 'input',
					outlineColor: 'accent',
				},
			}}
		>
			<Stack as="span" gap="s" direction="row" mt="xs">
				<Box as="span" sx={{ mt: -11 }}>
					<Taco height={34} {...getTacoProps()} />
				</Box>
				<Box
					sx={{ transition: 'hover', transitionProperty: 'all' }}
					className="Logo__text"
				>
					Tacohuaco
				</Box>
			</Stack>
		</GatsbyLink>
	);
}
