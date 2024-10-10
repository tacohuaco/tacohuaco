import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('/search/');

	// Correct recipe page title
	await expect(page).toHaveTitle('Search recipes on Tacohuaco');
});

test('search for a recipe, ingredient', async ({ page }) => {
	await page.goto('/search/');

	const input = page.getByPlaceholder('Search recipes');

	expect(input).toBeEnabled();

	await input.fill('cucumbers');
	await input.press('ArrowDown', { delay: 500 });
	await input.press('Enter', { delay: 500 });

	// The recipe card is visible
	await expect(
		page.getByRole('link', { name: 'Quick pickled cucumbers' })
	).toBeVisible();
});

test('search for a recipe, recipe name', async ({ page }) => {
	await page.goto('/search/');

	const input = page.getByPlaceholder('Search recipes');

	expect(input).toBeEnabled();

	await input.fill('birria');
	await input.press('ArrowDown', { delay: 500 });
	await input.press('Enter', { delay: 500 });

	// We are on the recipe page
	await expect(
		page.getByRole('heading', { name: 'Chicken birria', exact: true })
	).toBeVisible();
});
