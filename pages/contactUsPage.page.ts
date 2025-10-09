import { expect, Locator, Page } from '@playwright/test';
import { homePageLocators } from '../locators/homePage.locators';
import { BasePage } from './basePage.page';
import { promises } from 'dns';
import { contactUsPageLocators } from '../locators/contactUsPage.locators';

export class ContactUsPage extends BasePage {
  readonly firstNameInput: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator(contactUsPageLocators.firstNameInput);
  }

  async goTo(): Promise<void> {
    await this.page.goto('/contact-us/');
  }

  async goToContactUs(): Promise<void> {
    await this.contactUsBttn.click();
  }

  async fillContactForm(): Promise<void> {
    await this.firstNameInput.fill('Roman');
  }
}
