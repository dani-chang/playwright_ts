import { expect } from '@playwright/test';
import * as constants from './constants';
import { HomePage } from './pages/HomePage';
import { beforeEach } from 'node:test';
import { BASE_URL } from './setup';
import {test} from './fixtures';


test.beforeEach(async ({homePage}) => {

  await homePage.goToWebsite();

});
/*
test(`Title is \'${constants.SITE_TITLE}\'`, async ({ page }) => {

  await expect(page).toHaveTitle(constants.SITE_TITLE);


});

test('Home - The header is visible.', async ({ homePage }) => {

  await expect(homePage.locator_header).toBeVisible();

});

test('Home - The slider is visible.', async ({ homePage }) => {

  await expect(homePage.locator_slider).toBeVisible();

});

test('Navbar - Navbar is visible.', async ({ navbarPage }) => {

  await expect(navbarPage.locator_navbar).toBeVisible();

});

test('Navbar - The items are the expected ones.', async ({ navbarPage }) => {

  await expect(navbarPage.locator_navbar_item_home).toBeVisible();
  await expect(navbarPage.locator_navbar_item_products).toBeVisible();
  await expect(navbarPage.locator_navbar_item_cart).toBeVisible();
  await expect(navbarPage.locator_navbar_item_signup).toBeVisible();
  await expect(navbarPage.locator_navbar_item_testcases).toBeVisible();
  await expect(navbarPage.locator_navbar_item_api_testing).toBeVisible();
  await expect(navbarPage.locator_navbar_item_video_tutorials).toBeVisible();
  await expect(navbarPage.locator_navbar_item_contact).toBeVisible();

});
*/
test('Testcase 1', async ({navbarPage, signUpPage}) => {

  await navbarPage.goToSignUp();
  await signUpPage.locator_signup_email.fill(constants.EMAIL);
  await signUpPage.locator_signup_name.fill(constants.NAME);
  await signUpPage.locator_btn_signup.click();

  // signup2 - account info
  await expect(signUpPage.locator_signup2_title_enter_info).toBeVisible();
  await expect(signUpPage.locator_signup2_title_mr_mrs).toBeVisible();
  await expect(signUpPage.locator_signup2_title_name).toBeVisible();
  await expect(signUpPage.locator_signup2_title_email).toBeVisible();
  await expect(signUpPage.locator_signup2_title_pass).toBeVisible();

  await expect(signUpPage.locator_signup2_name).toBeVisible();
  await expect(signUpPage.locator_signup2_email).toBeVisible();

  const value_name = await signUpPage.locator_signup2_name.inputValue();
  const value_email = await signUpPage.locator_signup2_email.inputValue();
  
  await expect(value_name).toBe(constants.NAME);
  await expect(value_email).toBe(constants.EMAIL);
  await expect(signUpPage.locator_signup2_pass).toBeVisible();

  await expect(signUpPage.locator_signup2_title_date_birth).toBeVisible();
  await expect(signUpPage.locator_signup2_days).toBeVisible();
  await expect(signUpPage.locator_signup2_months).toBeVisible();
  await expect(signUpPage.locator_signup2_years).toBeVisible();

  // await signUpPage.locator_signup2_days.click();

  // signup2 - address info

});
