import { Page, Locator } from "@playwright/test";

export class TestCasesPage {
    
    page: Page;
    locator_title: Locator;
    locator_description: Locator;

    constructor(page: Page){

        this.page = page;
        this.locator_title = page.locator('b').getByText('Test Cases', {exact: true});
        this.locator_description = page.getByText('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:');

    }

}