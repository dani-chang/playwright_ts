import { expect } from '@playwright/test';
import * as Consts from './constants';
import { HomePage } from './pages/HomePage';
import { beforeEach } from 'node:test';
import { BASE_URL } from './setup';
import {test} from './fixtures';
import { sign } from 'crypto';


test.beforeEach(async ({homePage}) => {

  await homePage.goToWebsite();

});

test(`Title is \'${Consts.SITE_TITLE}\'`, async ({ page }) => {

  await expect(page).toHaveTitle(Consts.SITE_TITLE);


});
/*
test('Home - The header is visible.', async ({ homePage }) => {

  await expect(homePage.locator_header).toBeVisible();

});

test('Home - The slider is visible.', async ({ homePage }) => {

  await expect(homePage.locator_slider).toBeVisible();

});

test('Navbar - Navbar is visible.', async ({ navbarPage }) => {

  await expect(navbarPage.locator_navbar).toBeVisible();

});*/
/*
test('Navbar - Should display the expected navbar items.', async ({ navbarPage }) => {

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
test('Testcase 1', async ({homePage, navbarPage, signUpPage}) => {

  // await expect(homePage.getSiteTitle()).toBe(constants.SITE_TITLE);
  // Step 3
  await expect(homePage.locator_header).toBeVisible()
  await expect(homePage.locator_slider).toBeVisible()

  await expect(navbarPage.locator_navbar).toBeVisible();
  await expect(navbarPage.locator_navbar_item_signup).toBeVisible();
  
  // Step 4
  await navbarPage.goToSignUp();

  // Step 5
  await expect(signUpPage.locator_signup_title).toBeVisible();

  // Step 6
  await signUpPage.locator_signup_email.fill(Consts.EMAIL);
  await signUpPage.locator_signup_name.fill(Consts.FULL_NAME);

  // Step 7
  await signUpPage.locator_btn_signup.click();

  // Sign Up 2 view
  // Step 8
  await expect(signUpPage.locator_signup2_title_enter_info).toBeVisible();
  await expect(signUpPage.locator_signup2_title_mr_mrs).toBeVisible();
  await expect(signUpPage.locator_signup2_title_name).toBeVisible();
  await expect(signUpPage.locator_signup2_title_email).toBeVisible();
  await expect(signUpPage.locator_signup2_title_pass).toBeVisible();

  await expect(signUpPage.locator_signup2_mr).toBeVisible();
  await expect(signUpPage.locator_signup2_mrs).toBeVisible();

  await expect(signUpPage.locator_signup2_name).toBeVisible();
  await expect(signUpPage.locator_signup2_email).toBeVisible();
  await expect(signUpPage.locator_signup2_pass).toBeVisible();

  await expect(signUpPage.locator_signup2_title_date_birth).toBeVisible();
  await expect(signUpPage.locator_signup2_days).toBeVisible();
  await expect(signUpPage.locator_signup2_months).toBeVisible();
  await expect(signUpPage.locator_signup2_years).toBeVisible();

  await expect(signUpPage.locator_signup2_check_newsletter).toBeChecked({checked: false});
  await expect(signUpPage.locator_signup2_check_offers).toBeChecked({checked: false});

  await expect(signUpPage.locator_btn_create_account).toBeVisible();

  // SignUp 2 - Account info form
  // Step 9
  await signUpPage.locator_signup2_mr.click();

  const value_name = await signUpPage.locator_signup2_name.inputValue();
  const value_email = await signUpPage.locator_signup2_email.inputValue();
  
  await expect(value_name).toBe(Consts.FULL_NAME);
  await expect(value_email).toBe(Consts.EMAIL);

  await signUpPage.locator_signup2_pass.fill(Consts.PASS);
  await signUpPage.locator_signup2_days.selectOption(Consts.DATE_OF_BIRTH.day);
  await signUpPage.locator_signup2_months.selectOption(Consts.DATE_OF_BIRTH.month);
  await signUpPage.locator_signup2_years.selectOption(Consts.DATE_OF_BIRTH.year);

  // Step 10
  await signUpPage.locator_signup2_check_newsletter.setChecked(true);

  // Step 11
  await signUpPage.locator_signup2_check_offers.click();//.setChecked(true);

  // Sign Up 2 - Address info form
  // Step 12
  await signUpPage.locator_signup2_first_name.fill(Consts.FIRST_NAME);
  await signUpPage.locator_signup2_last_name.fill(Consts.LAST_NAME);
  await signUpPage.locator_signup2_company.fill(Consts.COMPANY);
  await signUpPage.locator_signup2_address.fill(Consts.ADDRESS_1);
  await signUpPage.locator_signup2_address2.fill(Consts.ADDRESS_2);
  await signUpPage.locator_signup2_country.selectOption(Consts.COUNTRY);
  await signUpPage.locator_signup2_state.fill(Consts.STATE);
  await signUpPage.locator_signup2_city.fill(Consts.CITY);
  await signUpPage.locator_signup2_zipcode.fill(Consts.ZIPCODE);
  await signUpPage.locator_signup2_mobile_nr.fill(Consts.MOBILE_NR);

  // Step 13
  await signUpPage.locator_btn_create_account.click();
  
  // Step 14
  await expect(signUpPage.locator_header_account_created).toBeVisible();
  await expect(signUpPage.locator_p1_account_created).toBeVisible(); // TODO: pw unable to find this locator
  await expect(signUpPage.locator_p2_account_created).toBeVisible();

});
