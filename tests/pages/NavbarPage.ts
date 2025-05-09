import { expect, Locator, Page } from "@playwright/test";
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

    locator_navbar_item_logout: Locator;
    locator_navbar_item_delete_account: Locator;
    locator_navbar_item_logged_in_as: Locator;

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
        
        this.locator_navbar_item_logout = page.getByRole('listitem').filter({hasText: 'Logout'});
        this.locator_navbar_item_delete_account = page.getByRole('listitem').filter({hasText: 'Delete Account'});
        this.locator_navbar_item_logged_in_as = page.getByRole('listitem').filter({hasText: 'Logged in as'});

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

    async navbarElementsAreVisible(options: {loggedin?: false}){

        await expect(this.locator_navbar_item_home).toBeVisible();
        await expect(this.locator_navbar_item_products).toBeVisible();
        await expect(this.locator_navbar_item_cart).toBeVisible();
        await expect(this.locator_navbar_item_signup).toBeVisible();
        await expect(this.locator_navbar_item_testcases).toBeVisible();
        await expect(this.locator_navbar_item_api_testing).toBeVisible();
        await expect(this.locator_navbar_item_video_tutorials).toBeVisible();
        await expect(this.locator_navbar_item_contact).toBeVisible();

        if(options.loggedin)
        {
            await expect(this.locator_navbar_item_logged_in_as).toBeVisible();
            await expect(this.locator_navbar_item_logout).toBeVisible();
        }
        else
        {
            await expect(this.locator_navbar_item_logged_in_as).toBeVisible({visible: false});
            await expect(this.locator_navbar_item_logout).toBeVisible({visible: false});
        }  

    }

}