import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";
import {init, cleanup} from "detox";
import { initialWindowMetrics } from "react-native-safe-area-context";
import {detox as config} from "../../../package.json"


BeforeAll({timeout: 60000},async ()=>{
    await init(config);
});

Before(async () => {
    await device.launchApp({newInstance:true});
});

AfterAll(async ()=>{
    await cleanup();
});