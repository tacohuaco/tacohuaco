import { test, expect } from 'vitest';
import { mapTools } from '../mapTools';

test('map tools', () => {
	const tools = `
- 
2. Do two.
3. Do three.`;
	expect(mapTools(tools)).toMatchInlineSnapshot(`
		[
		  "",
		  "Do two.",
		  "Do three.",
		]
	`);
});

test('map steps with sections', () => {
	const stepsWithSections = `### To cook the sponge cake

1. Prepare this.
2. Cook that.

### To cook the tres leches

1. Add all the vegetables
2. Add salt`;
	expect(mapTools(stepsWithSections)).toMatchInlineSnapshot(`
		[
		  "Prepare this.",
		  "Cook that.",
		  "Add all the vegetables",
		  "Add salt",
		]
	`);
});

test('map steps with subrecipe', () => {
	const stepsWithSections = `### To cook the sponge cake

1. Prepare this.
2. Cook that.

### To cook the gremolata

[#](spicy-gremolata)`;
	const subrecipes = [
		{
			slug: 'spicy-gremolata',
			title: 'Spicy gremolata',
			ingredients: '',
			steps: '1. This.\n2. That.',
			tools: '',
		},
	];
	expect(mapTools(stepsWithSections, subrecipes)).toMatchInlineSnapshot(`
		[
		  "Prepare this.",
		  "Cook that.",
		]
	`);
});
