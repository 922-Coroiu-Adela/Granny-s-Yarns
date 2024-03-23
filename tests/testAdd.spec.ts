import { test, expect } from '@playwright/test';

test('add a new yarn', async ({ page }) => {
    await page.goto('http://localhost:5173');
    //add button
    const button = await page.$('text=Add yarn');
    //no of yarn initially
    const yarns = await page.$$('tr');
    const noYarnsInitially = yarns.length;
    //button exists
    expect(button).not.toBeNull();
    //click button
    await button?.click();
    //expect the url to be /add
    expect(page.url()).toBe('http://localhost:5173/yarn/add');
    //expect the page to have 5 labels (name, color, price, quantity, and size)
    const labels = await page.$$('label');
    expect(labels.length).toBe(5);
    //expect the page to have 5 input fields
    const inputs = await page.$$('input');
    expect(inputs.length).toBe(5);
    await inputs[0].fill('new yarn');
    await inputs[1].fill('blue');
    await inputs[2].fill('10');
    await inputs[3].fill('10');
    await inputs[4].fill('3');
    //click the add yarn button
    const addYarnButton = await page.$('text=Add yarn');
    await addYarnButton?.click();
    //expect the url to be /yarn/add
    expect(page.url()).toBe('http://localhost:5173/');
    const yarnsAfterAdd = await page.$$('tr');
    //expect the number of yarns to increase by 1
    expect(yarnsAfterAdd.length).toBe(noYarnsInitially + 1);
});