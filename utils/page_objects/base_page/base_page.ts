import { browser } from "protractor";
import { logger } from "../../../config/logger.config";

export class BasePage {
    open(url: string) {
        logger.info(`Opening "${url}" url`);
        return browser.get(url);
    }
}