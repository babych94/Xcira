/**
 * Created by babych on 4/24/2017.
 */
import {browser, element, by, By, $, $$, ExpectedConditions as EC} from 'protractor';

import LoginPage = require("../../page_object/LoginPage");
import VehiclesPage = require("../../page_object/VehiclesPage");
describe('ABC FastLane Testing', function () {
    let loginPage = new LoginPage;
    let vehiclesPage = new VehiclesPage;

    it ('open login page and enter user credentials', function () {
        browser.get(process.env.BASE_URL);
        expect(loginPage.loginPageIsDisplayed()).toBeTruthy("check that login page is open");
        loginPage.loginAs(process.env.ADMIN_EMAIL, process.env.ADMIN_PSW);
    });

    it("Check that user was logged in", function () {
        expect(vehiclesPage.userIsLoggedIn()).toBeTruthy("Should be displayed profile icon");
        expect(vehiclesPage.getPageUrl()).toContain(browser.baseUrl + "/#" + vehiclesPage.url);
    })
});