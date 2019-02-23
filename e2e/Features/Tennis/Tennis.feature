Feature: Tennis

  In order to use the app
  As a event organiser
  I want to be be sure the app scores correctly

  Scenario: No match in progress
    Given I am on the tennis page
    And I wait "1" seconds
    Then I should see "START MATCH"

  Scenario: Start Match
    Given I am on the tennis page
    And I click "#start-match"
    And I wait "1" seconds
    Then I should see "matchId:"

  Scenario: Player 1 Win
    Given I click player 1 "5" times
    And I wait "1" seconds
    Then I should see "Game Over. Player 1 Wins"

  # Scenario: Player 2 Win
  #   Given I click player 2 "5" times
  #   And I wait "1" seconds
  #   Then I should see "Game Over. Player 2 Wins"

  # Scenario: Deuce
  #   Given I click player 1 "4" times
  #   Given I click player 2 "4" times
  #   And I wait "1" seconds
  #   Then I should see "Deuce"

  # Scenario: Advantage Player 1
  #   Given I click player 1 "5" times
  #   Given I click player 2 "4" times
  #   And I wait "1" seconds
  #   Then I should see "Advantage Player 1"

  # Scenario: Advantage Player 2
  #   Given I click player 1 "5" times
  #   Given I click player 2 "4" times
  #   And I wait "1" seconds
  #   Then I should see "Advantage Player 2"

  # Scenario: Game Over
  #   Given I click player 1 "2" times
  #   Given I click player 2 "2" times
  #   Given I click player 1 "2" times
  #   Given I click player 2 "2" times
  #   Given I click player 1 "2" times
  #   And I wait "1" seconds
  #   Then I should see "Game Over"
    