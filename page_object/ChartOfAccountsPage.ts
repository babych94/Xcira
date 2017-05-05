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
    AccountFirstItem = element(by.css(".ag-body-container .ag-row .ag-cell"));
    CancelButton = element(by.xpath(".//form/div[4]/button[1]"));

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
       return this.AccountFirstItem.isPresent();
    }

    FindedAccountCheck(AccountName: string){
        this.FilterButton.click();
        this.setFilterAccountNamber(AccountName);
        this.FilterApplyButton.click();

        browser.sleep(10000);
    }

    CheckAccountAdded(test: string){
     //   return  this.AccountFirstItem.getText().equal(test);
    }

    ChartOfAccountsPageIsDisplayed(){
        return  this.elementIsDisplayed(this.AccountFirstItem);
    }
}


export = ChartOfAccountsPage;