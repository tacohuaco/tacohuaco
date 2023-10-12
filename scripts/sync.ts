import fs from 'fs-extra';
import { request, gql } from 'graphql-request';
import { RecipeRaw } from './types';
import { mapRecipe } from './mappers/mapRecipe';

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
				margaritasFavorite
				overnight
				slug
				time
				title
				tags
			}
		}
	}
`;

console.log('🌮 Syncing content...');
console.log('🌭 Fetching data from Hygraph...');

const results = await request<{ recipes: RecipeRaw[] }>(endpoint, query);

fs.ensureDirSync('src/content/recipes');

results.recipes.forEach((recipeRaw) => {
	console.log('👉', recipeRaw.title);
	const recipe = mapRecipe(recipeRaw);
	fs.writeJSONSync(`src/content/recipes/${recipe.slug}.json`, recipe);
});

console.log(`🍆 ${results.recipes.length} recipes done`);
