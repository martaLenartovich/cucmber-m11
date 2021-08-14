import { browser, By, element, ExpectedConditions } from "protractor";
import { BasePage } from "../base_page/base_page";

export class CareersPage extends BasePage {
  static careersButton = element(By.xpath('//a[@href="/careers"]'));
  static jobSearchFilterForm = element(By.id("jobSearchFilterForm"));
  static keyword = element(By.css('input[placeholder="Keyword"]'));
  static citiesDropdownArrow = element(By.css(".select2-selection__arrow"));
  static locationInput = element(By.className("select2-search__field"));
  static belarusCheckbox = element(By.xpath('//strong[contains(text(), "Belarus")]'));
  static allCitiesCheckbox = element(
    By.xpath('//li[contains(text(), "All Cities in Belarus")]')
  );
  static skillsDropdownField = element(By.className("selected-params"));
  static skillsDropdown = element(
    By.css(".multi-select-dropdown:not(.hidden)")
  );
  static softwareTestEngineeringCheckbox = element(
    By.xpath(
      '//span[@class="checkbox-custom-label" and contains(text(),"Software Test Engineering")]'
    )
  );
  static labelSelected = element(By.className("label"));
  static counter = element(By.className("counter"));
  static findButton = element(By.xpath('//button[@type="submit"]'));
  static resultLine = element(
    By.xpath('//h1[@class="search-result__heading"]')
  );
  static openToRelocationCheckbox = element(By.xpath('//label[@for="id-ce1e74aa-e69b-3bd2-9f9f-41628029ec68-relocation"]'));
  static officeCheckbox = element(By.xpath('//label[@for="id-ce1e74aa-e69b-3bd2-9f9f-41628029ec68-office"]'));
  static remoteCheckbox = element(By.xpath('//label[@for="id-ce1e74aa-e69b-3bd2-9f9f-41628029ec68-remote"]'));
  static unexistingElement = element(By.className("unexistent"));
  static belarusLocationsArray = ["All Cities in Belarus", "Brest", "Gomel", "Grodno", "Minsk", "Mogilev", "Vitebsk"];

  url: string;
  constructor() {
    super();
    this.url = "https://www.epam.com/careers";
  }
  open() {
    return super.open(this.url);
  }
  scrollToJobSearchFilterForm() {
    browser.executeScript(
      "arguments[0].scrollIntoView();",
      CareersPage.jobSearchFilterForm.getWebElement()
    );
  }
}
