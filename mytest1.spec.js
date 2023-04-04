// const { test } = require('../fixtures');
import { test, expect } from '@playwright/test';
// const { expect } = require('@playwright/test');
test.describe('feature foo', () => {
  test('test 1', async ({ page }) => {
    // Assertions use the expect API.
    await page.goto('https://www.duckduckgo.com');
    const element = await page.$('[name="q"]');
    await element.click();
    await element.type('BrowserStack');
    await element.press('Enter');
    const title = await page.title('');
    console.log(title);
    expect(title).toEqual( 'BrowserStack at DuckDuckGo', 'Expected page title is incorrect!');
  });
});