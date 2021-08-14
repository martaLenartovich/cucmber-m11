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
var home_page_1 = require("../utils/page_objects/home_page/home_page");
var careers_page_1 = require("../utils/page_objects/careers_page/careers_page");
var logger_config_1 = require("../config/logger.config");
var careersPage = new careers_page_1.CareersPage();
var homePage = new home_page_1.HomePage();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 100 * 1000;
describe("search job test", function () {
    it("should search Software Testing Engineer position in All Cities in Belarus", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, EC, labelSelectedText, counterText, _d, NoSuchElementException_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        console.log("This is scripts1.ts!");
                        _b = (_a = logger_config_1.logger).debug;
                        _c = "User connected from ";
                        return [4 /*yield*/, protractor_1.browser.getCapabilities()];
                    case 1:
                        _b.apply(_a, [_c + (_e.sent()).get('browserName') + " browser"]);
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 2:
                        _e.sent();
                        return [4 /*yield*/, protractor_1.browser.manage().window().maximize()];
                    case 3:
                        _e.sent();
                        EC = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, homePage.open()];
                    case 4:
                        _e.sent();
                        return [4 /*yield*/, careers_page_1.CareersPage.careersButton.click()];
                    case 5:
                        _e.sent();
                        careersPage.scrollToJobSearchFilterForm();
                        logger_config_1.logger.info('1. Enter "Software Testing Engineer" in Keyword field');
                        return [4 /*yield*/, careers_page_1.CareersPage.keyword.sendKeys("Software Testing Engineer")];
                    case 6:
                        _e.sent();
                        logger_config_1.logger.info('2. Select "All Cities in Belarus" option in Location dropdown');
                        return [4 /*yield*/, careers_page_1.CareersPage.citiesDropdownArrow.click()];
                    case 7:
                        _e.sent();
                        return [4 /*yield*/, careers_page_1.CareersPage.locationInput.sendKeys("Belarus")];
                    case 8:
                        _e.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(careers_page_1.CareersPage.belarusCheckbox), 5000, "belarus checkbox is not clickable")];
                    case 9:
                        _e.sent();
                        return [4 /*yield*/, careers_page_1.CareersPage.belarusCheckbox.click()];
                    case 10:
                        _e.sent();
                        expect(careers_page_1.CareersPage.chinaCheckbox).toBeDefined();
                        return [4 /*yield*/, protractor_1.browser.wait(function () { return careers_page_1.CareersPage.allCitiesCheckbox.isDisplayed(); }, 5000)];
                    case 11:
                        _e.sent();
                        return [4 /*yield*/, careers_page_1.CareersPage.allCitiesCheckbox.click()];
                    case 12:
                        _e.sent();
                        logger_config_1.logger.info('3. Select "Software Test Engineering" skill in Skills dropdown');
                        return [4 /*yield*/, careers_page_1.CareersPage.skillsDropdownField.click()];
                    case 13:
                        _e.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(careers_page_1.CareersPage.skillsDropdown), 5000)];
                    case 14:
                        _e.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 15:
                        _e.sent();
                        return [4 /*yield*/, careers_page_1.CareersPage.softwareTestEngineeringCheckbox.click()];
                    case 16:
                        _e.sent();
                        return [4 /*yield*/, careers_page_1.CareersPage.labelSelected.getText()];
                    case 17:
                        labelSelectedText = _e.sent();
                        return [4 /*yield*/, careers_page_1.CareersPage.counter.getText()];
                    case 18:
                        counterText = _e.sent();
                        expect(labelSelectedText + counterText).toEqual("Selected:1");
                        logger_config_1.logger.info('4. Click "Find" button');
                        _d = expect;
                        return [4 /*yield*/, careers_page_1.CareersPage.findButton.isEnabled()];
                    case 19:
                        _d.apply(void 0, [_e.sent()]).toEqual(true);
                        return [4 /*yield*/, careers_page_1.CareersPage.findButton.click()];
                    case 20:
                        _e.sent();
                        expect(careers_page_1.CareersPage.resultLine).toBeDefined();
                        _e.label = 21;
                    case 21:
                        _e.trys.push([21, 23, , 24]);
                        return [4 /*yield*/, careers_page_1.CareersPage.unexistingElement.click()];
                    case 22:
                        _e.sent();
                        return [3 /*break*/, 24];
                    case 23:
                        NoSuchElementException_1 = _e.sent();
                        logger_config_1.logger.error("No element found");
                        return [3 /*break*/, 24];
                    case 24: return [2 /*return*/];
                }
            });
        });
    });
});
