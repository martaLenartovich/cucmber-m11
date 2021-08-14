const yargs = require("yargs").argv;
const path = require("path");

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub/",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature"],
  cucumberOpts: {
    require: ["../specs/steps.ts"],
    format: [`json:../reports/report.json`],
  },
  framework: "custom",
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  splitTestsBetweenCapabilities: true,
  capabilities: {
    browserName: yargs.browserName || "chrome",
    "goog:chromeOptions": {
      w3c: false,
    },
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },
  chromeOptions: {
    args: [
      //"–headless",
      "–disable-gpu",
      "–window-size=1920×1080",
      "--no-sandbox",
    ],
  },
  disableChecks: true,
  beforeLaunch: function () {
    require("ts-node").register({
      project: "tsconfig.json",
    });
  },

  onPrepare: () => {
    let globals = require("protractor");
    global.browser = globals.browser;
    var chai = require("chai");
    global.chai = chai;
  },
};
