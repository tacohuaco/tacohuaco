import { test, expect } from 'vitest';
import { mapRecipe } from '../mapRecipe';
import { RecipeRaw } from '../../types';

test('map recipe', () => {
	const recipe: RecipeRaw = {
		artemsFavorite: true,
		cuisines: ['Mexican', 'Klatzlandian'],
		createdAt: '2023-09-18T12:12:59.151425+00:00',
		description: 'Good stuff!',
		ingredients: `- 2 fresh jalapeños\n- 1 kg floury potatoes\n100 g butter; room temperature\n- salt`,
		keywords: 'green sauce',
		margaritasFavorite: true,
		overnight: false,
		slug: 'salsa-verde-de',
		source: null,
		steps: `1. Prepare\n2. Serve`,
		tags: ['Sauce', 'Salsa', 'Spicy', 'Foundation', 'Charring', 'Cold', 'Dip'],
		time: 40,
		title: 'First world salsa verde',
		tools: '- blender or food processor',
		notes: 'Do it good!\n\nDo it gooder',
		yields: '200 ml',
		images: [{ url: 'https://xxx', handle: 'xxx', width: 20, height: 10 }],
		subrecipes: [],
		recipes: [],
	};
	expect(mapRecipe(recipe)).toMatchInlineSnapshot(`
		{
		  "artemsFavorite": true,
		  "createdAt": 2023-09-18T12:12:59.151Z,
		  "cuisines": [
		    "Mexican",
		    "Klatzlandian",
		  ],
		  "dairyFree": false,
		  "description": "Good stuff!",
		  "glutenFree": true,
		  "images": [
		    {
		      "handle": "xxx",
		      "height": 10,
		      "url": "https://xxx",
		      "width": 20,
		    },
		  ],
		  "ingredients": [
		    {
		      "ingredients": [
		        {
		          "comment": undefined,
		          "hasDairy": false,
		          "hasGluten": false,
		          "hasSugar": false,
		          "kind": 0,
		          "maxAmount": 2,
		          "minAmount": 2,
		          "modifier": "fresh",
		          "name": "jalapeño",
		          "seasons": [],
		          "unit": undefined,
		        },
		        {
		          "comment": "room temperature",
		          "hasDairy": true,
		          "hasGluten": false,
		          "hasSugar": false,
		          "kind": 1,
		          "maxAmount": 1000,
		          "minAmount": 1000,
		          "modifier": "floury potatoes 100 g",
		          "name": "butter",
		          "seasons": [],
		          "unit": "g",
		        },
		        {
		          "comment": undefined,
		          "hasDairy": false,
		          "hasGluten": false,
		          "hasSugar": false,
		          "kind": 0,
		          "maxAmount": undefined,
		          "minAmount": undefined,
		          "modifier": undefined,
		          "name": "salt",
		          "seasons": [],
		          "unit": undefined,
		        },
		      ],
		      "name": "",
		    },
		  ],
		  "keywords": [
		    "green sauce",
		  ],
		  "lowGluten": false,
		  "margaritasFavorite": true,
		  "noAddedSugar": true,
		  "notes": [
		    "Do it good!",
		    "Do it gooder",
		  ],
		  "overnight": false,
		  "preconditions": [
		    "warm butter to room temperature",
		  ],
		  "recipes": [],
		  "seasons": [],
		  "slug": "salsa-verde-de",
		  "source": "",
		  "steps": [
		    {
		      "name": "",
		      "steps": [
		        "Prepare",
		        "Serve",
		      ],
		    },
		  ],
		  "subrecipes": [],
		  "tags": [
		    "Sauce",
		    "Salsa",
		    "Spicy",
		    "Foundation",
		    "Charring",
		    "Cold",
		    "Dip",
		  ],
		  "time": 40,
		  "title": "First world salsa verde",
		  "tools": [
		    "blender or food processor",
		  ],
		  "vegan": false,
		  "vegetarian": true,
		  "yields": "200 ml",
		}
	`);
});
