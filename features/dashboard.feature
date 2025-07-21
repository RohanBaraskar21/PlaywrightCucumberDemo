Feature: OrangeHRM Dashboard
  As a logged-in user
  I want to interact with the dashboard
  So that I can verify dashboard elements and actions

  Background:I am on the OrangeHRM login page
    Given I am on the OrangeHRM login page
    When I enter valid username and password
    And I click the login button
    Then I should see the dashboard

  Scenario: Dashboard displays correct heading
    Then the dashboard heading should be visible

  Scenario: User can see the Admin menu
    Then the Admin menu should be visible

  Scenario: User can see the search input
    Then the dashboard search input should be visible
