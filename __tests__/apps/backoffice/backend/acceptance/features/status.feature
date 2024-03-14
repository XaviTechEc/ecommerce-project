Feature: Check Status

  In order to know the acceptance test config is up and running
  As a health check
  I want to check the status

  Scenario: Check the Check Status
    Given The current year is 2024
    When I ask for the year
    Then I should be told "2024"
