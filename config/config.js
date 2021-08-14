exports.config = {
  // launch locally when fields directConnect and seleniumAddress are not provided
  chromeDriver: "./specs/driver/chromedriver.exe",
  specs: ["../output_js/specs/scripts.js"],
  onPrepare: function () {
    await browser.manage().timeouts().pageLoadTimeout(20000);
    await browser.manage().timeouts().implicitlyWait(40000);
    // logger.debug("User connected from " + (await browser.getCapabilities()).get('browserName'));
    browser.getBrowserName = function () {
      return browser.getCapabilities().then(function (caps) {
        browser.browserName = caps.get("browserName");
      });
    };
    browser.getBrowserName();
  },
};
