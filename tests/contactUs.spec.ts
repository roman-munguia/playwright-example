import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/contactUsPage.page';

test.describe('Contact US Tests', () => {
  let contactUsPage: ContactUsPage;

  test.beforeEach(async ({ page }) => {
    contactUsPage = new ContactUsPage(page);
    await page.goto('/');
  });

  test('Submit Contact Form', async ({ page }) => {
    await contactUsPage.closeCookiesDialog();
    await contactUsPage.goTo();
    await contactUsPage.fillContactForm();
  });
});
