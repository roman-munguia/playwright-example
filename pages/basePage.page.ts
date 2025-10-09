import { Page, Locator, expect } from '@playwright/test';
import { basePageLocators } from '../locators/basePage.locators';

export class BasePage {
  readonly page: Page;
  readonly contactUsBttn: Locator;
  readonly cookieDialog: Locator;
  readonly acceptCookies: Locator;
  readonly declineCookies: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactUsBttn = page.locator(basePageLocators.contactUsBttn).first();
    this.cookieDialog = page.locator(basePageLocators.cookieDialog).first();
    this.acceptCookies = page
      .locator(basePageLocators.acceptCookiesBttn)
      .first();
    this.declineCookies = page
      .locator(basePageLocators.declineCookiesBttn)
      .first();
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

  async closeCookiesDialog(): Promise<void> {
    await expect(this.cookieDialog).toBeVisible();
    await this.acceptCookies.click();
  }

  // Example: a common header or footer locator
  getHeader(): Locator {
    return this.page.locator('header');
  }
}
