import type { LocatorObj } from '../types';

export const basePageLocators: LocatorObj = {
  // Xpath Locators

  // CSS Selector Locator
  contactUsBttn: 'a[href="/contact-us/"]',
  cookieDialog: 'div[id="hs-eu-cookie-confirmation-inner"]',
  acceptCookiesBttn: 'button[aria-label="Accept"]',
  declineCookiesBttn: 'button[aria-label="Decline"]',
};
