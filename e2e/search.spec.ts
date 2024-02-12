import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('http://localhost:4321/search/');

	// Correct recipe page title
	await expect(page).toHaveTitle('Search recipes on Tacohuaco');
});

test('search for a recipe', async ({ page }) => {
	await page.goto('http://localhost:4321/search/');

	const input = page.getByPlaceholder('Search recipes');

	// HACK: Trigger input to init UI (there might be a beter way to do it)
	await input.pressSequentially('', { delay: 500 });

	await input.pressSequentially('birria', { delay: 200 });
	await input.press('ArrowDown', { delay: 500 });
	await input.press('Enter', { delay: 500 });

	await expect(
		page.getByRole('link', { name: 'Chicken birria' })
	).toBeVisible();
});
