import { expect, Locator, Page } from '@playwright/test';
import { homePageLocators } from '../locators/homePage.locators';
import { BasePage } from './basePage.page';

export class HomePage extends BasePage {
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.locator(homePageLocators.logo).first();
  }

  async goto() {
    await this.page.goto('/');
  }

  async expectLogoVisible() {
    await this.waitForNetworkIdle();
    await expect(this.logo).toBeVisible();
  }
}
