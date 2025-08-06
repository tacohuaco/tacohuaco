import { MONTH_NAMES, type Month } from '../../src/util/olivier';
import type { CalendarMonth, CalendarMonthModelRaw } from '../types';

// Generic recipes that apply to all months are stored in Hygraph at this month
const GENERIC_MONTH_NAME = 'all';

function getMonthByName(name: string): Month {
	const normalizedName = name.toLowerCase();

	const monthEntry = Object.entries(MONTH_NAMES).find(
		([, monthName]) => monthName.toLowerCase() === normalizedName
	);

	if (monthEntry === undefined) {
		throw new Error(`Unknown month name: ${name}`);
	}

	const [monthKey] = monthEntry;
	return Number(monthKey) as Month;
}

function mapRecipesString(recipesString: string) {
	return recipesString.trim().split(/[,;]\s*/);
}

function mapMonthRecipesSection(
	monthRecipes?: string,
	genericRecipes?: string
): [string[], string[]] {
	const monthRecipesArray = monthRecipes ? mapRecipesString(monthRecipes) : [];
	const genericRecipesArray = genericRecipes
		? mapRecipesString(genericRecipes)
		: [];
	return [monthRecipesArray, genericRecipesArray];
}

export function mapCalendarMonthsModel(
	calendarMonths: CalendarMonthModelRaw[]
): CalendarMonth[] {
	const generic = calendarMonths.find((x) => x.name === GENERIC_MONTH_NAME);

	return calendarMonths
		.filter(({ name }) => name !== GENERIC_MONTH_NAME)
		.map((month) => ({
			name: month.name,
			month: getMonthByName(month.name),
			breakfasts: mapMonthRecipesSection(month.breakfasts, generic?.breakfasts),
			lunches: mapMonthRecipesSection(month.lunches, generic?.lunches),
			specials: mapMonthRecipesSection(month.specials, generic?.specials),
			sweets: mapMonthRecipesSection(month.sweets, generic?.sweets),
			snacks: mapMonthRecipesSection(month.snacks, generic?.snacks),
		}));
}
