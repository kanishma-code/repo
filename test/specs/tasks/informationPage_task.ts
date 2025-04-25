import { login_cred } from '../data/login_cred.page.ts';
import { WaitTimes } from '../data/wait.page.ts';
import informationPagePOPage from '../pageobjects/informationPagePO.ts';
// import cartPagePOPage from '../pageobjects/cartPagePO.page.ts';

class informationPageTasks {
    static async enterData() {
        await informationPagePOPage.firstName.setValue(login_cred.FIRST_NAME)
        await informationPagePOPage.lastName.setValue(login_cred.LAST_NAME)
        await informationPagePOPage.postalCode.setValue(login_cred.POSTAL_CODE)
    }

    static async clickContinueButton() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await informationPagePOPage.continueButton.click()
        await browser.pause(WaitTimes.SHORT);
    }

    static async clickCancelButton() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await informationPagePOPage.cancelButton.click()
        await browser.pause(WaitTimes.SHORT);
    }

    // static async loginUsingData(username: string, password: string) {
    //     await LoginPage.inputUsername.waitForClickable();
    //     await LoginPage.inputUsername.click();
    //     await LoginPage.inputUsername.setValue(username);
    
    //     await LoginPage.inputPassword.waitForClickable();
    //     await LoginPage.inputPassword.click();
    //     await LoginPage.inputPassword.setValue(password);
    
    //     await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
    //     await LoginPage.btnSubmit.click();
    //     await browser.pause(WaitTimes.SHORT);
    // }
}

export default informationPageTasks;
