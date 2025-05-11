import { expect, type Locator, type Page} from '@playwright/test';
import { BASE_URL } from '../setup';


export class HomePage{

    HEADER = "id=header";
    SLIDER = "id=slider";

    page: Page;
    locator_header: Locator;
    locator_slider: Locator;

    constructor(page: Page){

        this.page = page;
        this.locator_header = page.locator(this.HEADER);
        this.locator_slider = page.locator(this.SLIDER);

    }

    async go_to_website(){

        if(!BASE_URL) throw new Error(`BASE_URL is not defined.`);

        await this.page.goto(BASE_URL);
    }

    async get_site_title(): Promise<string>{
        return await this.page.title();
    }

    async home_elements_are_visible(){

        await expect(this.locator_header).toBeVisible({visible: false});
        await expect(this.locator_slider).toBeVisible();

    }



}