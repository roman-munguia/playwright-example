import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/contactUsPage.page';

test.describe('Contact Us Tests', () => {
  let contactUsPage: ContactUsPage;

  test.beforeEach(async ({ page }) => {
    contactUsPage = new ContactUsPage(page);
    await contactUsPage.goTo();
  });

  test('fill contact form', async () => {
    await contactUsPage.fillContactForm();
    await expect(contactUsPage.emailInput).toHaveValue('test@unosquare.com');
  });
});
