import { Locator, Page } from "@playwright/test";

export class ContactUsPage {

    page: Page;

    locator_title_contact_us: Locator;
    locator_title_get_in_touch: Locator;
    locator_msg_note: Locator;

    locator_contact_input_name: Locator;
    locator_contact_input_email: Locator;
    locator_contact_input_subject: Locator;
    locator_contact_input_message: Locator;

    locator_contact_upload: Locator;
    locator_contact_btn_submit: Locator;
    locator_contact_msg_success: Locator;

    constructor(page: Page){

        this.locator_title_get_in_touch = page.getByText('Get In Touch');
        this.locator_title_contact_us = page.getByText('Contact Us');

        this.locator_msg_note = page.getByText('Below contact form is for testing purpose.');

        this.locator_contact_input_name = page.getByTestId('name');
        this.locator_contact_input_email = page.getByTestId('email');
        this.locator_contact_input_subject = page.getByTestId('subject');
        this.locator_contact_input_message = page.getByTestId('message');


        this.locator_contact_upload = page.locator('input[name="upload_file"]');

        this.locator_contact_btn_submit = page.getByTestId('submit-button');

        this.locator_contact_msg_success = page.getByText('Success! Your details have been submitted successfully.');

    }


}