import { WaitTimes } from '../data/wait.page.ts';
import LoginPage from '../pageobjects/loginPagePO.ts';

class AuthTasks {

    static async openWebPage () {
        await browser.url('https://www.saucedemo.com')
    }

    static async loginUsingData(username: string, password: string) {
        await LoginPage.inputUsername.waitForClickable();
        await LoginPage.inputUsername.click();
        await LoginPage.inputUsername.setValue(username);

        await LoginPage.inputPassword.waitForClickable();
        await LoginPage.inputPassword.click();
        await LoginPage.inputPassword.setValue(password);

        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await LoginPage.btnSubmit.click();
        await browser.pause(WaitTimes.SHORT);
    }

    static async closeErrorButton() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await LoginPage.errorMessageButton.click();
        await browser.pause(WaitTimes.SHORT);
    }
}

export default AuthTasks;
