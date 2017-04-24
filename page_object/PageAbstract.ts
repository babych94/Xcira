
import {ElementFinder, $, by, element, browser, ExpectedConditions} from "protractor";
import Promise = webdriver.promise.Promise;
import webdriver = require("selenium-webdriver");
class PageAbstract {

    protected timeout = 10000;


    profileLink = element(by.css('.profileLink'));
    userProfileBlock = element(by.css('.user-profile-main-block'));
    logoutButton = this.userProfileBlock.element(by.css('.user-profile-logout'));

    optionsToArray(text) {
      let value = text + '';
      let array = value.split(',');

      return array.map(function(el) {
        return el.trim();
      });
    }

    getTextOverflowValue(el) {
      return el.getCssValue('text-overflow');
    }

    elementHasClass(element, classNameArg) {
      return element.getAttribute('class').then(function(className) {
        return className.indexOf(classNameArg) !== -1;
      });
    }

    selectDropDown(element, text: string) {
        element.all(by.cssContainingText('option', text)).get(0).click();
    };

    selectLoadingDropDown(el) {
      let container = el.element(by.css('.lookupContainer'));
      let dropDownOptionsBlock = element(by.css('.lookupItemsContainer.lookupVisible'));
      browser.executeScript('arguments[0].scrollIntoView()', container);
      container.click();
      browser.wait(ExpectedConditions.presenceOf(dropDownOptionsBlock), this.timeout).then(function() {
        dropDownOptionsBlock.all(by.css('.lookupListItem')).get(0).click();
      })
    };

    selectCommonDropDown(el) {
      let selectContainer = el.element(by.css('.fl-dropdownContainer'));
      let selectOptions = selectContainer.all(by.css('.fl-dropdownItemsContainer'));
      selectContainer.click();
      selectOptions.first().click();
    }

    selectDateFromDatePicker(el) {
      let selectBtn = el.element(by.css('.selected-date-range-btn'));
      let datepicker = element.all(by.css('.daterangepicker.single'));
      let activeDatePickerItems = datepicker.all(by.css('tbody td:not(.off).available'));
//let activeDatePickerItems = element.all(by.css('.daterangepicker.single tbody td:not(.off).available'));

      selectBtn.click();
      activeDatePickerItems.first().click();
    }

    uploadFile(element: ElementFinder, fileName: string) {
        var path = require('path');
        var fileToUpload = '../../documentsFolders/' + fileName,
            absolutePath = path.resolve(__dirname, fileToUpload);
        //console.log(absolutePath);
        element.sendKeys(absolutePath);
    }

    protected enterText(element: ElementFinder, text) {
        element.click();
        element.clear();
        element.sendKeys(text + "");
    }

    userIsLoggedIn(){
        browser.wait(ExpectedConditions.presenceOf(this.profileLink), this.timeout);
        return  this.elementIsDisplayed(this.profileLink);
    }

    elementIsDisplayed(element: ElementFinder): Promise <boolean> {
      browser.wait(ExpectedConditions.presenceOf(element), this.timeout);

      return element.isDisplayed().then(function (cond) {
        return cond;
      }, function (error) {
        //console.log(error);
        return error;
      });
    }

   public clickProfileLink() {
        this.profileLink.click();
    }

   public userProfileBlockIsDisplayed() {
        return this.elementIsDisplayed(this.userProfileBlock);
    }

    public clickLogoutButton() {
        this.logoutButton.click();
    }
}

export = PageAbstract;