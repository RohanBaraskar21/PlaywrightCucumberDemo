Feature: Registration Feature
    As a user
    I want to register for an account
    So that I can access the application

  @smoke
  Scenario Outline: Validating the Registration Feature
    Given I navigate to the registration page
    When I enter the name as "<name>"
    Then I enter the phone number as "<phone>"
    And I enter the email as "<email>"
    And I select the country as "<country>"
    And I enter the city as "<city>"
    And I enter the username as "<username>"
    And I enter the password as "<password>"
    And I click the register button

    Examples:
      | name           | phone      | email                | country | city   | username | password |
      | Rohan Baraskar | 9711111558 | tratestiner@test.com | India   | Noida  | rohan123 | rohan123 |
      | Rohan Baraskar | 9711191558 | info@test.com        | Germany | Berlin | rohan123 | rohan123 |
