/**
 * Created by babych on 4/24/2017.
 */
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

require('jasmine-reporters');
var env = require('node-env-file');
env(__dirname + '/.env');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/main_report',
    filename: 'my-report.html',
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: false,
    showQuickLinks: true
});

exports.config = {

    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    suites: {
        regression_test: [
            'built/scenarios/preconditions/*.js'
        ]
    },

    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: [
                    '--start-maximized'
                ],
                prefs: {
                    'download': {
                        'default_directory': './e2e/downloads/'
                    }
                }
            }
        }

        // { //need to install firefox < 46.x.x version
        //     browserName: 'firefox',
        //          marionette: 'false',
        //         firefoxOptions: {
        //         args: ['start-maximized']
        //         }
        //
        // }
    ],
    baseUrl: process.env.BASE_URL,
    framework: 'jasmine2',
    onPrepare: function () {

        browser.ignoreSynchronization = true;

        jasmine.getEnv().addReporter(reporter);
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({

                savePath: 'target/screenshots'
            })
        );

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    },

    jasmineNodeOpts: {

        print: function () {
        },
        showTiming: true,
        showColors: true,
        isVerbose: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 60000
    },
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }

};
