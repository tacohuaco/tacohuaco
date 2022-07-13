import React from 'react';
import { Box, Stack, VisuallyHidden } from 'tamia';
import styled from 'styled-components';
import { Input } from './Input';

const EmailInput = styled(Input)`
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;

	@media (max-width: ${(p) => p.theme.breakpoints[0]}) {
		border-top-right-radius: ${(p) => p.theme.radii.button};
		border-bottom-left-radius: 0;
	}
`;

const SubmitButton = styled.button`
	width: 100%;
	height: 2em;
	padding: ${(p) => p.theme.space.xxs} ${(p) => p.theme.space.m};
	background-color: ${(p) => p.theme.colors.base};
	color: ${(p) => p.theme.colors.bg};
	border: 2px solid ${(p) => p.theme.colors.primary};
	border-radius: ${(props) => props.theme.radii.button};
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	font-size: ${(p) => p.theme.fontSizes.m};
	font-family: ${(p) => p.theme.fonts.ui};
	font-weight: ${(p) => p.theme.fontWeights.ui};
	user-select: none;

	@media (max-width: ${(p) => p.theme.breakpoints[0]}) {
		border-bottom-left-radius: ${(p) => p.theme.radii.button};
		border-top-right-radius: 0;
	}

	&:hover,
	&:active,
	&:focus {
		outline: 0;
		background-color: ${(p) => p.theme.colors.hover};
		border-color: ${(p) => p.theme.colors.hover};
		cursor: pointer;
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&::-moz-focus-inner {
		border: 0;
	}
`;

export function SubscriptionForm() {
	return (
		<>
			<Stack
				as="form"
				method="post"
				action="https://tinyletter.com/tacohuaco"
				target="_blank"
				direction={['column', 'row']}
				gap={0}
			>
				<Box as="label" width={1}>
					<VisuallyHidden>Your email</VisuallyHidden>
					<EmailInput
						name="email"
						type="email"
						required
						autoComplete="home email"
						autoCapitalize="off"
						autoCorrect="off"
						placeholder="Your email"
						defaultValue=""
					/>
				</Box>
				<Box flexShrink={0}>
					<SubmitButton type="submit">Subscribe</SubmitButton>
				</Box>
			</Stack>
		</>
	);
}
