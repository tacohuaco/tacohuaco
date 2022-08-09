import { getImageUrl, stripMarkdown, asList } from './client';

describe('getImageUrl', () => {
	test('return URL with sizes', () => {
		expect(
			getImageUrl('https://media.graphassets.com/pizza', {
				width: 11,
				height: 22,
			})
		).toBe(
			'https://media.graphassets.com/resize=height:22,width:11/quality=value:65/pizza'
		);
	});
});

describe('stripMarkdown', () => {
	test('return text without Markdown', () => {
		const markdown = `**Something** awesome [is here](http://tacohuaco.co/).`;
		expect(stripMarkdown(markdown)).toBe('Something awesome is here.');
	});
});

describe('asList', () => {
	test('convert an array to a string', () => {
		const list = ['noodles', 'round pizza', 'wet ramen'];
		expect(asList(list)).toBe('noodles, round pizza and wet ramen');
	});
});
