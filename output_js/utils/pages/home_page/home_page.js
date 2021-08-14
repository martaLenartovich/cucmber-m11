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
exports.HomePage = void 0;
var base_page_1 = require("../base_page/base_page");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super.call(this) || this;
        _this.url = "https://www.epam.com/";
        return _this;
    }
    HomePage.prototype.open = function () {
        return _super.prototype.open.call(this, this.url);
    };
    HomePage.URL = 'https://www.epam.com/';
    return HomePage;
}(base_page_1.BasePage));
exports.HomePage = HomePage;
