const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('https://kristiyangeshev-exam-prep-movies.onrender.com/movies');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  