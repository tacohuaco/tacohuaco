import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('http://localhost:4321/recipes/cerdo-en-salsa-roja/');

	// Correct recipe page title
	await expect(page).toHaveTitle('Cerdo en salsa roja recipe by Tacohuaco');
});

test('has all the recipe details', async ({ page }) => {
	await page.goto('http://localhost:4321/recipes/cerdo-en-salsa-roja/');

	// Has recipe title
	await expect(
		page.getByRole('heading', { name: 'Cerdo en salsa roja', exact: true })
	).toBeVisible();

	// English version of the recipe title
	await expect(page.getByText('Pork in spicy red sauce')).toBeVisible();

	// Yields
	await expect(page.getByText('Yields 6 portions')).toBeVisible();

	// All sections in the ingredient list
	await expect(
		page.getByRole('heading', { name: 'For the meat', exact: true })
	).toBeVisible();
	await expect(
		page.getByRole('heading', { name: 'For the salsa', exact: true })
	).toBeVisible();

	// You'll need section
	await expect(
		page.getByText('Dutch over or a medium-sized pot')
	).toBeVisible();

	// All sections in the steps
	await expect(
		page.getByRole('heading', { name: 'To cook the meat', exact: true })
	).toBeVisible();
	await expect(
		page.getByRole('heading', { name: 'To cook the salsa', exact: true })
	).toBeVisible();

	// Notes
	await expect(page.getByText('The easiest way to peel garlic')).toBeVisible();
});

test('plus button adds one portion', async ({ page }) => {
	await page.goto('http://localhost:4321/recipes/cochinita-pibil/');

	// Scroll to the ingredients section to init UI
	await page
		.getByRole('heading', { name: 'Ingredients', exact: true })
		.scrollIntoViewIfNeeded();

	const ingredients = page.locator('section').filter({
		has: page.getByRole('heading', { name: 'Ingredients' }),
	});
	const directions = page.locator('section').filter({
		has: page.getByRole('heading', { name: 'Directions' }),
	});

	// Initial state
	await expect(ingredients.getByText('Yields 600 g')).toBeVisible();
	await expect(ingredients.getByText('500 g of pork')).toBeVisible();
	await expect(
		ingredients.getByText('2 pinches of dried oregano')
	).toBeVisible();
	await expect(
		directions.getByText('2 pinches of dried oregano')
	).toBeVisible();

	// Add two portions
	await page.getByRole('button', { name: 'More' }).click();
	await page.getByRole('button', { name: 'More' }).click();

	// With two extra portions
	await expect(ingredients.getByText('Yields 800 g')).toBeVisible();
	// TODO: this should be rounded 670
	await expect(ingredients.getByText('667 g of pork')).toBeVisible();
	await expect(
		ingredients.getByText('3 pinches of dried oregano')
	).toBeVisible();
	await expect(
		directions.getByText('3 pinches of dried oregano')
	).toBeVisible();
});
