import { WaitTimes } from '../data/wait.page.ts';
import checkout_finalOverviewPagePO from '../pageobjects/checkout_finalOverviewPagePO.ts';

class finalCheckoutOverviewPageTasks {
    static async clickFinishButton() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await checkout_finalOverviewPagePO.finishButton.click()
        await browser.pause(WaitTimes.SHORT);
    }

    static async clickCancelButton() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await checkout_finalOverviewPagePO.cancelButton.click()
        await browser.pause(WaitTimes.SHORT);
    }
}

export default finalCheckoutOverviewPageTasks;
