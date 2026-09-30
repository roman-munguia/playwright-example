import { Locator, Page } from '@playwright/test';
import { contactUsPageLocators } from '../locators/contactUsPage.locators';
import { BasePage } from './basePage.page';

export class ContactUsPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly unlockDedicatedTalentInput: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator(contactUsPageLocators.firstNameInput);
    this.lastNameInput = page.locator(contactUsPageLocators.lastNameInput);
    this.emailInput = page.locator(contactUsPageLocators.emailInput);
    this.messageInput = page.locator(contactUsPageLocators.messageInput);
    this.unlockDedicatedTalentInput = page.locator(
      contactUsPageLocators.unlockDedicatedTalentInput
    );
  }

  async goTo(): Promise<void> {
    await this.page.goto('/contact-us/');
  }

  // Fills the form without submitting it, so no real requests are sent.
  async fillContactForm(): Promise<void> {
    await this.firstNameInput.fill('Roman');
    await this.lastNameInput.fill('Munguia');
    await this.emailInput.fill('test@unosquare.com');
    await this.messageInput.fill('This is the SDET course by Roman Munguia.');
    await this.unlockDedicatedTalentInput.hover();
  }
}
