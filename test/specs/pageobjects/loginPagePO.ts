import { $ } from '@wdio/globals'
import PagePO from './pagePO';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPagePO extends PagePO {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#user-name');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('#login-button');
    }

    public get errorMessageContainer () {
        return $('.error-message-container error');
    }

    public get errorMessageButton () {
        return $('.error-button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // public async login (username: string, password: string) {
    //     await this.inputUsername.waitForClickable()
    //     await this.inputUsername.click()
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.waitForClickable()
    //     await this.inputPassword.click()
    //     await this.inputPassword.setValue(password);
    //     await browser.pause(3000);
    //     await this.btnSubmit.click();
    //     await browser.pause(3000);
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    // public open () {
    //     return super.open('login');
    // }
}

export default new LoginPagePO();
