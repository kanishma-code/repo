import cartPagePO from "../pageobjects/cartPagePO";

class cartPageExpectations {
    static async expectBikeLightPriceMatches() {
        await expect(cartPagePO.BikeLightPrice).toHaveText(expect.stringContaining('9.99'))
    }
}

export default cartPageExpectations;
