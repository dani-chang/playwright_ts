
import { test as baseTest, Page } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { NavbarPage } from './pages/NavbarPage';
import { UserAccountPage } from './pages/UserAccountPage';
import { ContactUsPage } from './pages/ContactUsPage';


type TestFixtures = {

    homePage: HomePage;
    navbarPage: NavbarPage;
    userAccountPage: UserAccountPage;
    contactUsPage : ContactUsPage;


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

    }

})