// const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

// (async () => {
  test('google home', async ({ page }) => {
  // const browser = await chromium.launch({
  //   headless: false
  // });
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto('https://www.google.com/');
  // ---------------------
  // await context.close();
  // await browser.close();
// });

// test('google search', async ({ page }) => {
await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('hello world');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Holiday Packages' }).click();
});