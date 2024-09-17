import fs from 'fs-extra';
import { request, gql } from 'graphql-request';
import type {
	IngredientModelRaw,
	RecipeModelRaw,
	ShopModelRaw,
	TipModelRaw,
} from './types';
import { mapRecipe } from './mappers/mapRecipe';
import { mapIngredientsModel } from './mappers/mapIngredientsModel';
import { mapTipsModel } from './mappers/mapTipsModel';
import { mapShopModel } from './mappers/mapShopModel';

// Fetch _all_ the data from Hygraph and convert it to JSON files that could
// be used in Astro

// TODO: Make warnings more prominent
// TODO: Count warnings
// TODO: Show warnings summary
// TODO: Fail the build
// TODO: Check for missing items (but some text) in ingredients, steps and tools

if (!process.env.GRAPHCMS_TOKEN) {
	console.error('GRAPHCMS_TOKEN environmental variable is required');
	process.exit(1);
}

const endpoint = `https://api-eu-central-1.graphcms.com/v2/${process.env.GRAPHCMS_TOKEN}/master`;

const query = gql`
  {
  	recipes {
  		artemsFavorite
  		cuisines
  		createdAt
  		description
  		ingredients
  		keywords
  		margaritasFavorite
  		overnight
  		slug
  		source
  		steps
  		tags
  		time
  		title
  		titleEnglish
  		tools
  		notes
  		yields
  		images {
  			url
  			handle
  			width
  			height
  		}
  		subrecipes {
  			slug
  			title
  			ingredients
  			steps
  			tools
  		}
  		recipes {
  			artemsFavorite
  			createdAt
  			cuisines
  			images {
  				handle
  				height
  				url
  				width
  			}
  			ingredients
  			margaritasFavorite
  			overnight
  			slug
  			subrecipes {
  				slug
  				title
  				ingredients
  				steps
  				tools
  			}
  			time
  			title
  			tags
  		}
  	}
  	ingredients {
  		name
  		warnings
  	}
  	tips {
  		content
  		tags
  		ingredient
  	}
  	shops {
  		address
  		city
  		country
  		description
  		name
  		neighbourhood
  		url
  		zip
  	}
  }
`;

console.log('🌮 Syncing content...');

console.log();
console.log('🌭 Fetching data from Hygraph...');

const results = await request<{
	recipes: RecipeModelRaw[];
	ingredients: IngredientModelRaw[];
	tips: TipModelRaw[];
	shops: ShopModelRaw[];
}>(endpoint, query);

console.log();
console.log('🌭 Parsing recipes...');

fs.ensureDirSync('src/content/recipes');

const ingredients = mapIngredientsModel(results.ingredients);
const tips = mapTipsModel(results.tips);

for (const recipeRaw of results.recipes) {
	console.log('👉', recipeRaw.title);
	const recipe = mapRecipe(recipeRaw, ingredients, tips);
	fs.writeJSONSync(`src/content/recipes/${recipe.slug}.json`, recipe);
}

console.log();
console.log('🌭 Parsing shops...');

fs.ensureDirSync('src/data');

const shops = mapShopModel(results.shops);
fs.writeJSONSync(`src/data/shops.json`, shops);

console.log();
console.log(`🍆 ${results.recipes.length} recipes done`);
