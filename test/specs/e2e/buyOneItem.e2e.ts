import { WaitTimes } from '../data/wait.page.ts';
import BackToHomePageExpectations from '../expectations/backToHome_expectations.ts';
import bikeLightInfoPageExpectations from '../expectations/bikelightInfoPage_expectations.ts';
import cartPageExpectations from '../expectations/cartPage_expectations.ts';
import checkout_finalOverviewPageExpectations from '../expectations/checkOutOverviewPage_expectations.ts';
import InfoPageExpectations from '../expectations/informationPage_expectations.ts';
import InventoryPageExpectations from '../expectations/inventoryPage_expectations.ts';
import backToHomePageTasks from '../tasks/backToHomePage_task.ts';
import bikeLightDescPageTasks from '../tasks/bikelightdescpage_task.ts';
import cartPageTasks from '../tasks/cartpage_task.ts';
import finalCheckoutOverviewPageTasks from '../tasks/checkout_finaloverviewpage_task.ts';
import informationPageTasks from '../tasks/informationPage_task.ts';
import InventoryTasks from '../tasks/inventorypage_task.ts';
import AuthTasks from '../tasks/signinpage_task.ts';

describe('Given user tries to log in to application and add bike light to cart', () => {

    before('Then user opens application', async () => {
        // Runs once before all tests
        await AuthTasks.openWebPage()
        await browser.maximizeWindow()
      });
      
    it('then user navigates to inventory page with correct credentials', async () => {
        await AuthTasks.loginUsingData('standard_user','secret_sauce')
        await InventoryPageExpectations.expectInventoryPageExists()
    })

    it('then user is able to read info about bike light item from inventory page', async () => {
        await InventoryPageExpectations.expectBikeLightInfoMatches()
    })

    it('then user adds an item to cart', async () => {
        await InventoryTasks.addItemToCart()
        await InventoryPageExpectations.expectRemoveButton_BikeLightExists()
    })

    it('then user clicks bike light label navigates to item description page', async () => {
        await InventoryTasks.clickItemForInfo()
        await bikeLightInfoPageExpectations.expectBikeLightInformationPage()
    })

    it('then user returns back to description page', async () => {
        await bikeLightDescPageTasks.returnToDescPage()
        await InventoryPageExpectations.expectInventoryPageExists()
    })

    it('then user navigates to cart page', async () => {
        await InventoryTasks.clickCartButton()
        await browser.pause(WaitTimes.SHORT)
        await cartPageExpectations.expectBikeLightPriceMatches()
        await browser.pause(WaitTimes.SHORT)
        await cartPageTasks.clickCheckOutButton()
    })
    
    it('then user navigates to information page and enters personal data', async () => {
        await InfoPageExpectations.InfoPageTitleMatches()
        await informationPageTasks.enterData()
        await informationPageTasks.clickContinueButton()
    })

    it('then user navigates to cart overview page / final summary', async () => {
        await checkout_finalOverviewPageExpectations.BikeLightTitleMatches()
        await checkout_finalOverviewPageExpectations.BikeLightDescMatches()
        await finalCheckoutOverviewPageTasks.clickFinishButton()
    })

    it('then user navigates back to home', async () => {
        await BackToHomePageExpectations.expectThankYouNoteExist()
        await backToHomePageTasks.clickBackToHomeButton()
    })

    it('then user reaches inventory page again', async () => {
        await InventoryPageExpectations.expectInventoryPageExists()
    })
})