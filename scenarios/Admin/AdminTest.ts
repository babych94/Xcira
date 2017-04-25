/**
 * Created by babych on 4/24/2017.
 */
import {browser} from "protractor";
import AllUsersPage = require("../../page_object/AllUsersPage");

describe('Admin test', function () {
    beforeAll(function () {
        browser.refresh();
    });

    let allUsersPage = new AllUsersPage;

    it('open Admin page', function(){
        browser.get(process.env.BASE_URL+allUsersPage.url);
        expect(allUsersPage.isAdminOpened()).toBeTruthy("Should be displayed Admin page");
    } );
    
    it('add New user', function () {
        allUsersPage.openAddNewUserModal();
        expect(allUsersPage.isModalOpened()).toBeTruthy("Should be displayed Add New User modal");
        allUsersPage.creatingNewUser();
        expect(allUsersPage.isModalClosed()).toBeTruthy("Should be modal closed");
    });

});