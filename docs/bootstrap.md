
## [Tennis Challenge Sydney](./index.md)

# Bootstrap Environment

We're going to create a React App which can be run and 
tested automatically by [e2e](./e2e.md).

React is bootstrapped from [create-react-app](./bootstrap.md) 
and then the e2e capability is added.

```
git clone https://github.com/listingslab-software/react-e2e
cd react-e2e
cp src <this-project>
cp public <this-project>
cp e2e <this-project>
cp nightwatch.conf.js <this-project>
cp package.json <this-project>
cd ../
rm -rf react-e2e
```

Now we can run our e2e test and verify that everything is working

## Feature: Bootstrap

[/e2e/Features/Bootstrap.feature](https://github.com/listingslab-software/tennis-challenge-sydney/blob/master/e2e/Features/Bootstrap/Bootstrap.feature)

```bash

Feature: Bootstrap

  In order to develop the app
  As a coder
  I want to be see the Bootstrapped OK. message

  Scenario: React App Successfully Bootstrapped
    Given I am on the app page
    And I wait "2" seconds
    Then I should see "Bootstrapped OK."

```

NEXT => [Test Driven Development](https://listingslab-software.github.io/tennis-challenge-sydney/tdd.html)