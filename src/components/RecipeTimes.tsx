import React from 'react';
import { Box, Text } from 'tamia';
import Icon from './Icon';
import Tooltip from './Tooltip';

type Props = {
	time: number;
	overnight?: boolean;
	size?: 'medium' | 'small';
};

const MoonIcon = () => (
	<Box as="span" color="moon" verticalAlign="0.15ex">
		<Icon icon="moon" size="1em" />
	</Box>
);

export default function RecipeTimes({
	time,
	overnight,
	size = 'medium',
}: Props) {
	if (size === 'small') {
		return (
			<Text variant="xsmall">
				{time} m
				{overnight && (
					<>
						{' '}
						<Tooltip value="Requires preparation the day before">
							<MoonIcon />
						</Tooltip>
					</>
				)}
			</Text>
		);
	}

	return (
		<Text variant="xsmall">
			{time} min
			{overnight && (
				<>
					, requires preparation the day before <MoonIcon />
				</>
			)}
		</Text>
	);
}
