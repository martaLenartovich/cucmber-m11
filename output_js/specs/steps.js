"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var protractor_1 = require("protractor");
var cucumber_1 = require("@cucumber/cucumber");
var chai_1 = require("chai");
var home_page_1 = require("../utils/page_objects/home_page/home_page");
var careers_page_1 = require("../utils/page_objects/careers_page/careers_page");
var ptor_1 = require("protractor/built/ptor");
var careersPage = new careers_page_1.CareersPage();
var homePage = new home_page_1.HomePage();
var EC = ptor_1.protractor.ExpectedConditions;
var DEFAULT_TIMEOUT = 10000;
cucumber_1.setDefaultTimeout(DEFAULT_TIMEOUT);
cucumber_1.BeforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
            case 1:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.manage().window().maximize()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('I open epam.com', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, homePage.open()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('I Click on Careers tab', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, careers_page_1.CareersPage.careersButton.click()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('I Enter {string} in Keyword field', function (keyword) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                careersPage.scrollToJobSearchFilterForm();
                return [4 /*yield*/, careers_page_1.CareersPage.keyword.sendKeys(keyword)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('I Select "All Cities in Belarus" option in Location dropdown', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, careers_page_1.CareersPage.citiesDropdownArrow.click()];
            case 1:
                _a.sent();
                return [4 /*yield*/, careers_page_1.CareersPage.locationInput.sendKeys("Belarus")];
            case 2:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(careers_page_1.CareersPage.belarusCheckbox), 5000, "belarus checkbox is not clickable")];
            case 3:
                _a.sent();
                return [4 /*yield*/, careers_page_1.CareersPage.belarusCheckbox.click()];
            case 4:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.wait(function () { return careers_page_1.CareersPage.allCitiesCheckbox.isDisplayed(); }, 5000)];
            case 5:
                _a.sent();
                return [4 /*yield*/, careers_page_1.CareersPage.allCitiesCheckbox.click()];
            case 6:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('I Click "Find" button', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, careers_page_1.CareersPage.findButton.click()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Page Title is "Explore Professional Growth Opportunities | EPAM Careers"', function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = chai_1.expect;
                return [4 /*yield*/, protractor_1.browser.getTitle()];
            case 1:
                _a.apply(void 0, [_b.sent()]).to.be.equal("Explore Professional Growth Opportunities | EPAM Careers");
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Result line appears', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        chai_1.expect(careers_page_1.CareersPage.resultLine).to.exist;
        return [2 /*return*/];
    });
}); });
