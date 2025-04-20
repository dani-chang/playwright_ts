
import { test as baseTest, Page } from '@playwright/test';
import { HomePage } from './pages/HomePage';


type TestFixtures = {

    homePage: HomePage;

}


export const test = baseTest.extend<TestFixtures>({

    homePage: async function({page}, use){
        const homePage = new HomePage(page);
        await use(homePage);
    }

})