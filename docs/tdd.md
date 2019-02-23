## [Tennis Challenge Sydney](./index.md)

# TDD

## Gherkin Tests

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

End to End test a react app using cucumber and nightwatch API. Bootstrapped from 
[here](https://github.com/listingslab-software/react-e2e)


## Install

Cucumber e2e testing harness is bootstrapped from 
https://github.com/listingslab-software/react-e2e

```bash
    cd <working-directory>
    git clone https://github.com/listingslab-software/tennis-challenge
    cd tennis-challenge
    npm i
    npm run e2e
```
Output from a passing e2e test would look like this

![passing e2e test](./img/passing_e2e_test.png)