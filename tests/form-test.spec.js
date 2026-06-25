import { test, expect } from '@playwright/test';

test('Submit registration form', async ({ page }) => {
  await page.goto('https://test.netlify.app/');

  await page.getByLabel('Name').fill('ישראל ישראלי'); 
  await page.getByLabel('Email').fill('israel@example.com'); 
  await page.getByLabel('Phone').fill('0501234567'); 
  await page.getByLabel('Company').fill('My Tech Company');
  await page.getByLabel('Website').fill('https://www.mywebsite.com'); 
  await page.getByLabel('Number of Employees').selectOption('51-500'); 
  await page.screenshot({ path: 'before-submit-screenshot.png', fullPage: true }); 

  await page.getByRole('button', { name: 'Request a call back' }).click(); 

  await expect(page).toHaveURL(/.*thank-you.*/); 
  console.log('Reached the thank you page successfully!'); 
});