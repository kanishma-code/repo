import { WaitTimes } from '../data/wait.page.ts';
import LoginExpectations from '../expectations/invalidCredentialPage_expectations.ts';
import AuthTasks from '../tasks/signinpage_task.ts';
// import SecurePage from '../pageobjects/SecurePage'

describe('Given user tries to log in application with incorrect credentials', () => {

    before('User opens the web application', async () => {
        // Runs once before all tests
        await browser.pause(WaitTimes.SHORT)
        await AuthTasks.openWebPage()
        await browser.maximizeWindow()
      });
      
    it('then user remains locked out and recieves error message', async () => {
        await AuthTasks.loginUsingData('locked_out_user', 'secret_sauce')
        await browser.pause(WaitTimes.SHORT)
        await LoginExpectations.expectLoginErrorExists()
        await browser.pause(WaitTimes.SHORT)
        await AuthTasks.closeErrorButton()
        await browser.pause(WaitTimes.SHORT)
    })
})