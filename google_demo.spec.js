import { test, expect } from '@playwright/test';
const { chromium } = require ('@playwright/test');

test('test google', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await   page.getByRole('combobox', { name: 'Search123' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('gladiator');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
});