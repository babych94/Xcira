/**
 * Created by babych on 4/24/2017.
 */
import PageAbstract = require("./PageAbstract");
import {browser, element, by, By, $, $$, ExpectedConditions as EC, ExpectedConditions, protractor} from 'protractor';

class VehiclesPage extends PageAbstract{
    url = "/vehicles";
}

export = VehiclesPage;