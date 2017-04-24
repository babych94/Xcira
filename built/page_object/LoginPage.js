"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PageAbstract = require("./PageAbstract");
var protractor_1 = require("protractor");
/**
 * Created by Alex on 10/4/2016.
 */
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '/sign-in';
        _this.emailField = protractor_1.element.all(protractor_1.by.css("[name='email']")).get(1);
        _this.passwordField = protractor_1.element(protractor_1.by.css("[name='password']"));
        _this.signInBtn = protractor_1.element(protractor_1.by.css("[class='loginButton btn btn-default']"));
        return _this;
    }
    LoginPage.prototype.setEmail = function (email) {
        this.emailField.sendKeys(email);
    };
    ;
    LoginPage.prototype.getEmail = function () {
        return this.emailField.getAttribute('value');
    };
    ;
    LoginPage.prototype.setPassword = function (password) {
        this.passwordField.sendKeys(password);
    };
    ;
    LoginPage.prototype.getPassword = function () {
        return this.passwordField.getAttribute('value');
    };
    LoginPage.prototype.clickSignInBtn = function () {
        this.signInBtn.click();
    };
    ;
    LoginPage.prototype.loginAs = function (email, password) {
        this.setEmail(email);
        this.setPassword(password);
        this.clickSignInBtn();
    };
    ;
    LoginPage.prototype.loginPageIsDisplayed = function () {
        //  this.helpers.waitForElement($('.loginButton.btn.btn-default'),30000);
        return true; //($('.SignTitle')).isDisplayed();
    };
    LoginPage.prototype.emailFieldIsDisplayed = function () {
        return this.elementIsDisplayed(this.emailField);
    };
    LoginPage.prototype.passwordFieldIsDisplayed = function () {
        return this.elementIsDisplayed(this.passwordField);
    };
    LoginPage.prototype.signInBtnIsDisplayed = function () {
        return this.elementIsDisplayed(this.signInBtn);
    };
    return LoginPage;
}(PageAbstract));
module.exports = LoginPage;
