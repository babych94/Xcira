import {browser, element, by, By, $, $$, ExpectedConditions as EC} from 'protractor';

import ChartOfAccountsPage = require("../../page_object/ChartOfAccountsPage");
import PageAbstract = require("../../page_object/PageAbstract");
describe('ABC FastLane Testing', function () {
    let chartOfAccounts = new ChartOfAccountsPage;
    let pageAbstract = new PageAbstract;
    let number = (Math.random()*Math.random()*100000);
    let name = (Math.random()*Math.random()*100000);

    it ('Open Chart Of Accounts page', function () {
        browser.get(process.env.BASE_URL+chartOfAccounts.url);
        expect(chartOfAccounts.ChartOfAccountsPageIsDisplayed()).toBeTruthy("check that Chart Of Accounts page is open");
    });

    it ('Add Account', function () {
        chartOfAccounts.AddAccount(name.toLocaleString(), number.toLocaleString(), "123.00");
        chartOfAccounts.FindedAccountFilterByName(name.toLocaleString());
        chartOfAccounts.AccountFirstItemInListText().then((data) => expect(data).toEqual(number.toLocaleString()));
    });

    it ('Cancel Adding Account', function () {
        chartOfAccounts.CancelAddingAccount((name+200).toLocaleString(), (number+200).toLocaleString(), "123.00");
        chartOfAccounts.FindedAccountFilterByName((name+200).toLocaleString());
        expect(chartOfAccounts.TableIsEmpty()).toBeFalsy("check that Cancel Adding Account");
    });

    it ('Account Summary block', function () {
        expect(chartOfAccounts.CheckActiveAccountsAccountSummerySectionTitle()).toBeTruthy("check Account Summery title");
        expect(chartOfAccounts.CheckActiveAccountsAccountSummerySectionDateofLastTransfer()).toBeTruthy("check Account Summery Date of Last Transfer");

    });

    it ('Filter data in the grid by Account Type', function () {
        chartOfAccounts.OpenAccountSummeryFilterAccountTypeDropdown();
        expect(chartOfAccounts.Checkitem1()).toBeTruthy("check item 1");
        expect(chartOfAccounts.Checkitem2()).toBeTruthy("check item 2");
        expect(chartOfAccounts.Checkitem3()).toBeTruthy("check item 3");
        expect(chartOfAccounts.Checkitem4()).toBeTruthy("check item 4");
        expect(chartOfAccounts.Checkitem5()).toBeTruthy("check item 5");
        chartOfAccounts.ChooseFilterAccountTypeEquity();
        chartOfAccounts.ClickFilterApplyButton();
        expect(chartOfAccounts.ChecFilterAccountTypewithEquityItem()).toBeTruthy("check filter");
    });

    it ('Filter data in the grid by Account Name', function () {
        chartOfAccounts.FindedAccountFilterByName(name.toLocaleString());
        chartOfAccounts.AccountFirstAccountNameInListText().then((data) => expect(data).toEqual(name.toLocaleString()));
    });

    it ('Filter data in the grid by Account Type and Account Name', function () {
        chartOfAccounts.OpenAccountSummeryFilterAccountTypeDropdown();
        chartOfAccounts.ChooseFilterAccountTypeAsset();
        chartOfAccounts.setFilterAccountName(name.toLocaleString());
        chartOfAccounts.ClickFilterApplyButton();
        chartOfAccounts.AccountFirstAccountNameInListText().then((data) => expect(data).toEqual(name.toLocaleString()));
        expect(chartOfAccounts.ChecFilterAccountTypewithAssetItem()).toBeTruthy("check filter");
    });

    it ('Edit Account', function () {
        chartOfAccounts.FindedAccountFilterByName(name.toLocaleString());
        chartOfAccounts.ClickThreePointIconInFirstRowInList();
        chartOfAccounts.ClickEditAccountButton();
        chartOfAccounts.setEditAccountAccountNameField("Test Editing");
        chartOfAccounts.ClicEditAccountSaveButton();
        chartOfAccounts.AccountFirstAccountNameInListText().then((data) => expect(data).toEqual(name.toLocaleString() + "Test Editing"));
    });

    it ('Disable Account', function () {
        chartOfAccounts.FindedAccountFilterByName(name.toLocaleString() + "Test Editing");
        chartOfAccounts.ClickThreePointIconInFirstRowInList();
        chartOfAccounts.ClickDisableAccountButton();
        chartOfAccounts.ClickDisableAccountDisableButton();
        chartOfAccounts.FindedAccountFilterByName(name.toLocaleString() + "Test Editing");
        expect(chartOfAccounts.TableIsEmpty()).toBeFalsy("account is disable");
    });


});/**
 * Created by egor on 04.05.17.
 */
