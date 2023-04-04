// import { test, expect } from '@playwright/test';
// const { chromium } = require('@playwright/test');
const { test, expect } = require('@playwright/test');

// (async () => {
  test('secret sauce', async ({ page }) => {

  // const browser = await chromium.launch({
  //   headless: false
  // });
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright Automation Framework: Tutorial - BrowserStack BrowserStack https://www.browserstack.com › Guide' }).click();
  await page.getByRole('link', { name: 'Get Started free' }).click();

  // // ---------------------
  // await context.close();
  // await browser.close();
});