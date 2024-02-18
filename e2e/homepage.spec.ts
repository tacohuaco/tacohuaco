import { test, expect } from '@playwright/test';

// TODO: How to fetch all recipe links withou links to gluten free, vegan, etc. recipes? We cannot fetch them by name without mocking the date somehow

test('has title', async ({ page }) => {
	await page.goto('/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(
		'Tacohuaco: favorite recipes of a Mexican-Russian couple'
	);
});

test('has recently added recipes', async ({ page }) => {
	await page.goto('/');

	// Check that we have some recently added recipes
	const recentRecipes = page.locator('section').filter({
		has: page.getByRole('heading', { name: 'Recently added recipes' }),
	});

	expect(await recentRecipes.getByRole('link').count()).toBeGreaterThan(0);

	// Check that we have some recipes in season
	const inSeasonRecipes = page.locator('section').filter({
		has: page.getByRole('heading', {
			name: 'Recipes with ingredients in season',
		}),
	});

	expect(await inSeasonRecipes.getByRole('link').count()).toBeGreaterThan(0);
});
