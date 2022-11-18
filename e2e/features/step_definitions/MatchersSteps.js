import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(120 * 1000);

Given("I tap on the Counters section by text", async () => {
  await element(by.text("Counters")).tap();
});

When("I tap on the Water counter by text", async () => {
  await element(by.text("WATER COUNTER")).tap();
});

Given("I tap on the Electricity counter by text", async () => {
  await element(by.text("ELECTRICITY COUNTER")).tap();
});

Then("I tap on the Gas counter by text", async () => {
  await element(by.text("GAS COUNTER")).tap();
});

Then("I tap on the Broadband counter by text", async () => {
  await element(by.text("BROADBAND COUNTER")).tap();
});
