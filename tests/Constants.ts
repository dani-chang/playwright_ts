const random = randomString();

export const SITE_TITLE = 'Automation Exercise';
export const EMAIL = `test@test${random}.com`;
export const FULL_NAME = `John Doe${random}`;
export const PASS = 'test123';
export const DATE_OF_BIRTH = {
    day: "7",
    month: "February",
    year: "1990"
}
export const FIRST_NAME = FULL_NAME.split(' ')[0];
export const LAST_NAME = FULL_NAME.split(' ')[1];
export const COMPANY = `My company ${random}`;
export const COUNTRY = 'New Zealand';
export const STATE = `my state${random}`;
export const CITY = `city ${random}`;
export const ADDRESS_1 = `Address1 ${random}`;
export const ADDRESS_2 = `Address2 ${random}`;
export const ZIPCODE = `zipcode ${random}`;
export const MOBILE_NR = `12345761${random};`

export const HEADER_ACCOUNT_CREATED = 'Account Created!';
export const P1_ACCOUNT_CREATED = 'Congratulations! Your new account has been successfully created!';
export const P2_ACCOUNT_CREATED = 'You can now take advantage of member privileges to enhance your online shopping experience with us.';








export function randomString(length: number = 5): string{
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;

}