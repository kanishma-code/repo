import { $ } from '@wdio/globals'
import PagePO from './pagePO';

class finalCheckOutPagePO extends PagePO {

    public get title () {
        return $('.title')
    }

    public get itemTitle () {
        return $('#item_0_title_link')
    }

    public get itemDesc () {
        return $('.inventory_item_desc')
    }

    public get finishButton () {
        return $('#finish');
    }
    
    public get cancelButton () {
        return $('#cancel');
    }

}

export default new finalCheckOutPagePO();
