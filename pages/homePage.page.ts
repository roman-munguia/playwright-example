import { expect, Locator, Page } from '@playwright/test';
import { homePageLocators } from '../locators/homePage.locators';
import { BasePage } from './basePage.page';
import { promises } from 'dns';

export class HomePage extends BasePage {
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.locator(homePageLocators.logo).first();
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async expectLogoVisible(): Promise<void> {
    await expect(this.logo).toBeAttached();
  }
}
