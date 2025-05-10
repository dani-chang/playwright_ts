import { expect, Locator, Page } from "@playwright/test";
import { SignUpUser } from "../testdata";
import { BASE_URL } from "../setup";
import * as Consts from '../constants';

export class UserAccountPage {

    page: Page;
    
    // Sign Up 1
    locator_login_title: Locator;
    locator_input_login_mail: Locator;
    locator_input_login_pass:Locator;
    locator_btn_login: Locator;
    
    locator_signup_title: Locator;
    locator_signup_name: Locator;
    locator_signup_email: Locator;
    locator_btn_signup: Locator;

    // Sign Up 2 - account info
    locator_signup2_title_enter_info: Locator;
    locator_signup2_title_mr_mrs: Locator;
    locator_signup2_title_name: Locator;
    locator_signup2_title_email: Locator;
    locator_signup2_title_pass: Locator;
    locator_signup2_title_date_birth: Locator;

    locator_signup2_mr: Locator;
    locator_signup2_mrs: Locator;
    locator_signup2_name: Locator;
    locator_signup2_email: Locator;
    locator_signup2_pass: Locator;
    locator_signup2_days: Locator;
    locator_signup2_months: Locator;
    locator_signup2_years: Locator;
    locator_signup2_check_newsletter: Locator;
    locator_signup2_check_offers: Locator;

    // Sign Up 2 - address info
    locator_signup2_title_first_name: Locator;
    locator_signup2_title_last_name: Locator;
    locator_signup2_title_company: Locator;
    locator_signup2_title_address: Locator;
    locator_signup2_title_address2: Locator;
    locator_signup2_title_country: Locator;
    locator_signup2_title_state: Locator;
    locator_signup2_title_city: Locator;
    locator_signup2_title_zipcode: Locator;
    locator_signup2_title_mobile_nr: Locator;

    locator_signup2_first_name: Locator;
    locator_signup2_last_name: Locator;
    locator_signup2_company: Locator;
    locator_signup2_address: Locator;
    locator_signup2_address2: Locator;
    locator_signup2_country: Locator;
    locator_signup2_state: Locator;
    locator_signup2_city: Locator;
    locator_signup2_zipcode: Locator;
    locator_signup2_mobile_nr: Locator;

    locator_btn_create_account: Locator;

    // Sign Up 3 - Account Created
    locator_signup3_header_account_created: Locator;
    locator_signup3_p1_account_created: Locator;
    locator_signup3_p2_account_created: Locator;
    locator_btn_continue: Locator;

    // Delete Account
    locator_delete_header_account_deleted: Locator;
    locator_delete_p1_account_deleted: Locator;
    locator_delete_p2_account_deleted: Locator;


    constructor(page: Page){

        this.page = page;
        this.locator_signup_title = page.getByText('New User Signup!');
        this.locator_login_title = page.getByText('Login to your account');

        this.locator_signup_name = page.getByTestId('signup-name');
        this.locator_signup_email = page.getByTestId('signup-email');
        this.locator_btn_signup = page.getByRole('button', {name: 'Signup'});

        this.locator_input_login_mail = page.getByTestId('login-email');
        this.locator_input_login_pass = page.getByTestId('login-password');
        this.locator_btn_login = page.getByTestId('login-button');

        // signUp 2 - account info
        this.locator_signup2_title_enter_info = page.getByText('Enter Account Information');
        this.locator_signup2_title_mr_mrs = page.getByText('Title',);
        this.locator_signup2_title_name = page.getByText('Name *', {exact: true});
        this.locator_signup2_title_email = page.getByText('Email *', {exact: true});
        this.locator_signup2_title_pass = page.getByText('Password *', {exact: true});
        this.locator_signup2_title_date_birth = page.getByText('Date of Birth');

        this.locator_signup2_mr = page.getByRole('radio', {name: 'Mr.'});
        this.locator_signup2_mrs = page.getByRole('radio', {name: 'Mrs.'});
        this.locator_signup2_name = page.getByTestId('name');
        this.locator_signup2_email = page.getByTestId('email');
        this.locator_signup2_pass = page.getByTestId('password');
        this.locator_signup2_days = page.getByTestId('days');
        this.locator_signup2_months = page.getByTestId('months');
        this.locator_signup2_years = page.getByTestId('years');

        this.locator_signup2_check_newsletter = page.getByRole('checkbox', {name: 'Sign up for our newsletter!'})
        this.locator_signup2_check_offers = page.getByRole('checkbox', {name: 'Receive special offers from our partners!'});
    
        // signUp 2 - address info
        this.locator_signup2_first_name = page.getByTestId('first_name');
        this.locator_signup2_last_name = page.getByTestId('last_name');
        this.locator_signup2_company = page.getByTestId('company');
        this.locator_signup2_address = page.getByTestId('address');
        this.locator_signup2_address2 = page.getByTestId('address2');
        this.locator_signup2_country = page.getByTestId('country');
        this.locator_signup2_state = page.getByTestId('state');
        this.locator_signup2_city = page.getByTestId('city');
        this.locator_signup2_zipcode = page.getByTestId('zipcode');
        this.locator_signup2_mobile_nr = page.getByTestId('mobile_number');
    
        this.locator_btn_create_account = page.getByRole('button', {name: 'Create Account'});

        // Sign Up 3
        this.locator_signup3_header_account_created = page.getByTestId('account-created');
        this.locator_signup3_p1_account_created = page.getByText('Congratulations!');
        this.locator_signup3_p2_account_created = page.getByText('You can now take advantage');
        this.locator_btn_continue = page.getByTestId('continue-button');

        // Delete
        this.locator_delete_header_account_deleted = page.getByText('Account Deleted!');
        this.locator_delete_p1_account_deleted = page.getByText('Your account has been');
        this.locator_delete_p2_account_deleted = page.getByText('You can create new account to');
    }


    async sign_up(user_data: SignUpUser){
        await expect(this.page.url()).toBe(`${BASE_URL}/${Consts.URL_LOGIN_EXPECTED}`);

        // Step 5
        await expect(this.locator_signup_title).toBeVisible();

        // Step 6
        await this.locator_signup_email.fill(user_data.email);
        await this.locator_signup_name.fill(user_data.full_name);

        // Step 7
        await this.locator_btn_signup.click();

        // Sign Up 2 view
        // Step 8
        await expect(this.page.url()).toBe(`${BASE_URL}/${Consts.URL_SIGNUP_EXPECTED}`);
        await expect(this.locator_signup2_title_enter_info).toBeVisible();
        await expect(this.locator_signup2_title_mr_mrs).toBeVisible();
        await expect(this.locator_signup2_title_name).toBeVisible();
        await expect(this.locator_signup2_title_email).toBeVisible();
        await expect(this.locator_signup2_title_pass).toBeVisible();

        await expect(this.locator_signup2_mr).toBeVisible();
        await expect(this.locator_signup2_mrs).toBeVisible();

        await expect(this.locator_signup2_name).toBeVisible();
        await expect(this.locator_signup2_email).toBeVisible();
        await expect(this.locator_signup2_pass).toBeVisible();

        await expect(this.locator_signup2_title_date_birth).toBeVisible();
        await expect(this.locator_signup2_days).toBeVisible();
        await expect(this.locator_signup2_months).toBeVisible();
        await expect(this.locator_signup2_years).toBeVisible();

        await expect(this.locator_signup2_check_newsletter).toBeChecked({checked: false});
        await expect(this.locator_signup2_check_offers).toBeChecked({checked: false});

        await expect(this.locator_btn_create_account).toBeVisible();

        // SignUp 2 - Account info form
        // Step 9
        await this.locator_signup2_mr.click();

        const value_name = await this.locator_signup2_name.inputValue();
        const value_email = await this.locator_signup2_email.inputValue();
        
        await expect(value_name).toBe(user_data.full_name);
        await expect(value_email).toBe(user_data.email);

        await this.locator_signup2_pass.fill(user_data.pass);
        await this.locator_signup2_days.selectOption(user_data.date_of_birth.day);
        await this.locator_signup2_months.selectOption(user_data.date_of_birth.month);
        await this.locator_signup2_years.selectOption(user_data.date_of_birth.year);

        // Step 10
        await this.locator_signup2_check_newsletter.setChecked(true);

        // Step 11
        await this.locator_signup2_check_offers.click();//.setChecked(true);

        // Sign Up 2 - Address info form
        // Step 12
        await this.locator_signup2_first_name.fill(user_data.first_name);
        await this.locator_signup2_last_name.fill(user_data.last_name);
        await this.locator_signup2_company.fill(user_data.company);
        await this.locator_signup2_address.fill(user_data.address_1);
        await this.locator_signup2_address2.fill(user_data.address_2);
        await this.locator_signup2_country.selectOption(user_data.country);
        await this.locator_signup2_state.fill(user_data.state);
        await this.locator_signup2_city.fill(user_data.city);
        await this.locator_signup2_zipcode.fill(user_data.zipcode);
        await this.locator_signup2_mobile_nr.fill(user_data.mobile_nr);

        // Step 13
        await this.locator_btn_create_account.click();
        
        // Sign Up 3 - Accounted Created
        // Step 14
        await expect(this.page.url()).toBe(`${BASE_URL}/${Consts.URL_ACCOUNT_CREATED_EXPECTED}`);
        await expect(this.locator_signup3_header_account_created).toBeVisible();
        await expect(this.locator_signup3_p1_account_created).toBeVisible();
        await expect(this.locator_signup3_p2_account_created).toBeVisible();

        // Step 15
        await this.locator_btn_continue.click();

        // Step 16
        await expect(this.page.url()).toBe(`https://automationexercise.com/`);
    }






}