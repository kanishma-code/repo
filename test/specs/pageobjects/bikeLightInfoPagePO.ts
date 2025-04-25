import { $ } from '@wdio/globals'
import PagePO from './pagePO';

class BikeLightInfoPagePO extends PagePO {

    public get InventoryItemInfoPage () {
        return $('#inventory_item_container');
    }
    
    public get BikeLightTitle () {
        return $('[data-test="inventory-item-name"]');
    }

    public get BikeLightDescription () {
        return $('[data-test="inventory-item-desc"]');
    }

    public get AddToCartButton () {
        return $('#add-to-cart');
    }

    public get BackToProductsArrow () {
        return $('#back-to-products');
    }
}

export default new BikeLightInfoPagePO();
