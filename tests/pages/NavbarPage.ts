import { Locator, Page } from "@playwright/test";
import * as homePage from './HomePage';


export class NavbarPage{

    LOCATOR_NAVBAR = `//*[@id="header"]/div/div/div/div[2]/div/ul`;
    // LOCATOR_NAVBAR_ITEM = `//*[@id="header"]/div/div/div/div[2]/div/ul/li`; 
    // NAVBAR_ITEMS_EXPECTED: ReadonlyArray<string | RegExp> = ['Home', ' Products', 'Cart',  'Signup / Login', 'Test Cases', 'API Testing', 'Video Tutorials', 'Contact us'];
    
    page: Page;
    locator_navbar: Locator;
    locator_navbar_item_home: Locator;
    locator_navbar_item_products: Locator;
    locator_navbar_item_cart: Locator;
    locator_navbar_item_signup: Locator;
    locator_navbar_item_testcases: Locator;
    locator_navbar_item_api_testing: Locator;
    locator_navbar_item_video_tutorials: Locator;
    locator_navbar_item_contact: Locator;
    locator_navbar_item: Locator;


    constructor(page: Page){

        this.page = page;
        this.locator_navbar = page.locator(this.LOCATOR_NAVBAR);

        this.locator_navbar_item_home = page.getByRole('listitem').filter({hasText: 'Home'});
        this.locator_navbar_item_products = page.getByRole('listitem').filter({hasText: ' Products'});
        this.locator_navbar_item_cart = page.getByRole('listitem').filter({hasText: 'Cart'});
        this.locator_navbar_item_signup = page.getByRole('listitem').filter({hasText: 'Signup / Login'});
        this.locator_navbar_item_testcases = page.getByRole('listitem').filter({hasText: 'Test Cases'});
        this.locator_navbar_item_api_testing = page.getByRole('listitem').filter({hasText: 'API Testing'});
        this.locator_navbar_item_video_tutorials = page.getByRole('listitem').filter({hasText: 'Video Tutorials'});
        this.locator_navbar_item_contact = page.getByRole('listitem').filter({hasText: 'Contact us'});
        // this.locator_navbar_item = page.locator(this.LOCATOR_NAVBAR_ITEM);

    }

    async goToHome(){
        await this.locator_navbar_item_home.click();
    }

    async goToProducts(){
        await this.locator_navbar_item_products.click();
    }

    async goToCart(){
        await this.locator_navbar_item_cart.click();
    }

    async goToSignUp(){
        await this.locator_navbar_item_signup.click();
    }

}