const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require('@wdio/globals');
//const Page = require("../pages/page");
const LoginPage = require("../pages/login.page")

Given(/^User open Kasirdemo Website$/, async() => {
    await LoginPage.open();
});

When (/^User login with invalid email$/, async() => {
    await LoginPage.login('invaliduser@yopmail.com','qwerty123456');
} );

When (/^User login with invalid password$/, async() => {
    await LoginPage.login('tokotest@yopmail.com', 'invalidpass');
} );

Then (/^User should see an error message$/, async() => {
    const errorMessage = await LoginPage.errorMessage;
    await expect(errorMessage).toHaveText('Kredensial yang Anda berikan salah');
} );

When (/^User login using valid email and password$/, async() => {
    await LoginPage.login('tokotest@yopmail.com','qwerty123456');
} );

Then (/^User should be on Homepage$/, async() => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/sales/create');
} );

