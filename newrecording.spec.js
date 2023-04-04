// const { chromium } = require('playwright');
const{test, expect} = require('@playwright/test')

test('david jones 1', async ({ page }) => {
  await page.goto('https://www.davidjones.com/');
  // await page.locator('//*[@id="header-nav"]/div/ul/li[5]/a').hover();
  // await page.getByRole('link', { name: 'Suit Sets' }).click();
  // await page.getByRole('button', { name: 'Brand ' }).click();
  // await page.getByRole('link', { name: 'Calibre (41)' }).click();
  // await page.getByRole('link', { name: 'WOOL SILK DOUBLE BREASTED EVENING JACKET' }).first().click();
  // await page.getByRole('link').filter({ hasText: '% 43 SAVING' }).click();
});

  test('david jones 2', async ({ page }) => {
  // await page.goto('https://www.davidjones.com/');
  await page.locator('//*[@id="header-nav"]/div/ul/li[5]/a').click();
  await page.getByRole('link', { name: 'Suit Sets' }).click();
//   await page.getByRole('button', { name: 'Brand ' }).click();
//   await page.getByRole('link', { name: 'Calibre (41)' }).click();
//   await page.getByRole('link', { name: 'WOOL SILK DOUBLE BREASTED EVENING JACKET' }).first().click();
//   await page.getByRole('link').filter({ hasText: '% 43 SAVING' }).click();
});