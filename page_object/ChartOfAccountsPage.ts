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


    setAccountName(AccountName: string){
        this.AccountNameField.sendKeys(AccountName)
    };
    setAccountNumber(AccountNumber: string){
        this.AccountNumberField.sendKeys(AccountNumber)
    };
    setBeginningBalance(BeginningBalance: string){
        this.BeginningBalanceField.sendKeys(BeginningBalance)
    };

    setFilterAccountNamber(AccountNamber: string){
        this.FilterAccountNamberField.sendKeys(AccountNamber)
    };

    setEditAccountAccountNameField(AccountNamber: string){
        this.EditAccountAccountNameField.sendKeys(AccountNamber)
    }

    AddAccount(AccountName: string,AccountNumber: string,BeginningBalance: string){
        this.AddAccountButton.click();
        this.setAccountName(AccountName);
        this.AccountNumberField.click();
        this.setAccountNumber(AccountNumber);
        this.AccountTypeDropdown.click();
        this.AccountTypeDropdown.click();
        this.firstElementAccountDropdown.click();
        this.BeginningBalanceField.click();
        this.setBeginningBalance(BeginningBalance);
        this.AccountNumberField.click();
        this.SaveButton.click();
        browser.sleep(2000);
    };

    CancelAddingAccount(AccountName: string,AccountNumber: string,BeginningBalance: string){
        this.AddAccountButton.click();
        this.setAccountName(AccountName);
        this.AccountNumberField.click();
        this.setAccountNumber(AccountNumber);
        this.AccountTypeDropdown.click();
        this.AccountTypeDropdown.click();
        this.firstElementAccountDropdown.click();
        this.BeginningBalanceField.click();
        this.setBeginningBalance(BeginningBalance);
        this.AccountNumberField.click();
        this.CancelButton.click();
        browser.sleep(2000);
    };

    TableIsEmpty(){
       return this.AccountFirstItemInList.isPresent();
    }

    FindedAccountCheck(AccountName: string){
        this.FilterButton.click();
        this.setFilterAccountNamber(AccountName);
        this.FilterApplyButton.click();

        browser.sleep(5000);
    }

    ChartOfAccountsPageIsDisplayed(){
        return  this.elementIsDisplayed(this.AccountFirstItemInList);
    }

    OpenAccountSummeryFilterAccountTypeDropdown(){
        this.FilterButton.click();
        this.FilterAccountTypeDropdown.click();
    }

    ChooseFilterAccountTypeAsset(){
        this.FilterAsset.click();
    }

    ChooseFilterAccountTypeEquity(){
        this.FilterEquity.click();
    }

    ClickFilterApplyButton(){
        this.FilterApplyButton.click()
    }

    ClickThreePointIconInFirstRowInList(){
        this.ThreePointIcon.click();
    }

    ClickEditAccountButton(){
        this.EditAccountButton.click();
    }

    ClicEditAccountSaveButton(){
        this.EditAccountSaveButton.click();
    }

    ClickDisableAccountButton(){
        this.DisableAccountButton.click();
    }

    ClickDisableAccountDisableButton(){
        this.DisableAccountDisableButton.click();
        browser.sleep(2000);
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
        browser.sleep(2000);
        return this.AccountFirstAccountTypeInList.first().getText().then((data) => {return data == ("Equity")});
    }

    ChecFilterAccountTypewithAssetItem(){
        browser.sleep(2000);
        return this.AccountFirstAccountTypeInList.first().getText().then((data) => {return data == ("Asset")});
    }
    CheckActiveAccountsAccountSummerySectionTitle(){
        return this.AccountSummeryTitle.getText().then((data) => {return data == ("Account Summary")});
    }

    CheckActiveAccountsAccountSummerySectionDateofLastTransfer(){
        return this.DateofLastTransfer.last().getText().then((data) => {return data == ("3/2/2017 by nrichards")});
    }
}

export = ChartOfAccountsPage;