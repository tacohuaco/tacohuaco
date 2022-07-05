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

const SEASSON_WINTER = ['winter'];
const SEASSON_SPRING = ['spring'];
const SEASSON_SUMMER = ['summer'];
const SEASSON_AUTUMN = ['autumn', 'fall'];
const MONTH_TO_SEASON: Record<string, string[]> = {
	[Month.January]: SEASSON_WINTER,
	[Month.February]: SEASSON_WINTER,
	[Month.March]: SEASSON_SPRING,
	[Month.April]: SEASSON_SPRING,
	[Month.May]: SEASSON_SPRING,
	[Month.June]: SEASSON_SUMMER,
	[Month.July]: SEASSON_SUMMER,
	[Month.August]: SEASSON_SUMMER,
	[Month.September]: SEASSON_AUTUMN,
	[Month.October]: SEASSON_AUTUMN,
	[Month.November]: SEASSON_AUTUMN,
	[Month.December]: SEASSON_WINTER,
};

export function useSearchIndex(recipes: RecipeMetaFragment[]) {
	return useMemo(() => {
		return lunr(function () {
			this.ref('slug');
			this.field('title', { boost: 3 });
			this.field('ingredients');
			this.field('tags');
			this.field('seasons');

			recipes.forEach(
				({ slug, title, allIngredients, tags, flags, seasons, ...recipe }) => {
					this.add({
						slug,
						title,
						ingredients: allIngredients.flatMap((x) =>
							x.ingredients.flatMap((y) => y.name.split(' '))
						),
						// Tags come like `awesomePizza`, we need to convert them
						// to words and then split into an array so Lurn indexes
						// them as separate words
						tags: [
							...tags.map((x) => sentenceCase(x).split(' ')),
							flags.vegan ? 'vegan' : [],
							flags.vegetarian ? 'vegetarian' : [],
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
