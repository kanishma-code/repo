import { $ } from '@wdio/globals'
import PagePO from './pagePO';

class cartPagePO extends PagePO {

    public get checkOutButton () {
        return $('#checkout');
    }
    
    public get continueShoppingButton () {
        return $('#continue-shopping');
    }

    public get removeBikeLightButton () {
        return $('#remove-sauce-labs-bike-light');
    }

    public get BikeLightPrice () {
        return $('.inventory_item_price');
    }
}

export default new cartPagePO();
