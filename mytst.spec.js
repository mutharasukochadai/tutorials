import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test('test url', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('hello world');

const navigationTimingJson = await page.evaluate(() =>
JSON.stringify(performance.getEntriesByType('navigation')) )
const navigationTiming_load = JSON.parse(navigationTimingJson);
console.log(navigationTiming_load);

});