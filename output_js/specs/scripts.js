"use strict";
exports.__esModule = true;
var home_page_1 = require("../utils/page_objects/home_page/home_page");
var careers_page_1 = require("../utils/page_objects/careers_page/careers_page");
var careersPage = new careers_page_1.CareersPage();
var homePage = new home_page_1.HomePage();
// describe("search job test", () => {
//   it("should search Software Testing Engineer position in All Cities in Belarus", async function () {
//     console.log("This is scripts.ts!");
//     logger.debug("User connected from " + (await browser.getCapabilities()).get('browserName') + " browser");
//     await browser.waitForAngularEnabled(false);
//     await browser.manage().window().maximize();
//     const EC = protractor.ExpectedConditions;
//     await homePage.open();
//     await CareersPage.careersButton.click();
//     careersPage.scrollToJobSearchFilterForm();
//     logger.info('1. Enter "Software Testing Engineer" in Keyword field');
//     await CareersPage.keyword.sendKeys("Software Testing Engineer");
//     logger.info(
//       '2. Select "All Cities in Belarus" option in Location dropdown'
//     );
//     await CareersPage.citiesDropdownArrow.click();
//     await CareersPage.locationInput.sendKeys("Belarus");
//     await browser.wait(EC.elementToBeClickable(CareersPage.belarusCheckbox), 5000, "belarus checkbox is not clickable");
//     await CareersPage.belarusCheckbox.click();
//     expect(CareersPage.chinaCheckbox).toBeDefined();
//     await browser.wait(() => CareersPage.allCitiesCheckbox.isDisplayed(), 5000);
//     await CareersPage.allCitiesCheckbox.click();
//     logger.info(
//       '3. Select "Software Test Engineering" skill in Skills dropdown'
//     );
//     await CareersPage.skillsDropdownField.click();
//     await browser.wait(EC.elementToBeClickable(CareersPage.skillsDropdown), 5000);
//     await browser.sleep(3000);
//     await CareersPage.softwareTestEngineeringCheckbox.click();
//     const labelSelectedText = await CareersPage.labelSelected.getText();
//     const counterText = await CareersPage.counter.getText();
//     expect(labelSelectedText + counterText).toEqual("Selected:1");
//     logger.info('4. Click "Find" button');
//     expect(await CareersPage.findButton.isEnabled()).toEqual(true);
//     await CareersPage.findButton.click();
//     expect(CareersPage.resultLine).toBeDefined();
//     try {
//       await CareersPage.unexistingElement.click();
//     }
//     catch (NoSuchElementException) {
//       logger.error("No element found");
//     }
//   });
// });
