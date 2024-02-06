import { BeforeAll, Before, AfterAll } from '@cucumber/cucumber';
import { init, cleanup } from 'detox/internals';

BeforeAll({ timeout: 60 * 1000 }, async () => {
    await init();
});

Before(async () => {
    await device.launchApp({ newInstance: true });
});

AfterAll(async () => {
    await cleanup();
});