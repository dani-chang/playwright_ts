import { type Locator, type Page} from '@playwright/test';
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

    async goToWebsite(){

        if(!BASE_URL) throw new Error(`BASE_URL is not defined.`);

        await this.page.goto(BASE_URL);
    }

    async getSiteTitle(): Promise<string>{
        return await this.page.title();
    }

}