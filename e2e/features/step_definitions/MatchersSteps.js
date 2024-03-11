import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

// Locate by matcher + parent/child
When('I tap on the Water Counter by parent id and child text', async () => {
    await element(by.id('waterCounter').withDescendant(by.text('WATER COUNTER'))).tap();
});
Then('I multi tap on the Electricity Counter by parent id and child id', async () => {
    await element(by.id('electricityCounter').withDescendant(by.id('counterButton'))).tap();
});
Then('I multi tap on the Gas Counter by child text and parent id', async () => {
    await element(by.text('GAS COUNTER').withAncestor(by.id('gasCounter'))).tap();
});
Then('I tap on the Broadband Counter by child id and parent id', async () => {
    await element(by.id('counterButton').withAncestor(by.id('broadbandCounter'))).tap();
});

// Match by mulitple matchers
When('I tap on the Water Counter Title by type and text', async () => {
    const typeLocator = device.getPlatform() === 'ios' ? 'RCTTextView' : 'android.widget.TextView'

    await element(by.type(typeLocator).and(by.text('WATER COUNTER'))).tap();
});
/*
Then('I tap on the Electricity Counter by traits and text', async () => {
    await element(by.traits(['staticText']).and(by.text('ELECTRICITY COUNTER'))).tap();
});
*/
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