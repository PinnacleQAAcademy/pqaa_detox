import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

// Match by ID
When('I tap on the Water Counter by ID', async () => {
    await element(by.id('waterCounter')).tap();
});

When('I tap on the Electricity Counter by ID', async () => {
    await element(by.id('electricityCounter')).tap();
});

When('I tap on the Gas Counter by ID', async () => {
    await element(by.id('gasCounter')).tap();
});

When('I tap on the Broadband Counter by ID', async () => {
    await element(by.id('broadbandCounter')).tap();
});


// Match by label
When('I tap the Home navigation section by label', async () => {
    await element(by.label('Home')).atIndex(0).tap();
});

Then('I tap on the Water Counter by label', async () => {
    await element(by.label('waterCounterLabel')).tap();
});

// Match by text
Given('I tap on the Counters section by text', async () => {
    await element(by.text('Counters')).tap();
});

When('I tap on the Water counter by text', async () => {
    await element(by.text('WATER COUNTER')).tap();
});

Then('I tap on the Electricity counter by text', async () => {
    await element(by.text('ELECTRICITY COUNTER')).tap();
});

Then('I tap on the Gas counter by text', async () => {
    await element(by.text('GAS COUNTER')).tap();
});

Then('I tap on the Broadband counter by text', async () => {
    await element(by.text('BROADBAND COUNTER')).tap();
});