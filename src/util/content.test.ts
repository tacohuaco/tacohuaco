import { formatIngredients, getIngredientLines } from './content';

describe('boldizeAmounts', () => {
	test.each([
		['- 10 sausages\n- 1 onion', '- **10** sausages\n- **1** onion'],
		['- 1/2 sausage', '- **½** sausage'],
		['- 13 g of cocaine', '- **13 g** of cocaine'],
		['- 4 medium eggs', '- **4** medium eggs'],
		['- 3-4 sprigs of marijuana', '- **3–4 sprigs** of marijuana'],
		['- 1 clove of garlic', '- **1 clove** of garlic'],
		['- a bit of hot pepper', '- **a bit** of hot pepper'],
		['- salt', '- salt'],
	])('make numbers bold: %s', (source, result) => {
		expect(formatIngredients(source)).toBe(result);
	});
});

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
