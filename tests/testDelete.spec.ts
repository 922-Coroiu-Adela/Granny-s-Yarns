import { test, expect } from '@playwright/test';

test('delete a yarn', async ({ page }) => {
    await page.goto('http://localhost:5173');
    //hover over the yarn to see the delete button
    const yarns = await page.$$('tr');
    const firstYarn = yarns[1];
    await firstYarn.hover();
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('confirm');
        await dialog.accept();
    });
    //delete button of the first yarn
    const deleteButton = await page.$('#deleteButton');
    //no of yarn initially
    const noYarnsInitially = yarns.length;
    //button exists
    expect(deleteButton).not.toBeNull();
    //click button
    await deleteButton!.click();
    //expect the url to be /
    expect(page.url()).toBe('http://localhost:5173/');
    const yarnsAfterDelete = await page.$$('tr');
    //expect the number of yarns to decrease by 1
    expect(yarnsAfterDelete.length).toBe(noYarnsInitially - 1);

});