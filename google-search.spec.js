import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?dsh=S-1056071977%3A1677755038046657&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHcpCT40Un2I_grJrmzHTu19R37hPhWkF3M43eq3bnaCzdYrSPMDnCnf8clwy2hoC83M-SgS');
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('mutharasu@gmail.com');
  await page.getByRole('textbox', { name: 'Email or phone' }).press('Enter');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('@ustrali@123');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.goto('https://mail.google.com/mail/u/0/');
  await page.goto('https://mail.google.com/mail/u/0/#inbox');
  //await page.getByRole('button', { name: 'Google Account: Mutharasu Kochadai (mutharasu@gmail.com)' }).click();
  //await page.frameLocator('iframe[name="account"]').getByRole('link', { name: 'Sign out' }).click();
});