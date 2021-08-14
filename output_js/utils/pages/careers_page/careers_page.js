"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CareersPage = void 0;
var protractor_1 = require("protractor");
var base_page_1 = require("../base_page/base_page");
var CareersPage = /** @class */ (function (_super) {
    __extends(CareersPage, _super);
    function CareersPage() {
        var _this = _super.call(this) || this;
        _this.url = "https://www.epam.com/careers";
        return _this;
    }
    CareersPage.prototype.open = function () {
        return _super.prototype.open.call(this, this.url);
    };
    CareersPage.prototype.scrollToJobSearchFilterForm = function () {
        protractor_1.browser.executeScript("arguments[0].scrollIntoView();", CareersPage.jobSearchFilterForm.getWebElement());
    };
    CareersPage.careersButton = protractor_1.element(protractor_1.By.xpath('//a[@href="/careers"]'));
    CareersPage.jobSearchFilterForm = protractor_1.element(protractor_1.By.id("jobSearchFilterForm"));
    CareersPage.keyword = protractor_1.element(protractor_1.By.css('input[placeholder="Keyword"]'));
    CareersPage.citiesDropdownArrow = protractor_1.element(protractor_1.By.css(".select2-selection__arrow"));
    CareersPage.chinaCheckbox = protractor_1.element(protractor_1.By.xpath('//li[contains(text(), "China")]'));
    CareersPage.allCitiesCheckbox = protractor_1.element(protractor_1.By.xpath('//li[contains(text(), "All Cities in Belarus")]'));
    CareersPage.skillsDropdownField = protractor_1.element(protractor_1.By.className("selected-params"));
    CareersPage.skillsDropdown = protractor_1.element(protractor_1.By.css(".multi-select-dropdown:not(.hidden)"));
    CareersPage.softwareTestEngineeringCheckbox = protractor_1.element(protractor_1.By.xpath('//span[@class="checkbox-custom-label" and contains(text(),"Software Test Engineering")]'));
    CareersPage.labelSelected = protractor_1.element(protractor_1.By.className("label"));
    CareersPage.counter = protractor_1.element(protractor_1.By.className("counter"));
    CareersPage.findButton = protractor_1.element(protractor_1.By.xpath('//button[@type="submit"]'));
    CareersPage.resultLine = protractor_1.element(protractor_1.By.xpath('//h1[@class="search-result__heading"]'));
    return CareersPage;
}(base_page_1.BasePage));
exports.CareersPage = CareersPage;
