import { Box, Text, Icon, Tooltip, TooltipTrigger } from '.';
import { moonIcon } from './RecipeTimes.css';

type Props = {
	time: number;
	overnight?: boolean;
	size?: 'medium' | 'small';
};

const MoonIcon = () => (
	<Box as="span" className={moonIcon}>
		<Icon icon="moon" size="1em" />
	</Box>
);

export function RecipeTimes({ time, overnight, size = 'medium' }: Props) {
	if (size === 'small') {
		return (
			<Text variant="xsmall">
				{time} m
				{overnight && (
					<>
						{' '}
						<Tooltip value="Requires preparation the day before">
							{({ tooltipNode }) => (
								<TooltipTrigger>
									{tooltipNode}
									<MoonIcon />
								</TooltipTrigger>
							)}
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
