import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage.page';

test.describe('Home Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('/');
  });

  test('homepage logo exists', async ({ page }) => {
    await homePage.goto();
    await homePage.expectLogoVisible();
  });
});
