/**
 * Created by rusnak on 5/3/2017.
 */
import {browser} from "protractor";
import BanksPage = require("../../page_object/BanksPage");


    describe("Bank Page Test", function () {
     /*  beforeAll(function () {
           browser.refresh();
        });
*/
        let banksPage = new BanksPage;

        it('Open Banks Page', function () {
            browser.get(process.env.BASE_URL+banksPage.url);
            expect(banksPage.isBanksPageOpened()).toBeTruthy("Banks Page is not opened.");
        })
    });