import * as utils from './utils';

const random = utils.randomString();

export const SITE_TITLE = 'Automation Exercise';

export const SIGN_IN_USER_DATA = {
    
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






