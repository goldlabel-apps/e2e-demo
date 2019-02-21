Feature: Bootstrap
  In order to see that the app has bootstrapped properly
  When the app starts, I want to be able to see a link to see the word Ready rendered
  So that I know everything is working properly

  Scenario: React App Successfully Bootstrapped
    Given I am on the app page
    And I wait "2" seconds
    Then I should see "Bootstrapped."