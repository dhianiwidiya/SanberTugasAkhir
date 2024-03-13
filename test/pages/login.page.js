//const Page = require('./page');

class LoginPage {
    //definisikan locator dari element css selector
    get emailInput(){
        return $('#email'); //css locator field email
    }
    get passwordInput(){
        return $('#password'); //css locator field password
    }
    get loginButton(){
        return $('.chakra-button'); //css locator button login
    }
    get errorMessage(){
        return $('.chakra-alert'); //css locator alert error message
    }
    async open() {
        await browser.url('https://kasirdemo.belajarqa.com/');
      }

    //definisikan action/interaksi yang dilakukan pada element terserbut
    async login(email,password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMessage).toHaveText(expectedErrorMessage);
    }
    async getErrorMessage(){
        return this.errorMessage.getText();
    }
}
module.exports = new LoginPage();