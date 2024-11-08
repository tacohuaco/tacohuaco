import type { ComponentType } from 'react';
import { ChartStepType, type ChartStep } from '../types/Recipe';
import { Box } from './Box';
import { Stack } from './Stack';
import { Flex } from './Flex';
import { TextTypo } from './TextTypo';

type Props = {
	chart: readonly ChartStep[];
};

const borderWidth = 2;
const borderStyle = 'solid';
const borderColor = 'border';
const borderRadius = '0.2rem';
const borderRadiusSmaller = '0.15rem';

function PotBase() {
	return (
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
	);
}

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

function PictogramRest() {
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

function PictogramCookUncovered() {
	return (
		<Stack
			pt="0.4rem"
			css={{
				pointerEvents: 'none',
				userSelect: 'none',
			}}
		>
			<PotBase />
		</Stack>
	);
}

function PictogramCookCovered() {
	return (
		<Stack>
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
			<PotBase />
		</Stack>
	);
}

const PICTOGRAMS: Record<ChartStepType, ComponentType> = {
	[ChartStepType.WarmToRoomTemp]: PictogramWarmToRoomTemp,
	[ChartStepType.Refrigerate]: PictogramRefrigerate,
	[ChartStepType.PreheatOven]: PictogramOven,
	[ChartStepType.CookUncovered]: PictogramCookUncovered,
	[ChartStepType.CookCovered]: PictogramCookCovered,
	[ChartStepType.Rest]: PictogramRest,
	[ChartStepType.Soak]: PictogramSoak,
};

function Subtype({ type, subtype }: { type: ChartStepType; subtype: string }) {
	if (type === ChartStepType.WarmToRoomTemp) {
		return <TextTypo variant="small">{subtype}</TextTypo>;
	}

	return null;
}

function Value({ value }: { value: string }) {
	const valueToPrint = value
		.replaceAll('minutes', 'm')
		.replaceAll(/hours?/g, 'h')
		.replaceAll(/days?/g, 'd')
		.replaceAll('or overnight', '')
		.replaceAll('overnight', '');
	const isOvernight = value.includes('overnight');
	return (
		<Stack alignItems="center">
			<TextTypo variant="small">{valueToPrint}</TextTypo>
			{isOvernight && (
				<TextTypo variant="small" mt="-xs">
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
			<Pictogram />
			{step.subtype && <Subtype type={step.type} subtype={step.subtype} />}
			{step.value && <Value value={step.value} />}
		</Stack>
	);
}

export function RecipeChart({ chart }: Props) {
	return (
		<Stack direction="row" gap="l" aria-hidden>
			{chart.map((step, index) => (
				<RecipeChartStep key={index} step={step} />
			))}
		</Stack>
	);
}
