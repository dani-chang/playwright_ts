import { type Locator, type Page} from '@playwright/test';
import { BASE_URL } from '../setup';

const HEADER = "id=header";
const SLIDER = "id=slider";


export class HomePage{

    page: Page;
    // locator_site_title: Promise<string>;
    locator_header: Locator;
    locator_slider: Locator;
  static locator_header: any;

    constructor(page: Page){

        this.page = page;
        this.locator_header = page.locator(HEADER);
        this.locator_slider = page.locator(SLIDER);

    }

    async goToHomePage(){

        if(!BASE_URL) throw new Error(`BASE_URL is not defined.`);

        await this.page.goto(BASE_URL);
    }

    async getSiteTitle(): Promise<string>{
        return await this.page.title();
    }

}