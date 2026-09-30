import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.page';

test.describe('Home Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goTo();
  });

  test('homepage logo is visible', async () => {
    await homePage.expectLogoVisible();
  });

  test('contact us button opens the contact page', async ({ page }) => {
    await homePage.contactUsBttn.click();
    await expect(page).toHaveURL(/\/contact-us\/$/);
  });
});
