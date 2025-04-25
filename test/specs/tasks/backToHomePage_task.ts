import { WaitTimes } from '../data/wait.page.ts';
import backToHomePagePO from '../pageobjects/backToHomePagePO.ts';

class backToHomePageTasks {

    static async clickBackToHomeButton() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await backToHomePagePO.backToHomeButton.click()
        await browser.pause(WaitTimes.SHORT);
    }

}

export default backToHomePageTasks;
