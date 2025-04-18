import { test, expect } from '@playwright/test';
import {BASE_URL} from './setup';


// require('dotenv').config();
// console.log(process.env.ENV_QA);




console.log(BASE_URL);

test('has title', async ({ page }) => {
  await expect(2).toBe(2);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
