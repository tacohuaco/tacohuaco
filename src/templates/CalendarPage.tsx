import { Stack } from '../components/Stack';
import type { Recipe } from '../types/Recipe';
import { useMemo, useRef, useState } from 'react';
import { CalendarMonthPanel, type SeasonalMonth } from './CalendarMonthPanel';
import { Box } from '../components/Box';

type Props = {
	url: string;
	title: string;
	months: SeasonalMonth[];
	allRecipes: Recipe[];
};

export function CalendarPage({ months, allRecipes }: Props) {
	const defaultIndex = useMemo(() => {
		return new Date().getMonth();
	}, [months.length]);

	const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);
	const tablistRef = useRef<HTMLDivElement>(null);

	const getTabElement = (index: number): HTMLButtonElement | undefined => {
		const tabs = tablistRef.current?.querySelectorAll('[role="tab"]');
		return tabs ? (tabs[index] as HTMLButtonElement) : undefined;
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		const last = months.length - 1;
		switch (e.key) {
			case 'ArrowLeft': {
				e.preventDefault();
				const next = activeIndex === 0 ? last : activeIndex - 1;
				setActiveIndex(next);
				getTabElement(next)?.focus?.();
				break;
			}
			case 'ArrowRight': {
				e.preventDefault();
				const next = activeIndex === last ? 0 : activeIndex + 1;
				setActiveIndex(next);
				getTabElement(next)?.focus?.();
				break;
			}
			case 'Home': {
				e.preventDefault();
				setActiveIndex(0);
				getTabElement(0)?.focus?.();
				break;
			}
			case 'End': {
				e.preventDefault();
				setActiveIndex(last);
				getTabElement(last)?.focus?.();
				break;
			}
		}
	};

	return (
		<Stack gap="l">
			<Stack
				role="tablist"
				aria-label="Months"
				direction="row"
				gap="xxs"
				flexWrap="wrap"
				innerRef={tablistRef}
			>
				{months.map((m, i) => {
					const selected = i === activeIndex;
					const tabId = `cal-tab-${i}`;
					const panelId = `cal-panel-${i}`;
					return (
						<Box
							as="button"
							key={m.monthName}
							role="tab"
							id={tabId}
							aria-controls={panelId}
							aria-selected={selected}
							tabIndex={selected ? 0 : -1}
							onKeyDown={handleKeyDown}
							onClick={() => setActiveIndex(i)}
							title={m.monthName}
							css={{
								px: 's',
								py: 'xs',
								fontFamily: 'ui',
								fontSize: 's',
								border: 'transparent',
								borderRadius: 'base',
								bg: selected ? 'light' : 'transparent',
								color: 'text',
								cursor: 'pointer',
								_hover: { bg: 'light' },
								_focusVisible: {
									outline: 0,
									boxShadow: `0 0 0 2px token(colors.background), 0 0 0 4px token(colors.accent)`,
								},
							}}
						>
							{m.monthName}
						</Box>
					);
				})}
			</Stack>
			<CalendarMonthPanel
				month={months[activeIndex]}
				allRecipes={allRecipes}
				labelledBy={`cal-tab-${activeIndex}`}
				id={`cal-panel-${activeIndex}`}
			/>
		</Stack>
	);
}
