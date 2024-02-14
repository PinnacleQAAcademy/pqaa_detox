Feature: Element matchers

    Elements can be located using the various matchers supported by Detox

    Background: I navigate to the Counters section
        Given I tap on the Counters section by text

    @matchers @text
    Scenario: I can locate elements by text
        When I tap on the Water counter by text
        And I tap on the Electricity counter by text
        And I tap on the Gas counter by text
        Then I tap on the Broadband counter by text

    @matchers @label
    Scenario: I can locate elements by label
        When I tap the Home navigation section by label
        And I tap on the Counters section by text
        # Shouldn't use unless agreed by the team and company policy. Shouldn't be used for E2E functional tests
        Then I tap on the Water Counter by label 

    @matchers @id
    Scenario: I can locate elements by ID
        When I tap on the Water Counter by ID
        And I tap on the Electricity Counter by ID
        And I tap on the Gas Counter by ID
        Then I tap on the Broadband Counter by ID

    @matchers @multiple
    Scenario: I can locate elements by multiple matchers
        When I tap on the Water Counter Title by type and text