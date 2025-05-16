import * as utils from './utils';

const random = utils.randomString();

export const SITE_TITLE = 'Automation Exercise';

export type SignUpUser = {
    email: string,
    full_name: string,
    pass: string,
    first_name: string,
    last_name: string,
    date_of_birth: {
        day: string,
        month: string,
        year: string
    },
    company: string,
    country: string,
    state: string,
    city: string,
    address_1: string,
    address_2: string,
    zipcode: string,
    mobile_nr: string
}


export const SIGNUP_USER_DEFAULT: SignUpUser = {

    email: `test@test${random}.com`,
    full_name: `John Doe${random}`,
    pass: 'test123',
    first_name: 'John',
    last_name: `Doe${random}`,
    date_of_birth: {
        day: '7',
        month: 'February',
        year: '1990'
    },
    company: `My Company${random}`,
    country: 'New Zealand',
    state: `state${random}`,
    city: `daCity${random}`,
    address_1: `Address123 ${random}`,
    address_2: `Address 456 ${random}`,
    zipcode: 'thezipcode',
    mobile_nr: `1234556`
}

export const LOGIN_USER_DEFAULT = {
    email: "test_daniel@123.com",
    pass: "123123123",
    logged_in_as: "Daniel Testing123"
}






