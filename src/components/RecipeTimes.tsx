import React from 'react';
import { Box, Text } from 'tamia';
import Icon from './Icon';

type Props = {
	time: number;
	overnight?: boolean;
};

export default function RecipeTimes({ time, overnight }: Props) {
	return (
		<Text variant="xsmall">
			{time} min
			{overnight && (
				<>
					, requires preparation the day before{' '}
					<Box as="span" color="moon" verticalAlign="0.15ex">
						<Icon icon="moon" size="1em" />
					</Box>
				</>
			)}
		</Text>
	);
}
