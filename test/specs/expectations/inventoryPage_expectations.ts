import { WaitTimes } from '../data/wait.page.ts';
import inventoryPagePO from '../pageobjects/inventoryPagePO.ts';
import inventoryPage from '../pageobjects/inventoryPagePO.ts';
import { expect } from '@wdio/globals';

class InventoryPageExpectations {
    static async expectBikeLightInfoMatches() {
        await expect(inventoryPagePO.BikeLightLabel).toHaveText(expect.stringContaining('Sauce Labs Bike Light'))
        await browser.pause(WaitTimes.SHORT)
    }

    static async expectLoginSuccess() {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    }

    static async expectInventoryPageExists () {
        await browser.pause(WaitTimes.SHORT)
        await inventoryPage.InventoryPage.isDisplayed()
    }
    
    static async expectRemoveButton_BikeLightExists () {
        await browser.pause(WaitTimes.SHORT)
        await inventoryPage.removeButtonBikeLight.isDisplayed()
    }
}

export default InventoryPageExpectations;
