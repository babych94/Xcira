import {browser, element, by, By, $, $$, ExpectedConditions as EC} from 'protractor';

import ChartOfAccountsPage = require("../../page_object/ChartOfAccountsPage");
describe('ABC FastLane Testing', function () {
    let chartOfAccounts = new ChartOfAccountsPage;
    let number = (Math.random()*Math.random()*100000);
    let name = (Math.random()*Math.random()*100000);

    it ('Open Chart Of Accounts page', function () {
        browser.get(process.env.BASE_URL+chartOfAccounts.url);
        expect(chartOfAccounts.ChartOfAccountsPageIsDisplayed()).toBeTruthy("check that Chart Of Accounts page is open");
    });

    it ('Add Account', function () {
        chartOfAccounts.AddAccount(name.toLocaleString(), number.toLocaleString(), "123.00");
        chartOfAccounts.FindedAccountCheck(name.toLocaleString());
        chartOfAccounts.AccountFirstItem.getText().then((data) => expect(data).toEqual(number.toLocaleString()));
    });

    it ('Cancel Adding Account', function () {
        chartOfAccounts.CancelAddingAccount((name+200).toLocaleString(), (number+200).toLocaleString(), "123.00");
        chartOfAccounts.FindedAccountCheck((name+200).toLocaleString());
        expect(chartOfAccounts.TableIsEmpty()).toBeFalsy("check that Cancel Adding Account");
    });


});/**
 * Created by egor on 04.05.17.
 */
