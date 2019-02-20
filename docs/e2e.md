## [Tennis Challenge Sydney](./index.md)

# Cucumber/Nightwatch e2e testing

[![e2e test](./docs/img/passing_e2e_test.png)](https://www.youtube.com/watch?v=MugXpi9D78g)

End to End test a react app using cucumber and nightwatch API

Cucumber e2e testing harness is bootstrapped from 
https://github.com/listingslab-software/react-e2e

## Setup

End to End test a react app using Cucumber and nightwatch API.

```bash
    cd <working-directory>
    git clone https://github.com/listingslab-software/tennis-challenge
    cd tennis-challenge
    npm i
    npm run e2e
```
Output from a passing e2e test would look like this

![passing e2e test](./docs/img/passing_e2e_test.png)

#### NPM Dependencies

```javascript
    "devDependencies": {
        "chromedriver": "2.43.1",
        "cucumber": "5.0.2",
        "cucumber-pretty": "^1.5.0",
        "nightwatch": "1.0.11",
        "nightwatch-api": "latest",
        "selenium-server": "^3.141.0",
        "start-server-and-test": "1.7.9"
    },
```