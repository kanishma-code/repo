import { WaitTimes } from "../data/wait.page"
import backToHomePagePO from "../pageobjects/backToHomePagePO";

class BackToHomePageExpectations {
    static async expectThankYouNoteExist() {
        await expect(backToHomePagePO.fullPage).toHaveText(expect.stringContaining('Thank You'))
        await browser.pause(WaitTimes.SHORT)
    }
}

export default BackToHomePageExpectations;
