import { WaitTimes } from '../data/wait.page.ts';
import cartPagePOPage from '../pageobjects/cartPagePO.ts';

class cartPageTasks {
    static async clickCheckOutButton() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await cartPagePOPage.checkOutButton.click()
        await browser.pause(WaitTimes.SHORT);
    }

    static async clickContinueShoppingButton() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await cartPagePOPage.continueShoppingButton.click();
        await browser.pause(WaitTimes.SHORT);
    }

    static async clickRemoveBikeLightButton() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await cartPagePOPage.removeBikeLightButton.click();
        await browser.pause(WaitTimes.SHORT);
    }
}

export default cartPageTasks;
