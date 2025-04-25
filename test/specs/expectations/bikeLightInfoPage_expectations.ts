import bikeLightInfoPagePO from "../pageobjects/bikeLightInfoPagePO";

class bikeLightInfoPageExpectations {
    static async expectBikeLightInformationPage() {
        await expect(bikeLightInfoPagePO.BikeLightTitle).toHaveText(expect.stringContaining('Sauce Labs Bike Light'))
        await expect(bikeLightInfoPagePO.BikeLightDescription).toHaveText(expect.stringContaining('1 AAA battery included.'))
    }
}

export default bikeLightInfoPageExpectations;
