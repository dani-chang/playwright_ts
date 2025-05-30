
import { test as baseTest, Page } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { NavbarPage } from './pages/NavbarPage';
import { UserAccountPage } from './pages/UserAccountPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { TestCasesPage } from './pages/TestCasesPage';
import { ProductsPage } from './pages/ProductsPage';


type TestFixtures = {

    homePage: HomePage;
    navbarPage: NavbarPage;
    userAccountPage: UserAccountPage;
    contactUsPage : ContactUsPage;
    testCasesPage: TestCasesPage;
    productsPage: ProductsPage;


}


export const test = baseTest.extend<TestFixtures>({

    homePage: async function({page}, use){
        const homePage = new HomePage(page);
        await use(homePage);
    },

    navbarPage: async function({page}, use){

        const navbarPage = new NavbarPage(page);
        await use(navbarPage);

    },

    userAccountPage: async function({page}, use){

        const userAccountPage = new UserAccountPage(page);
        await use(userAccountPage);
    },

    contactUsPage: async function({page}, use){

        const contactUsPage = new ContactUsPage(page);
        await use(contactUsPage);

    },

    testCasesPage: async function({page}, use){

        const testCasesPage = new TestCasesPage(page);
        await use(testCasesPage);

    },

    productsPage:  async function({page}, use){

        const productsPage = new ProductsPage(page);
        await use(productsPage);

    }

})