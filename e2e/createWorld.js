/* eslint-disable no-use-before-define */ // Allow functions to be hoisted

const { Given, Then, When } = require(`cucumber`);
const { client } = require(`nightwatch-api`);

/**
 * Get an item from localStorage
 * @param {string} key The `key` of the item to get
 * @returns {Promise<any>} The value of the item
 */
async function storageGet(key) {
  let actual = null;
  await client.execute(`return localStorage.getItem(arguments[0])`, [key], (result) => {
    actual = result.value;
  });
  return actual;
}
exports.storageGet = storageGet;

/**
 * Set an item in localStorage to a given `value`
 * @param {string} key The `key` of the item to set
 * @param {any} value The `value` to set the item to
 * @returns {Promise<void>} void
 */
async function storageSet(key, value) {
  await client.execute(`localStorage.setItem(arguments[0], arguments[1])`, [key, value], () => {
    /* do nothing */
  });
}
exports.storageSet = storageSet;

/**
 * Navigate to a given `url`
 * @param {string} url The url to navigate to
 * @returns {Promise<void>} void
 */
async function iAmOn(url) {
  await client.url(url);
}
exports.iAmOn = iAmOn;
Given(/^I am on "([^"]*)"$/, iAmOn);

/**
 * Fill in an input, found by `selector` with a given `value`
 * @param {string} selector The css `selector` to use to find the input
 * @param {string} value The `value` to enter into the input
 * @returns {Promise<void>} void
 */
async function iFillInBlankWithBlank(selector, value) {
  await client.assert.elementPresent(selector);
  await client.setValue(selector, value);
}
exports.iFillInBlankWithBlank = iFillInBlankWithBlank;
Given(/^I fill in "([^"]*)" with "([^"]*)"$/, iFillInBlankWithBlank);

/**
 * Wait for a given number of `seconds`
 * @param {number | string} seconds The number of `seconds` to wait for
 * @returns {Promise<void>} void
 */
async function iWaitForBlankSeconds(seconds) {
  const milliseconds = 1000;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, Number(seconds) * milliseconds);
  });
}
exports.iWaitForBlankSeconds = iWaitForBlankSeconds;
Given(/^I wait "([^"]*)" second(?:s)?$/, iWaitForBlankSeconds);

/**
 * Click on a given element, found by css `selector`
 * @param {string} selector The css `selector` to use to find the element
 * @returns {Promise<void>} void
 */
async function iClickBlank(selector) {
  await client.assert.elementPresent(selector);
  await client.element(`css selector`, selector).click(`css selector`, selector);
}
exports.iClickBlank = iClickBlank;
When(/^I click "([^"]*)"$/, iClickBlank);

/**
 * Look for a given `value` on the page
 * @param {string} value The `value` to look for
 * @returns {Promise<void>} void
 */
async function iShouldSeeBlank(value) {
  const selector = `body`;
  await client.assert.elementPresent(selector);
  await client.expect.element(selector).text.contain(value);
}
exports.iShouldSeeBlank = iShouldSeeBlank;
Then(/^I should see "([^"]*)"$/, iShouldSeeBlank);

/**
 * Look for a given `value` in an element found by css `selector`
 * @param {string} value The `value` to look for
 * @param {string} selector The css `selector` to use to look for the `value`
 * @returns {Promise<void>} void
 */
async function iShouldSeeBlankInBlank(value, selector) {
  await client.assert.elementPresent(selector);
  await client.expect.element(selector).text.contain(value);
}
exports.iShouldSeeBlankInBlank = iShouldSeeBlankInBlank;
Then(/^I should see "([^"]*)" in "([^"]*)"$/, iShouldSeeBlankInBlank);

/**
 * Look for a given `value` to not be on the page
 * @param {string} value The `value` to look for
 * @returns {Promise<void>} void
 */
async function iShouldNotSeeBlank(value) {
  const selector = `body`;
  await client.assert.elementPresent(selector);
  await client.expect.element(selector).text.not.contain(value);
}
exports.iShouldNotSeeBlank = iShouldNotSeeBlank;
Then(/^I should not see "([^"]*)"$/, iShouldNotSeeBlank);

/**
 * Look for a given `value` to not be in an element found by css `selector`
 * @param {string} value The `value` to look for
 * @param {string} selector The css `selector` to use to look for the `value`
 * @returns {Promise<void>} void
 */
async function iShouldNotSeeBlankInBlank(value, selector) {
  await client.assert.elementPresent(selector);
  await client.expect.element(selector).text.not.contain(value);
}
exports.iShouldNotSeeBlankInBlank = iShouldNotSeeBlankInBlank;
Then(/^I should not see "([^"]*)" in "([^"]*)"$/, iShouldNotSeeBlankInBlank);

/**
 * Check that a given `selector`s css `property` matches a given `value`
 * @param {string} selector The css `selector` to use to look for the given `property`
 * @param {string} property The `property` to check
 * @param {string} value The `value` of the `property` to look for
 * @returns {Promise<void>} void
 */
async function theBlanksBlankPropertyIsBlank(selector, property, value) {
  await client.assert.cssProperty(selector, property, value);
}
exports.theBlanksBlankPropertyIsBlank = theBlanksBlankPropertyIsBlank;
Then(/^the "([^"]*)" "([^"]*)" property is "([^"]*)"$/, theBlanksBlankPropertyIsBlank);
Then(/^the "([^"]*)"s "([^"]*)" property is "([^"]*)"$/, theBlanksBlankPropertyIsBlank);

/**
 * Check that a given `selector` has a background colour of a given `value`
 * @param {string} selector The css `selector` to use to look for the background colour
 * @param {string} value The `value` of the background colour to look for
 * @returns {Promise<void>} void
 */
async function theBlanksBackgroundColourIsBlank(selector, value) {
  await theBlanksBlankPropertyIsBlank(selector, `background-color`, value);
}
exports.theBlanksBackgroundColourIsBlank = theBlanksBackgroundColourIsBlank;
Then(/^the "([^"]*)" background colour is "([^"]*)"$/, theBlanksBackgroundColourIsBlank);
Then(/^the "([^"]*)"s background colour is "([^"]*)"$/, theBlanksBackgroundColourIsBlank);

/**
 * Assert the given `document.title` is `value`
 * @param {string} value The `value` to check for
 * @returns {Promise<void>} void
 */
async function thePageTitleIsBlank(value) {
  await client.assert.title(value);
}
exports.thePageTitleIsBlank = thePageTitleIsBlank;
Then(/^the page title is "(.*?)"$/, thePageTitleIsBlank);

/**
 * Assert the given `url` is `url`
 * @param {string} url The `url` to check for
 * @returns {Promise<void>} void
 */
async function theUrlIsBlank(url) {
  let actual;
  await client.url((result) => {
    actual = result.value;
  });
  await client.assert.equal(actual, url);
}
exports.theUrlIsBlank = theUrlIsBlank;
Then(/^the url is "(.*?)"$/, theUrlIsBlank);
