import { Given, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

Given('I start Detox', async () => {
    console.log('Test started');
});