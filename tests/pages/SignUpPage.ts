import { Locator, Page } from "@playwright/test";

export class SignUpPage {

    page: Page;
    
    locator_login_title: Locator;
    locator_input_login_mail: Locator;
    locator_input_login_pass:Locator;
    locator_btn_login: Locator;

    locator_signup_title: Locator;
    locator_signup_name: Locator;
    locator_signup_email: Locator;
    locator_btn_signup: Locator;

    locator_signup2_enter_info_title: Locator;
    locator_signup2_mr_mrs_title: Locator;
    locator_signup2_name: Locator;
    locator_signup2_email: Locator;
    locator_signup2_pass: Locator;
    locator_signup2_date_birth: Locator;
    
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


        this.locator_signup2_enter_info_title = page.getByText('Enter Account Information');
        this.locator_signup2_mr_mrs_title = page.getByText('Title',);
        this.locator_signup2_name = page.getByTestId('name');
        this.locator_signup2_email = page.getByTestId('email');
        this.locator_signup2_pass = page.getByTestId('password');

    }

}