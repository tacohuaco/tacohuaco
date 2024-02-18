import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('/search/');

	// Correct recipe page title
	await expect(page).toHaveTitle('Search recipes on Tacohuaco');
});

test('search for a recipe', async ({ page }) => {
	await page.goto('/search/');

	const input = page.getByPlaceholder('Search recipes');

	expect(input).toBeEnabled();

	await input.fill('birria');
	await input.press('ArrowDown', { delay: 500 });
	await input.press('Enter', { delay: 500 });

	await expect(
		page.getByRole('link', { name: 'Chicken birria' })
	).toBeVisible();
});
