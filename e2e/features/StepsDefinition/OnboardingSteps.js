
import {Given, setDefaultTimeout} from "@cucumber/cucumber";

setDefaultTimeout(120 * 10000);

Given("I start Detox",{timeout:60000}, async () => {
    console.log("Test started");
});