import InventoryPageExpectations from "../expectations/inventoryPage_expectations";
import AuthTasks from "../tasks/signinpage_task";

describe('My Login application', () => {

    before(async () => {
        // Runs once before all tests
        // await browser.pause(10000)
        await AuthTasks.openWebPage()
        await browser.maximizeWindow()
      });
      
    it('should login with valid credentials', async () => {
        await AuthTasks.loginUsingData('standard_user', 'secret_sauce')
        await InventoryPageExpectations.expectInventoryPageExists()
    })
})