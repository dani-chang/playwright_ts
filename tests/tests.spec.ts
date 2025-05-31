import { expect } from '@playwright/test';
import * as Consts from './constants';
import { HomePage } from './pages/HomePage';
import { beforeEach } from 'node:test';
import { BASE_URL } from './setup';
import {test} from './fixtures';
import * as data from './data/testdata';
import { UserAccountPage } from './pages/UserAccountPage';



test.beforeEach(async ({homePage}) => {

  await homePage.go_to_website();

});

test(`Title is \'${Consts.SITE_TITLE}\'`, async ({ page }) => {

  await expect(page).toHaveTitle(Consts.SITE_TITLE);


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

test('Navbar - Should display the expected navbar items.', async ({ navbarPage }) => {

  await expect(navbarPage.locator_navbar_item_home).toBeVisible();
  await expect(navbarPage.locator_navbar_item_products).toBeVisible();
  await expect(navbarPage.locator_navbar_item_cart).toBeVisible();
  await expect(navbarPage.locator_navbar_item_signup_login).toBeVisible();
  await expect(navbarPage.locator_navbar_item_testcases).toBeVisible();
  await expect(navbarPage.locator_navbar_item_api_testing).toBeVisible();
  await expect(navbarPage.locator_navbar_item_video_tutorials).toBeVisible();
  await expect(navbarPage.locator_navbar_item_contact).toBeVisible();

});

test('Test Case 1: Register User.', async function ({homePage, navbarPage, userAccountPage}) {

  await expect(homePage.locator_header).toBeVisible()
  await expect(homePage.locator_slider).toBeVisible()

  await expect(navbarPage.locator_navbar).toBeVisible();
  await expect(navbarPage.locator_navbar_item_signup_login).toBeVisible();
  
  await navbarPage.go_to_signup_login();
  await userAccountPage.sign_up(data.SIGNUP_USER_DEFAULT);
  
  await expect(navbarPage.page.url()).toBe(`https://automationexercise.com/`);
  
  await expect(navbarPage.locator_navbar_item_logout).toBeVisible();
  await expect(navbarPage.locator_navbar_item_logged_in_as).toBeVisible();
  await expect(navbarPage.locator_navbar_item_delete_account).toBeVisible();

  await expect(navbarPage.locator_navbar_item_logged_in_as).toContainText(data.SIGNUP_USER_DEFAULT.full_name);

  await navbarPage.locator_navbar_item_delete_account.click();
  await expect(userAccountPage.locator_delete_header_account_deleted).toBeVisible();
  await expect(userAccountPage.locator_delete_p1_account_deleted).toBeVisible();
  await expect(userAccountPage.locator_delete_p2_account_deleted).toBeVisible();

  await userAccountPage.locator_signup3_btn_continue.click();

});

test('Test Case 2: Login User with correct email and password.', async function({homePage, navbarPage, userAccountPage}){

  await homePage.home_elements_are_visible();
  await navbarPage.expect_navbar_elements_to_be_visible({loggedin: false});

  await navbarPage.go_to_signup_login();

  await userAccountPage.log_in(data.LOGIN_USER_DEFAULT.email, data.LOGIN_USER_DEFAULT.pass);
  await expect(navbarPage.locator_navbar_item_logged_in_as).toContainText(data.LOGIN_USER_DEFAULT.logged_in_as);

  await navbarPage.expect_navbar_elements_to_be_visible({loggedin: true, logged_in_as: data.LOGIN_USER_DEFAULT.logged_in_as});
  
  
});

test('Test Case 3: Login User with incorrect email and password.', async function({homePage, navbarPage, userAccountPage}){

  await homePage.home_elements_are_visible();
  await navbarPage.expect_navbar_elements_to_be_visible({loggedin: false});

  await navbarPage.go_to_signup_login();

  await userAccountPage.log_in('invalidTestMail_123@gmail.com', data.LOGIN_USER_DEFAULT.pass);

  await expect(userAccountPage.locator_login_error_msg).toBeVisible();

  
});

test('Test Case 4: Logout User.', async function({homePage, navbarPage, userAccountPage}){

  await homePage.home_elements_are_visible();
  await navbarPage.expect_navbar_elements_to_be_visible({loggedin: false});

  await navbarPage.go_to_signup_login();

  await userAccountPage.log_in(data.LOGIN_USER_DEFAULT.email, data.LOGIN_USER_DEFAULT.pass);

  await navbarPage.expect_navbar_elements_to_be_visible({loggedin: true, logged_in_as: data.LOGIN_USER_DEFAULT.logged_in_as});

  await expect(navbarPage.locator_navbar_item_logout).toBeVisible();
  await navbarPage.locator_navbar_item_logout.click();

  await navbarPage.expect_navbar_elements_to_be_visible({loggedin: false});
  
});

test('Test Case 5: Register User with existing email.', async function({homePage, navbarPage, userAccountPage}){

  await homePage.home_elements_are_visible();
  await navbarPage.expect_navbar_elements_to_be_visible({loggedin: false});

  await navbarPage.go_to_signup_login();

  await expect(userAccountPage.locator_signup_email).toBeVisible();
  await expect(userAccountPage.locator_signup_name).toBeVisible();

  await userAccountPage.locator_signup_email.fill(data.LOGIN_USER_DEFAULT.email);
  await userAccountPage.locator_signup_name.fill(data.LOGIN_USER_DEFAULT.logged_in_as);

  await userAccountPage.locator_signup_btn.click();
  await expect(userAccountPage.locator_signup_error_msg).toBeVisible();
  
});

test('Test Case 6: Contact Us Form.', async function({homePage, navbarPage, contactUsPage}){

  await homePage.home_elements_are_visible();
  await navbarPage.expect_navbar_elements_to_be_visible({loggedin: false});

  await navbarPage.go_to_contact_us();

  await expect(contactUsPage.locator_title_get_in_touch).toBeVisible();

  await expect(contactUsPage.locator_contact_input_email).toBeVisible();
  await expect(contactUsPage.locator_contact_input_name).toBeVisible();
  await expect(contactUsPage.locator_contact_input_subject).toBeVisible();
  await expect(contactUsPage.locator_contact_input_message).toBeVisible();
  await expect(contactUsPage.locator_contact_btn_submit).toBeVisible();
  

  await contactUsPage.locator_contact_input_email.fill(data.LOGIN_USER_DEFAULT.email);
  await contactUsPage.locator_contact_input_name.fill(data.LOGIN_USER_DEFAULT.logged_in_as);
  await contactUsPage.locator_contact_input_subject.fill('Test Subject Contact Us');
  await contactUsPage.locator_contact_input_message.fill('Free message contact us!');

  await contactUsPage.locator_contact_upload.setInputFiles('./tests/data/testfile.txt');

  await contactUsPage.accept_dialog_prompt();
  await contactUsPage.locator_contact_btn_submit.click();

  await expect(contactUsPage.locator_contact_msg_success).toBeVisible();
  await expect(contactUsPage.locator_contact_btn_home).toBeVisible();

  await contactUsPage.locator_contact_btn_home.click();
  await expect(homePage.page.url()).toBe(`${BASE_URL}/`);
  
});

test('Test Case 7: Verify Test Cases Page.', async function({homePage, navbarPage, testCasesPage}){

  await homePage.home_elements_are_visible();
  await expect(navbarPage.locator_navbar_item_testcases).toBeVisible();
  await navbarPage.go_to_test_cases();

  await expect(testCasesPage.locator_title).toBeVisible();
  await expect(testCasesPage.locator_description).toBeVisible();

});

test('Test Case 8: Verify All Products and product detail page.', async function({homePage, navbarPage, productsPage}){

  await homePage.home_elements_are_visible();
  await expect(navbarPage.locator_navbar_item_products).toBeVisible();
  await navbarPage.go_to_products();

  await expect(productsPage.locator_sale_image).toBeVisible();
  await expect(productsPage.locator_title_all_products).toBeVisible();

});

