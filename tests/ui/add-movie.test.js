const { test, expect } = require('@playwright/test');

test('Check add movie page', async ({ page }) => {
    await page.goto('https://kristiyangeshev-exam-prep-movies.onrender.com/add-movie');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  