/**
 * Created by rusnak on 5/3/2017.
 */
import PageAbstract = require("./PageAbstract");
import {browser, element, by, By, $, $$, ExpectedConditions as EC} from 'protractor';

class BanksPage extends PageAbstract {
    url = "#/accounting/settings/banks";
    addBankButton = element(by.xpath(".//div[2]/div/div[2]/div[3]/div[1]/div[3]/div[1]/div/div/div"));


    isBanksPageOpened () {
        return this.elementIsDisplayed(this.addBankButton);
    };

}

export = BanksPage;