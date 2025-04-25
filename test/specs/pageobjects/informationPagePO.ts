import { $ } from '@wdio/globals'
// import PagePO from './pagePO.page';

class informationPagePO {

    public get title () {
        return $('.title')
    }

    public get firstName () {
        return $('#first-name');
    }
    
    public get lastName () {
        return $('#last-name');
    }

    public get postalCode () {
        return $('#postal-code');
    }

    public get cancelButton () {
        return $('#cancel')
    }

    public get continueButton () {
        return $('#continue')
    }
}

export default new informationPagePO();
