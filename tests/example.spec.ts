import { expect } from '@playwright/test';
import * as Constants from './Constants';
import { HomePage } from './pages/HomePage';
import { beforeEach } from 'node:test';
import { BASE_URL } from './setup';
import {test} from './fixtures';


test.beforeEach(async ({homePage}) => {

  // const homePage = new HomePage(page);
  await homePage.goToHomePage();

});

test(`Title is \'${Constants.SITE_TITLE}\'`, async ({ page }) => {

  await expect(page).toHaveTitle(Constants.SITE_TITLE);


});

test('Se visualiza Header en Home.', async ({ homePage }) => {

  // const homePage = new HomePage(page);
  await expect(homePage.locator_header).toBeVisible();


});

