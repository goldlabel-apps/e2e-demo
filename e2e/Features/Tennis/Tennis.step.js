const { Given } = require(`cucumber`);
const { iAmOn } = require(`../../createWorld`);

async function iAmOnTheTennisPage() {
  const url = `http://localhost:3000/tennis`;
  await iAmOn(url);
}
exports.iAmOnTheTennisPage = iAmOnTheTennisPage;
Given(/^I am on the tennis page$/, iAmOnTheTennisPage);
