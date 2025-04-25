import { $ } from '@wdio/globals'
import PagePO from './pagePO';
// import { WaitTimes } from '../data/wait.page.ts'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPagePO extends PagePO {
    /**
     * define selectors using getter methods
     */
    public get InventoryPage () {
        return $('.inventory_container');
    }
    
    public get BikeLightLabel () {
        return $('[data-test="item-0-title-link"]');
    }

    public get AddBikeLightToCartButton () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    public get cartButton () {
        return $('.shopping_cart_link');
    }

    public get removeButtonBikeLight () {
        return $('#remove-sauce-labs-bike-light');
    }

    public get removeButtonBagPack () {
        return $('#remove-sauce-labs-backpack');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // public async InventoryPageExists () {
    //     await browser.pause(WaitTimes.SHORT)
    //     await this.InventoryPage.isDisplayed()
    // }

    // public async clickItem () {
    //     await this.AddBikeLight.waitForClickable()
    //     await this.AddBikeLight.click()
    //     await browser.pause(WaitTimes.SHORT)
    // }

    // public async clickCart () {
    //     await this.cartButton.waitForClickable()
    //     await this.cartButton.click()
    //     await browser.pause(WaitTimes.SHORT)
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    // public open () {
    //     return super.open('login');
    // }
}

export default new InventoryPagePO();
