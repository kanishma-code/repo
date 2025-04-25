import { $ } from '@wdio/globals'
import PagePO from './pagePO';

class backToHomePagePO extends PagePO {

    public get fullPage () {
        return $('checkout_complete_container');
    }

    public get backToHomeButton () {
        return $('#back-to-products');
    }
}

export default new backToHomePagePO();
