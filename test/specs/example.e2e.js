import LoginPage from '../../SanberTugasAkhir/test/pageobjects/login.page.js'
import SecurePage from '../../SanberTugasAkhir/test/pageobjects/secure.page.js'

describe('My Registered User application', () => {
    it('should Registered', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', '50', '167')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})
