Feature: Bootstrap
  In order to see that the app has bootstrapped properly
  When the app starts, I want to be able to see a link to see the word Ready rendered
  So that I know everything is working properly

  Scenario: Bootstrapped Successfully
    Given I am on the app page
    Then I should see "Ready."