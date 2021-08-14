"use strict";
exports.__esModule = true;
exports.BasePage = void 0;
var protractor_1 = require("protractor");
var logger_config_1 = require("../../../config/logger.config");
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.open = function (url) {
        logger_config_1.logger.info("Opening \"" + url + "\" url");
        return protractor_1.browser.get(url);
    };
    return BasePage;
}());
exports.BasePage = BasePage;
