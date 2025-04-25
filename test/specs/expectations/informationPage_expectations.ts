import { WaitTimes } from "../data/wait.page"
import informationPagePO from "../pageobjects/informationPagePO";

class InfoPageExpectations {

    static async InfoPageTitleMatches() {
        // await expect(informationPagePO.title.getText).toEqual('Checkout: Your Information')
        await expect(informationPagePO.title).toHaveText(expect.stringContaining('Checkout: Your Information'))
        await browser.pause(WaitTimes.SHORT)
    }
}

export default InfoPageExpectations;