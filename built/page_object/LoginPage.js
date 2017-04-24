"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by babych on 4/24/2017.
 */
var protractor_1 = require("protractor");
var LoginPage = require("../../page_object/LoginPage");
var VehiclesPage = require("../../page_object/VehiclesPage");
describe('ABC FastLane Testing', function () {
    var loginPage = new LoginPage;
    var vehiclesPage = new VehiclesPage;
    it('open login page and enter user credentials', function () {
        protractor_1.browser.get('/sign-in');
        expect(loginPage.loginPageIsDisplayed()).toBeTruthy("check that login page is open");
        loginPage.loginAs(process.env.ADMIN_EMAIL, process.env.ADMIN_PSW);
    });
    it("Check that user was logged in", function () {
        expect(vehiclesPage.userIsLoggedIn()).toBeTruthy("Should be displayed profile icon");
        expect(protractor_1.browser.getCurrentUrl()).toBe(protractor_1.browser.baseUrl + vehiclesPage.url);
    });
});
