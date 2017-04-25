/**
 * Created by babych on 4/24/2017.
 */
import PageAbstract = require("./PageAbstract");
import {browser, element, by, By, $, $$, ExpectedConditions as EC} from 'protractor';

class AllUsersPage extends PageAbstract {

    url = "#/admin/manageusers/users";

    adminTabBtn = element.all(by.css(".sidebar-item>a")).first();
    manageUserTab = element.all(by.css(".tab-item.col-md-1")).first();
    newUserBtn = element.all(by.xpath(".//*[@id='root']/div/div[3]/div[2]/div/div[2]/div[3]/div[2]/div[1]/div")).first();     //wrong selector
    firstName = element(by.css("[name='firstName']"));
    lastName = element(by.css("[name='lastName']"));
    email = element(by.css("[name='email']"));
    selectSite = element(by.css(".info-search-input"));
    createBtn = element(by.css("[class='fl-button']"));
    modalHeader = element(by.css("[class='acc-modal-header']"));
    sitesListFirstresult = element.all(by.css(".result-item")).first();
    spinner = element(by.css(".review-deal-loading-spinner-container"));
    selectSiteSpinner = element(by.css("[id='circularG']"));
    hideSpinner = element(by.css(".fa.fa-spinner.review-deal-loading-spinner"));

    isAdminOpened() {
        return this.elementIsDisplayed(this.manageUserTab);
    };

    adminClick() {
        this.adminTabBtn.click();
    };

    openAddNewUserModal() {
        this.newUserBtn.click();
    };

    isModalOpened() {
        return this.elementIsDisplayed(this.modalHeader);
    };

    createRandom() {
        let randomEmail = Math.floor((Math.random() * 1000) + 1);
        return randomEmail;
    };

    creatingNewUser() {
        let theSameRandom = this.createRandom();

        browser.wait(EC.invisibilityOf(this.selectSiteSpinner), 10000);
        this.firstName.sendKeys("Test");
        this.lastName.sendKeys("QA" + theSameRandom);
        this.email.sendKeys("vasyl.babych+" + theSameRandom + "@swanlogic.com");
        this.selectSite.sendKeys("site_for_linking");
        this.sitesListFirstresult.click();
        this.createBtn.click();
    };

    isModalClosed() {
        browser.wait(EC.invisibilityOf(this.hideSpinner), 10000);
        return this.elementIsDisplayed(this.manageUserTab); 
    };
}

export = AllUsersPage;