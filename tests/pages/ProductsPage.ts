import { Locator, Page } from "@playwright/test";

export class ProductsPage {

    page: Page;
    locator_sale_image: Locator;
    locator_title_all_products: Locator;

    constructor(page: Page){

        this.page = page;
        this.locator_sale_image = page.locator('#sale_image');
        this.locator_title_all_products = page.locator('h2').getByText('All Products');

    }


}