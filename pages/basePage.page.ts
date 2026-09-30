import { Page, Locator } from '@playwright/test';
import { basePageLocators } from '../locators/basePage.locators';

export class BasePage {
  readonly page: Page;
  readonly contactUsBttn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactUsBttn = page.locator(basePageLocators.contactUsBttn).first();
  }

  async goToURL(url: string) {
    await this.page.goto(url);
  }

  async waitForNetworkIdle() {
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }
}
