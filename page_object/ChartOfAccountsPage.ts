import PageAbstract = require("./PageAbstract");
import {browser, element, by, By, $, $$, ExpectedConditions as EC, ExpectedConditions, protractor} from 'protractor';

class ChartOfAccountsPage extends PageAbstract{
    url = "/#/accounting/settings/chart";

    AddAccountButton = element(by.xpath("//*[@id='root']/div/div[3]/div[2]/div/div[2]/div[3]/div[2]/div[1]/div/div"));
    AccountNameField = element(by.xpath(".//form/div[1]/div/div/input"));
    AccountNumberField = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[1]/div[2]/div[2]/form/div[2]/div/div/input"));
    BeginningBalanceField = element(by.xpath("html/body/div[1]/div/div[3]/div[2]/div/div[2]/div[3]/div[1]/div[2]/div[2]/form/div[3]/div[2]/div/div/input"));
    SaveButton = element(by.xpath(".//form/div[4]/button[2]"));
    AccountTypeDropdown = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[1]/div[2]/div[2]/form/div[3]/div[1]/div/div/div/span[1]/div[1]"));
    firstElementAccountDropdown = element(by.css(".add-account-form-select .Select-menu-outer .Select-menu .Select-option"));
    FilterButton = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[1]/div/div[1]/div/div/div[1]/div/div/span"));
    FilterAccountNamberField = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[1]/div/div[1]/div/div/div[2]/div/div[2]/div/input"));
    FilterApplyButton = element(by.css(".apply_filters_container .container_buttons .fl-buttonContainer:last-child"));
    FilterAccountTypeDropdown = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div[1]"));
    FilterAsset = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/div[1]"));
    FilterEquity = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/div[2]"));
    FilterExpense = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/div[3]"));
    FilterLiability = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/div[4]"));
    FilterRevenue = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/div[5]"));
    AccountFirstItemInList = element(by.css(".ag-body-container .ag-row .ag-cell"));
    AccountFirstAccountNameInList = element(by.xpath("//*[@id='center']/div/div[4]/div[3]/div/div/div[1]/div[2]"));
    AccountFirstAccountTypeInList = element.all(by.css(".title-data-container"));
    CancelButton = element(by.xpath(".//form/div[4]/button[1]"));
    AccountSummeryTitle = element(by.className("fiscal-toolbar-info-header"));
    DateofLastTransfer = element.all(by.className("fiscal-toolbar-info-sub-header-info"));
    ThreePointIcon = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[2]/div/div/div/div/div/div[1]/div/div[4]/div[2]/div/div/div[2]/div/div/span"));
    EditAccountButton = element(by.xpath("//*[@id='center']/div/div[4]/div[2]/div/div[1]/div[2]/div/div/div/div/h4[1]"));
    EditAccountAccountNameField = element(by.xpath("//*[@id='root']/div/div[3]/div[2]/div/div[2]/div[3]/div[4]/div[2]/div[2]/div/input"));
    EditAccountSaveButton = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[4]/div[2]/div[2]/div/div/button[2]"));
    DisableAccountButton = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[5]/div[2]/div/div/div/div/div/div[1]/div/div[4]/div[2]/div/div/div[2]/div/div/div/div/h4[2]"));
    DisableAccountDisableButton = element(by.xpath("html/body/div/div/div[3]/div[2]/div/div[2]/div[3]/div[3]/div[2]/div[2]/div/div/div[3]/button[2]"));

    setFilterAccountName(AccountName: string){
        this.WaitTillElementBePresenOnPage(this.FilterAccountNamberField);
        this.FilterAccountNamberField.sendKeys(AccountName);
    };

    setEditAccountAccountNameField(AccountNamber: string){
        this.WaitTillElementBePresenOnPage(this.EditAccountAccountNameField);
        this.EditAccountAccountNameField.sendKeys(AccountNamber);
    }

    FillAccountFields(AccountName: string,AccountNumber: string,BeginningBalance: string){
        this.WaitTillElementBePresenOnPage(this.AddAccountButton);
        this.AddAccountButton.click();
        this.AccountNameField.sendKeys(AccountName);
        this.AccountNumberField.click();
        this.AccountNumberField.sendKeys(AccountNumber);
        this.AccountTypeDropdown.click();
        this.AccountTypeDropdown.click();
        this.firstElementAccountDropdown.click();
        this.BeginningBalanceField.click();
        this.BeginningBalanceField.sendKeys(BeginningBalance);
    }

    AddAccount(AccountName: string,AccountNumber: string,BeginningBalance: string){
        this.FillAccountFields(AccountName, AccountNumber, BeginningBalance);
        this.AccountNumberField.click();
        this.SaveButton.click();
        browser.sleep(2000);
    };

    CancelAddingAccount(AccountName: string,AccountNumber: string,BeginningBalance: string){
        this.FillAccountFields(AccountName, AccountNumber, BeginningBalance);
        this.AccountNumberField.click();
        this.CancelButton.click();
    };

    TableIsEmpty(){
        return this.AccountFirstItemInList.isPresent();
    }

    FindedAccountFilterByName(AccountName: string){
        this.WaitTillElementBePresenOnPage(this.FilterButton);
        this.FilterButton.click();
        this.setFilterAccountName(AccountName);
        this.FilterApplyButton.click();
        browser.sleep(2000);
    }

    ChartOfAccountsPageIsDisplayed(){
        return  this.elementIsDisplayed(this.AccountFirstItemInList);
    }

    OpenAccountSummeryFilterAccountTypeDropdown(){
        this.WaitTillElementBePresenOnPage(this.FilterButton);
        this.FilterButton.click();
        this.FilterAccountTypeDropdown.click();
    }

    ChooseFilterAccountTypeAsset(){
        this.WaitTillElementBePresenOnPage(this.FilterAsset);
        this.FilterAsset.click();
    }

    ChooseFilterAccountTypeEquity(){
        this.WaitTillElementBePresenOnPage(this.FilterEquity);
        this.FilterEquity.click();
    }

    ClickFilterApplyButton(){
        this.FilterApplyButton.click();
        browser.sleep(2000);
    }

    ClickThreePointIconInFirstRowInList(){
        this.WaitTillElementBePresenOnPage(this.ThreePointIcon);
        this.ThreePointIcon.click();
    }

    ClickEditAccountButton(){
        this.WaitTillElementBePresenOnPage(this.EditAccountButton);
        this.EditAccountButton.click();
    }

    ClicEditAccountSaveButton(){
        this.WaitTillElementBePresenOnPage(this.EditAccountSaveButton);
        this.EditAccountSaveButton.click();
        browser.sleep(2000);
    }

    ClickDisableAccountButton(){
        this.WaitTillElementBePresenOnPage(this.DisableAccountButton);
        this.DisableAccountButton.click();
    }

    ClickDisableAccountDisableButton(){
        this.WaitTillElementBePresenOnPage(this.DisableAccountDisableButton);
        this.DisableAccountDisableButton.click();
        browser.sleep(2000);
    }
    AccountFirstAccountNameInListText() {
        this.WaitTillElementBePresenOnPage(this.AccountFirstAccountNameInList);
        return this.AccountFirstAccountNameInList.getText();
    }

    AccountFirstItemInListText() {
        this.WaitTillElementBePresenOnPage(this.AccountFirstItemInList);
        return this.AccountFirstItemInList.getText();
    }

    Checkitem1(){
        return this.FilterAsset.getText().then((data) => {return data == ("Asset")});
    }
    Checkitem2(){
        return this.FilterEquity.getText().then((data) => {return data == ("Equity")});
    }
    Checkitem3(){
        return this.FilterExpense.getText().then((data) => {return data == ("Expense")});
    }
    Checkitem4(){
        return this.FilterLiability.getText().then((data) => {return data == ("Liability")});
    }
    Checkitem5(){
        return this.FilterRevenue.getText().then((data) => {return data == ("Revenue")});
    }

    ChecFilterAccountTypewithEquityItem(){
        this.WaitTillElementBePresenOnPage(this.AccountFirstAccountTypeInList.first());
        return this.AccountFirstAccountTypeInList.first().getText().then((data) => {return data == ("Equity")});
    }

    ChecFilterAccountTypewithAssetItem(){
        this.WaitTillElementBePresenOnPage(this.AccountFirstAccountTypeInList.first());
        return this.AccountFirstAccountTypeInList.first().getText().then((data) => {return data == ("Asset")});
    }
    CheckActiveAccountsAccountSummerySectionTitle(){
        this.WaitTillElementBePresenOnPage(this.AccountSummeryTitle);
        return this.AccountSummeryTitle.getText().then((data) => {return data == ("Account Summary")});
    }

    CheckActiveAccountsAccountSummerySectionDateofLastTransfer(){
        this.WaitTillElementBePresenOnPage(this.DateofLastTransfer.last());
        return this.DateofLastTransfer.last().getText().then((data) => {return data == ("3/2/2017 by nrichards")});
    }
}

export = ChartOfAccountsPage;