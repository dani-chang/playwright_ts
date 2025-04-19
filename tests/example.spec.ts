import { test, expect } from '@playwright/test';
import * as Constants from './Constants';
import { HomePage } from './pages/HomePage';
import { beforeEach } from 'node:test';
import { BASE_URL } from './setup';


test.beforeEach(async ({page}) => {

  const homePage = new HomePage(page);
  await homePage.goToHomePage();

});

test(`Title is \'${Constants.SITE_TITLE}\'`, async ({ page }) => {

  await expect(page).toHaveTitle(Constants.SITE_TITLE);


});

test('Se visualiza Header.', async ({ page }) => {
  const homePage = new HomePage(page); // TODO: esto es muy trucho
  await expect(homePage.locator_header).toBeVisible();


});

