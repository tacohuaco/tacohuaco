import type { ComponentType } from 'react';
import { ChartStepType, type ChartStep } from '../types/Recipe';
import { Box } from './Box';
import { Stack } from './Stack';
import { Flex } from './Flex';
import { TextTypo } from './TextTypo';

// TODO: Find a way to differentiate cooking on the stove and in the oven

type Props = {
	chart: readonly ChartStep[];
};

type PictogramProps = {
	covered: boolean;
};

const borderWidth = 2;
const borderStyle = 'solid';
const borderColor = 'border';
const borderRadius = '0.2rem';
const borderRadiusSmaller = '0.15rem';

function PictogramWarmToRoomTemp() {
	return (
		<Stack
			css={{
				pointerEvents: 'none',
				userSelect: 'none',
				paddingTop: '0.2rem',
				alignItems: 'center',
				justifyContent: 'center',
				width: '2.2rem',
				height: '2rem',
				fontSize: '1.8rem',
			}}
		>
			☀
		</Stack>
	);
}

function PictogramRefrigerate() {
	return (
		<Stack
			css={{
				pointerEvents: 'none',
				userSelect: 'none',
				paddingTop: '0.1rem',
				alignItems: 'center',
				justifyContent: 'center',
				width: '2.2rem',
				height: '2rem',
				borderWidth,
				borderStyle,
				borderColor,
				borderRadius,
				fontSize: '1.8rem',
			}}
		>
			❄
		</Stack>
	);
}

function PictogramRest({ covered }: PictogramProps) {
	return (
		<Stack
			css={{
				pointerEvents: 'none',
				userSelect: 'none',
				gap: '0.1rem',
				alignItems: 'center',
				justifyContent: 'flex-end',
				width: '2.2rem',
				height: '2.0rem',
				fontSize: '1.8rem',
			}}
		>
			{covered && (
				<Stack
					css={{
						mb: '-0.2rem',
						width: '1.8rem',
						height: '0.8rem',
						borderWidth,
						borderStyle,
						borderColor,
						borderRadius: `2rem 2rem 0 0`,
					}}
				/>
			)}
			<Stack
				css={{
					width: '1.8rem',
					height: '0.4rem',
					borderWidth,
					borderStyle,
					borderColor,
					borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
				}}
			/>
			<Stack
				css={{
					width: '2.2rem',
					height: '0.1rem',
					borderWidth,
					borderStyle,
					borderColor,
					borderRadius,
				}}
			/>
		</Stack>
	);
}

function PictogramSoak() {
	return (
		<Stack
			css={{
				pointerEvents: 'none',
				userSelect: 'none',
				gap: '0.1rem',
				alignItems: 'center',
				justifyContent: 'flex-end',
				width: '2.2rem',
				height: '2.0rem',
				fontSize: '1.8rem',
			}}
		>
			<Stack
				css={{
					width: '1.6rem',
					height: '0.8rem',
					borderWidth,
					borderStyle,
					borderColor,
					borderRadius: `0 0 2rem 2rem`,
				}}
			/>
			<Stack
				css={{
					width: '2.2rem',
					height: '0.1rem',
					borderWidth,
					borderStyle,
					borderColor,
					borderRadius,
				}}
			/>
		</Stack>
	);
}

function PictogramOven() {
	return (
		<Stack
			css={{
				pointerEvents: 'none',
				userSelect: 'none',
				gap: '0.2rem',
				alignItems: 'center',
				justifyContent: 'center',
				width: '2.2rem',
				height: '2rem',
				borderWidth,
				borderStyle,
				borderColor,
				borderRadius,
			}}
		>
			<Stack direction="row" gap="0.15rem">
				<Box
					css={{
						width: '0.3rem',
						height: '0.3rem',
						borderRadius: 'round',
						bg: 'border',
					}}
				/>
				<Box
					css={{
						width: '0.3rem',
						height: '0.3rem',
						borderRadius: 'round',
						bg: 'border',
					}}
				/>
				<Box
					css={{
						width: '0.3rem',
						height: '0.3rem',
						borderRadius: 'round',
						bg: 'border',
					}}
				/>
			</Stack>
			<Box
				css={{
					width: '1.5rem',
					height: '0.8rem',
					borderWidth,
					borderStyle,
					borderColor,
					borderRadius: borderRadiusSmaller,
				}}
			/>
		</Stack>
	);
}

function PictogramCook({ covered }: PictogramProps) {
	return (
		<Stack paddingTop={covered ? 0 : '0.4rem'}>
			{covered && (
				<Flex
					css={{
						justifyContent: 'center',
						width: '2.2rem',
						height: '0.4rem',
						borderWidth,
						borderBottomWidth: 0,
						borderStyle,
						borderColor,
						borderRadius: `${borderRadius} ${borderRadius} 0 0`,
					}}
				>
					<Box
						css={{
							width: '0.4rem',
							height: '0.3rem',
							marginTop: '-0.3rem',
							borderWidth,
							borderBottomWidth: 0,
							borderColor,
							borderStyle,
							borderRadius: `${borderRadius} ${borderRadius} 0 0`,
						}}
					/>
				</Flex>
			)}
			<Flex
				css={{
					alignItems: 'center',
					gap: '2.1rem',
					justifyContent: 'center',
					width: '2.2rem',
					height: '1.6rem',
					borderWidth,
					borderStyle,
					borderColor,
					borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
				}}
			>
				<Box
					css={{
						width: '0.3rem',
						height: '0.4rem',
						marginTop: '-0.5rem',
						marginLeft: '-0.7rem',
						borderWidth,
						borderRightWidth: 0,
						borderColor,
						borderStyle,
						borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
					}}
				/>
				<Box
					css={{
						width: '0.3rem',
						height: '0.4rem',
						marginTop: '-0.5rem',
						marginRight: '-0.7rem',
						borderWidth,
						borderLeftWidth: 0,
						borderColor,
						borderStyle,
						borderRadius: `0 ${borderRadius} ${borderRadius} 0`,
					}}
				/>
			</Flex>
		</Stack>
	);
}

function PictogramCookInOven({ covered }: PictogramProps) {
	return (
		<Stack
			css={{
				pointerEvents: 'none',
				userSelect: 'none',
				gap: '0.2rem',
				alignItems: 'center',
				justifyContent: 'center',
				width: '2.2rem',
				height: '2rem',
				borderWidth,
				borderStyle,
				borderColor,
				borderRadius,
			}}
		>
			<Stack paddingTop={covered ? '0.3rem' : '0.7rem'}>
				{covered && (
					<Flex
						css={{
							justifyContent: 'center',
							width: '1.8rem',
							height: '0.25rem',
							borderWidth,
							borderBottomWidth: 0,
							borderStyle,
							borderColor,
							borderRadius: `10rem 10rem 0 0`,
						}}
					>
						<Box
							css={{
								width: '0.5rem',
								height: '0.25rem',
								marginTop: '-0.3rem',
								borderWidth,
								borderBottomWidth: 0,
								borderColor,
								borderStyle,
								borderRadius: `${borderRadius} ${borderRadius} 0 0`,
							}}
						/>
					</Flex>
				)}
				<Flex
					css={{
						width: '1.8rem',
						height: '0.7rem',
						borderWidth,
						borderStyle,
						borderColor,
						borderRadius: `0 0 0.6rem 0.6rem`,
					}}
				/>
			</Stack>
		</Stack>
	);
}

const PICTOGRAMS: Record<ChartStepType, ComponentType<PictogramProps>> = {
	[ChartStepType.WarmToRoomTemp]: PictogramWarmToRoomTemp,
	[ChartStepType.Refrigerate]: PictogramRefrigerate,
	[ChartStepType.PreheatOven]: PictogramOven,
	[ChartStepType.Cook]: PictogramCook,
	[ChartStepType.CookInOven]: PictogramCookInOven,
	[ChartStepType.Rest]: PictogramRest,
	[ChartStepType.Soak]: PictogramSoak,
};

function Subtype({ type, subtype }: { type: ChartStepType; subtype: string }) {
	if (type === ChartStepType.WarmToRoomTemp) {
		const valueToPrint = subtype.replaceAll(/.* broth/g, 'broth').trim();
		return <TextTypo variant="small">{valueToPrint}</TextTypo>;
	}

	return null;
}

function Value({
	value = '',
	overnight,
}: {
	value?: string;
	overnight: boolean;
}) {
	const valueToPrint = value
		.replaceAll('minutes', 'm')
		.replaceAll(/hours?/g, 'h')
		.replaceAll(/days?/g, 'd')
		.replaceAll(/weeks?/g, 'w')
		.trim();

	return (
		<Stack alignItems="center">
			{valueToPrint && (
				<TextTypo variant="small" my="-0.1rem" css={{ whiteSpace: 'nowrap' }}>
					{valueToPrint}
				</TextTypo>
			)}
			{overnight && (
				<TextTypo variant="small" my="-0.1rem">
					night
				</TextTypo>
			)}
		</Stack>
	);
}

function RecipeChartStep({ step }: { step: ChartStep }) {
	const Pictogram = PICTOGRAMS[step.type] ?? 'div';
	return (
		<Stack gap="s" alignItems="center">
			<Pictogram covered={step.covered} />
			{step.subtype && <Subtype type={step.type} subtype={step.subtype} />}
			<Value value={step.value} overnight={step.overnight} />
		</Stack>
	);
}

export function RecipeChart({ chart }: Props) {
	return (
		<Stack direction="row" flexWrap="wrap" columnGap="l" rowGap="m" aria-hidden>
			{chart.map((step, index) => (
				<RecipeChartStep key={index} step={step} />
			))}
		</Stack>
	);
}
