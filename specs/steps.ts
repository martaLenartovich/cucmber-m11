import { browser } from "protractor";
import { Then, When, setDefaultTimeout, BeforeAll } from '@cucumber/cucumber';
import { expect } from 'chai';
import { HomePage } from "../utils/page_objects/home_page/home_page";
import { CareersPage } from "../utils/page_objects/careers_page/careers_page";
import { protractor } from "protractor/built/ptor";
const careersPage = new CareersPage();
const homePage = new HomePage();
const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT = 10000;
setDefaultTimeout(DEFAULT_TIMEOUT);

BeforeAll(async () => {
  await browser.waitForAngularEnabled(false);
  await browser.manage().window().maximize();
});

When('I open epam.com', async () => {
  await homePage.open();

});

When('I Click on Careers tab', async () => {
  await CareersPage.careersButton.click();
});

When('I Enter {string} in Keyword field', async (keyword: string) => {
  careersPage.scrollToJobSearchFilterForm();
  await CareersPage.keyword.sendKeys(keyword);
});

When('I Select "All Cities in Belarus" option in Location dropdown', async () => {
  await CareersPage.citiesDropdownArrow.click();
  await CareersPage.locationInput.sendKeys("Belarus");
  await browser.wait(EC.elementToBeClickable(CareersPage.belarusCheckbox), 5000, "belarus checkbox is not clickable");
  await CareersPage.belarusCheckbox.click();
  await browser.wait(() => CareersPage.allCitiesCheckbox.isDisplayed(), 5000);
  await CareersPage.allCitiesCheckbox.click();
});

When('I Click "Find" button', async () => {
  await CareersPage.findButton.click();
});

Then('Page Title is "Explore Professional Growth Opportunities | EPAM Careers"', async () => {
  expect(await browser.getTitle()).to.be.equal("Explore Professional Growth Opportunities | EPAM Careers");
});

Then('Result line appears', async () => {
  expect(CareersPage.resultLine).to.exist;
});
