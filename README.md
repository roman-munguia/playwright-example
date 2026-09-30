# playwright-example

Example automation framework using Playwright and TypeScript, following the Page Object Model.

## Structure

- `locators/` – selector strings for each page
- `pages/` – page objects (`BasePage` holds shared helpers)
- `tests/` – test specs
- `types/` – shared TypeScript types

## Setup

```bash
npm install
npx playwright install
```

## Running tests

```bash
npm test                          # all browsers
npx playwright test --project=chromium
npx playwright show-report        # open the last HTML report
```
