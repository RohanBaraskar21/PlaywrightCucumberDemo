Feature: OrangeHRM Login
  As a user
  I want to login to OrangeHRM
  So that I can access my dashboard

@smoke
  Scenario: Valid login credentials
    Given I am on the OrangeHRM login page
    When I enter valid username and password
    And I click the login button
    Then I should see the dashboard

@regression
  Scenario Outline: Invalid login credentials
    Given I am on the OrangeHRM login page
    When I enter "<username>" and "<password>"
    And I click the login button
    Then I should see an error message

    Examples:
      | username      | password      |
      | invalidUser   | invalidPass   |
      | Admin         | invalidPass   |


      @regression
  Scenario Outline: Invalid login credentials new
    Given I am on the OrangeHRM login page
    When I enter "<username>" and "<password>"
    And I click the login button
    Then I should see an new error message visible

    Examples:
      | username      | password      |
      | invalidUser   | invalidPass   |

