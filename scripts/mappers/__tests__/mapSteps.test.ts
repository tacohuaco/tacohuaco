import { test, expect } from 'vitest';
import { mapSteps } from '../mapSteps';

test('map steps without sections', () => {
	const stepsWithoutSections = `
1. Do one.
2. Do two.
3. Do three.`;
	expect(mapSteps(stepsWithoutSections)).toMatchInlineSnapshot(`
		[
		  {
		    "name": "",
		    "steps": [
		      "Do one.",
		      "Do two.",
		      "Do three.",
		    ],
		  },
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
	expect(mapSteps(stepsWithSections)).toMatchInlineSnapshot(`
		[
		  {
		    "name": "To cook the sponge cake",
		    "steps": [
		      "Prepare this.",
		      "Cook that.",
		    ],
		  },
		  {
		    "name": "To cook the tres leches",
		    "steps": [
		      "Add all the vegetables",
		      "Add salt",
		    ],
		  },
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
	expect(mapSteps(stepsWithSections, subrecipes)).toMatchInlineSnapshot(`
		[
		  {
		    "name": "To cook the sponge cake",
		    "steps": [
		      "Prepare this.",
		      "Cook that.",
		    ],
		  },
		  {
		    "name": "To cook the gremolata",
		    "steps": [
		      "This.",
		      "That.",
		    ],
		  },
		]
	`);
});
