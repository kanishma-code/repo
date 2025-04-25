import loginPage from '../pageobjects/loginPagePO.ts';
import { expect } from '@wdio/globals';

class LoginExpectations {
    static async expectLoginErrorExists() {
        await expect(loginPage.errorMessageButton).toExist()
    }

    static async expectLoginSuccess() {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    }
}

export default LoginExpectations;
