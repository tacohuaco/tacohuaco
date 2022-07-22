import { useMemo } from 'react';
import lunr from 'lunr';
import { sentenceCase } from 'sentence-case';
import { RecipeMetaFragment } from '../graphql-types';
import { Month } from '../util/olivier';

const MONTH_TO_NAME: Record<string, string> = {
	[Month.January]: 'January',
	[Month.February]: 'February',
	[Month.March]: 'March',
	[Month.April]: 'April',
	[Month.May]: 'May',
	[Month.June]: 'June',
	[Month.July]: 'July',
	[Month.August]: 'August',
	[Month.September]: 'September',
	[Month.October]: 'October',
	[Month.November]: 'November',
	[Month.December]: 'December',
};

export const SEASON_WINTER = ['winter'];
export const SEASON_SPRING = ['spring'];
export const SEASON_SUMMER = ['summer'];
export const SEASON_AUTUMN = ['autumn', 'fall'];
const MONTH_TO_SEASON: Record<string, string[]> = {
	[Month.January]: SEASON_WINTER,
	[Month.February]: SEASON_WINTER,
	[Month.March]: SEASON_SPRING,
	[Month.April]: SEASON_SPRING,
	[Month.May]: SEASON_SPRING,
	[Month.June]: SEASON_SUMMER,
	[Month.July]: SEASON_SUMMER,
	[Month.August]: SEASON_SUMMER,
	[Month.September]: SEASON_AUTUMN,
	[Month.October]: SEASON_AUTUMN,
	[Month.November]: SEASON_AUTUMN,
	[Month.December]: SEASON_WINTER,
};

export const FLAG_VEGAN = 'vegan';
export const FLAG_VEGETARIAN = 'vegetarian';

export function useSearchIndex(recipes: RecipeMetaFragment[]) {
	return useMemo(() => {
		return lunr(function () {
			this.ref('slug');
			this.field('title', { boost: 3 });
			this.field('cuisines');
			this.field('ingredients');
			this.field('tags');
			this.field('seasons');

			recipes.forEach(
				({ slug, title, cuisines, allIngredients, tags, flags, seasons }) => {
					this.add({
						slug,
						title,
						cuisines,
						ingredients: allIngredients.flatMap((x) =>
							x.ingredients.flatMap((y) => y.name.split(' '))
						),
						// Tags come like `awesomePizza`, we need to convert them
						// to words and then split into an array so Lurn indexes
						// them as separate words
						tags: [
							...tags.map((x) => sentenceCase(x).split(' ')),
							flags.vegan ? FLAG_VEGAN : [],
							flags.vegetarian ? FLAG_VEGETARIAN : [],
						].flat(),
						seasons: seasons
							.flatMap((x) => [MONTH_TO_NAME[x], MONTH_TO_SEASON[x]])
							.flat(),
					});
				}
			);
		});
	}, [recipes]);
}
