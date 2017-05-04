import PageAbstract = require("./PageAbstract");
import {browser, element, by, By, $, $$, ExpectedConditions as EC} from 'protractor';

/**
 * Created by Alex on 10/4/2016.
 */

class LoginPage extends PageAbstract {
    url = '/sign-in';
    emailField = element.all(by.css("[name='email']")).get(1);
    passwordField = element(by.css("[name='password']"));
    signInBtn = element(by.css("[class='loginButton btn btn-default']"));
    switchSiteButton = element(by.xpath(".//*/div/div[1]/div[1]/div[4]/div/div/div"));

    setEmail(email: string){
        this.emailField.sendKeys(email)
    };

    getEmail(){
        return this.emailField.getAttribute('value');
    };

    setPassword(password: string) {
        this.passwordField.sendKeys(password)
    };

    getPassword(){
        return this.passwordField.getAttribute('value');
    }

    clickSignInBtn() {
        this.signInBtn.click();
    };

    loginAs(email: string,password: string){
        this.setEmail(email);
        this.setPassword(password);
        this.clickSignInBtn();
    };

    loginPageIsDisplayed(){
        //  this.helpers.waitForElement($('.loginButton.btn.btn-default'),30000);

        return  true;//($('.SignTitle')).isDisplayed();
    }

    emailFieldIsDisplayed() {
        return this.elementIsDisplayed(this.emailField);
    }

    passwordFieldIsDisplayed() {
        return this.elementIsDisplayed(this.passwordField);
    }

    signInBtnIsDisplayed() {
        return this.elementIsDisplayed(this.signInBtn);
    }
    homeScreenIsDisplayed() {
        browser.wait(EC.invisibilityOf(this.switchSiteButton), 10000);
        return this.elementIsDisplayed(this.switchSiteButton);

    }
}
export = LoginPage;