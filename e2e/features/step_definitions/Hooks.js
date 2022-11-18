import {Before, BeforeAll, AfterAll} from '@cucumber/cucumber'
import {init, cleanup} from 'detox';
import {detox as config} from '../../../package.json';

BeforeAll({timeout: 60 * 1000}, async () => {
   
    await init(config);
})

Before(async () => {

    await device.launchApp({newInstance: true});
})

AfterAll(async () => {
    await cleanup();
})