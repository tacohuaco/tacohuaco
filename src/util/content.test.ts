import { boldizeAmounts } from './content';

describe('boldizeAmounts', () => {
	test.each([
		['10 sausages\n1 onion', '**10** sausages\n**1** onion'],
		['1/2 sausage', '**1/2** sausage'],
		['13 g of cocaine', '**13 g** of cocaine'],
		['4 medium eggs', '**4** medium eggs'],
		['3-4 sprigs of marijuana', '**3-4** sprigs of marijuana'],
		['1 clove of garlic', '**1 clove** of garlic'],
		['a bit of hot pepper', '**a bit** of hot pepper'],
	])('make numbers bold: %s', (source, result) => {
		expect(boldizeAmounts(source)).toBe(result);
	});
});
