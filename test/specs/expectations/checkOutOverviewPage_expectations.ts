import { WaitTimes } from "../data/wait.page"
import checkout_finalOverviewPagePO from "../pageobjects/checkout_finalOverviewPagePO";

class checkout_finalOverviewPageExpectations {

    static async InfoPageTitleMatches() {
        await expect(checkout_finalOverviewPagePO.title).toHaveText(expect.stringContaining('Checkout: Overview'))
        await browser.pause(WaitTimes.SHORT)
    }

    static async BikeLightTitleMatches() {
        await expect(checkout_finalOverviewPagePO.itemTitle).toHaveText(expect.stringContaining('Sauce Labs Bike Light'))
        await browser.pause(WaitTimes.SHORT)
    }

    static async BikeLightDescMatches() {
        await expect(checkout_finalOverviewPagePO.itemDesc).toHaveText(expect.stringContaining('Water-resistant with 3 lighting modes, 1 AAA battery included.'))
        await browser.pause(WaitTimes.SHORT)
    }
}

export default checkout_finalOverviewPageExpectations;