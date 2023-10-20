import { type ComponentProps } from 'react';
import random from 'lodash/random';
import sample from 'lodash/sample';
import { Box, Stack, QuotedLink } from '.';
import {
	Taco,
	TORTILLAS,
	FILLINGS,
	EYES,
	NOSES,
	MOUTHES,
	GLASSES,
} from './Taco';
import { logo, text } from './Logo.css';

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

export function Logo() {
	return (
		<QuotedLink href="/">
			<Stack as="span" gap="s" direction="row" mt="xs">
				<Box as="span" className={logo}>
					<Taco height={34} {...getTacoProps()} />
				</Box>
				<Box as="span" className={text}>
					Tacohuaco
				</Box>
			</Stack>
		</QuotedLink>
	);
}
