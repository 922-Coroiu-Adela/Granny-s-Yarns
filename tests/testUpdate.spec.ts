import { test, expect } from '@playwright/test';

test('update a yarn', async ({ page }) => {
    await page.goto('http://localhost:5173');
    //hover over the yarn to see the delete button
    const yarns = await page.$$('tr');
    const firstYarn = yarns[1];
    await firstYarn.hover();
    //update button of the first yarn
    const updateButton = await page.$('#editButton');
    //button exists
    expect(updateButton).not.toBeNull();
    //click button
    await updateButton!.click();
    //expect the url to be /yarn/edit/1
    expect(page.url()).toBe('http://localhost:5173/yarn/edit/1');
    //expect the page to have 5 labels (name, color, price, quantity, and size)
    const labels = await page.$$('label');
    expect(labels.length).toBe(5);
    //expect the page to have 5 input fields
    const inputs = await page.$$('input');
    expect(inputs.length).toBe(5);
    await inputs[0].fill('aaa');
    //click the edit yarn button
    const editYarnButton = await page.$('text=Edit yarn');
    await editYarnButton?.click();
    //expect the url to be /
    expect(page.url()).toBe('http://localhost:5173/');
    //expect the name of the first yarn to be 'new yarn'
    const yarnsAfterEdit = await page.$$('tr');
    const firstYarnAfterEdit = yarnsAfterEdit[1];
    const name = await firstYarnAfterEdit.$('td');
    expect(await name?.innerText()).toBe('aaa');

});