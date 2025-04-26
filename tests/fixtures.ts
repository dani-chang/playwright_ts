
import { test as baseTest, Page } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { NavbarPage } from './pages/NavbarPage';
import { SignUpPage } from './pages/SignUpPage';


type TestFixtures = {

    homePage: HomePage;
    navbarPage: NavbarPage;
    signUpPage: SignUpPage;


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

    signUpPage: async function({page}, use){

        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    }

})
