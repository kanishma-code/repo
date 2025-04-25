import { WaitTimes } from '../data/wait.page.ts';
import bikeLightInfoPageSpec from '../pageobjects/bikeLightInfoPagePO.ts';

class bikeLightDescPageTasks {
    static async returnToDescPage() {
        await browser.pause(WaitTimes.SHORT); // optionally move these to wait helpers
        await bikeLightInfoPageSpec.BackToProductsArrow.click();
        await browser.pause(WaitTimes.SHORT);
    }
}

export default bikeLightDescPageTasks;
