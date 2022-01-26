import {
	getIngredientLines,
	getIngredients,
	getIngredientsInfo,
	getRecipeFlags,
	getRecipeSeasons,
	getRecipePreconditions,
	placeholdersToItalic,
	demoteHeadings,
} from './content';

describe('getIngredientLines', () => {
	test('return an array of ingredient lines from Markdown', () => {
		const markdown = `
- 10 sausages
- 1 onion
- 1/2 sausage
- 13 g of cocaine
- 4 medium eggs
- 3-4 sprigs of marijuana
- 1 clove of garlic
- a bit of hot pepper
		`;
		expect(getIngredientLines(markdown)).toMatchInlineSnapshot(`
Array [
  "10 sausages",
  "1 onion",
  "1/2 sausage",
  "13 g of cocaine",
  "4 medium eggs",
  "3-4 sprigs of marijuana",
  "1 clove of garlic",
  "a bit of hot pepper",
]
`);
	});
});

describe('getIngredients', () => {
	test('return an array of ingredients from Markdown', () => {
		const markdown = `
- 10 sausages
- 10 g of almond flour / 15 g of coconut flour
		`;
		expect(getIngredients(markdown)).toMatchInlineSnapshot(`
Array [
  Object {
    "comment": undefined,
    "maxAmount": 10,
    "minAmount": 10,
    "modifier": undefined,
    "name": "sausage",
    "unit": undefined,
  },
  Object {
    "comment": undefined,
    "maxAmount": 10,
    "minAmount": 10,
    "modifier": undefined,
    "name": "almond flour",
    "unit": "g",
  },
  Object {
    "comment": undefined,
    "maxAmount": 15,
    "minAmount": 15,
    "modifier": undefined,
    "name": "coconut flour",
    "unit": "g",
  },
]
`);
	});
});

describe('getIngredientsInfo', () => {
	test('return an array of ingredient infos from Markdown', () => {
		const markdown = `
- 10 g of milk
- 10 g of almond flour / 15 g of coconut flour
		`;
		expect(getIngredientsInfo(markdown)).toMatchInlineSnapshot(`
Array [
  Object {
    "hasDairy": true,
    "hasGluten": false,
    "hasSugar": false,
    "kind": 1,
    "name": "milk",
    "seasons": Array [],
  },
  Object {
    "hasDairy": false,
    "hasGluten": false,
    "hasSugar": false,
    "kind": 0,
    "name": "almond flour",
    "seasons": Array [],
  },
  Object {
    "hasDairy": false,
    "hasGluten": false,
    "hasSugar": false,
    "kind": 0,
    "name": "coconut flour",
    "seasons": Array [],
  },
]
`);
	});
});

describe('getRecipeFlags', () => {
	test.each([
		[
			`
- 2 tomatoes
- 3-4 cucumbers
`,
			{
				dairyFree: true,
				glutenFree: true,
				lowGluten: false,
				noAddedSugar: true,
				vegan: true,
				vegetarian: true,
			},
		],
		[
			`
- 2 tomatoes
- 30 g of flour
`,
			{
				dairyFree: true,
				glutenFree: false,
				lowGluten: false,
				noAddedSugar: true,
				vegan: true,
				vegetarian: true,
			},
		],
		[
			`
- 2 tomatoes
- 30 g of sugar
`,
			{
				dairyFree: true,
				glutenFree: true,
				lowGluten: false,
				noAddedSugar: false,
				vegan: true,
				vegetarian: true,
			},
		],
		[
			`
- 2 tomatoes
- 30 g of milk
`,
			{
				dairyFree: false,
				glutenFree: true,
				lowGluten: false,
				noAddedSugar: true,
				vegan: false,
				vegetarian: true,
			},
		],
		[
			`
- 2 tomatoes
- 3 eggs
`,
			{
				dairyFree: true,
				glutenFree: true,
				lowGluten: false,
				noAddedSugar: true,
				vegan: false,
				vegetarian: true,
			},
		],
		[
			`
- 2 tomatoes
- 300 g of chicken; breast
`,
			{
				dairyFree: true,
				glutenFree: true,
				lowGluten: false,
				noAddedSugar: true,
				vegan: false,
				vegetarian: false,
			},
		],
		[
			`
- 10 g of milk
- 10 g of almond flour / 15 g of coconut flour
`,
			{
				dairyFree: false,
				glutenFree: true,
				lowGluten: true,
				noAddedSugar: true,
				vegan: false,
				vegetarian: true,
			},
		],
	])('return recipe flags: %s', (source, result) => {
		expect(getRecipeFlags(source)).toEqual(result);
	});
});

describe('getRecipeSeasons', () => {
	test('return an array of recipe season months from Markdown', () => {
		const markdown = `
- 60 g of rice noodles
- 150 g of kimchi
- 2 cloves of garlic
- 1 carrot
- 1 zucchini
- extra-virgin olive oil
- soy sauce
- honey
- salt
- freshly ground black pepper
		`;
		expect(getRecipeSeasons(markdown)).toMatchInlineSnapshot(`
Array [
  7,
  8,
  9,
]
`);
	});
});

describe('getRecipePreconditions', () => {
	test.each([
		['- 2 cucumbers', []],
		['- 10 g of butter; room temperature', ['warm butter to room temperature']],
		[
			'- 10 g of butter; at room temperature',
			['warm butter to room temperature'],
		],
		['- 500 g of chicken stock', ['unfreeze chicken stock if frozen']],
	])('return recipe preconditions: %s', (source, result) => {
		expect(getRecipePreconditions(source)).toEqual(result);
	});
});

describe('placeholdersToItalic', () => {
	test.each([
		// TODO: Is this correct?
		['Add } salt { to the mixture', 'Add _} _salt_ {_ to the mixture'],
	])('wrap placeholders into italic: %s', (source, result) => {
		expect(placeholdersToItalic(source)).toEqual(result);
	});
});

describe('demoteHeadings', () => {
	test.each([
		[
			`
# Heading 2

Some text

## Heading 3

Some text
`,
			`
### Heading 2

Some text

### Heading 3

Some text
`,
		],
	])('decrease level of headings: %s', (source, result) => {
		expect(demoteHeadings(source)).toEqual(result);
	});
});
