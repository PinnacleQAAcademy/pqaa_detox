Feature: Elements can be selected by the various matchers supported by Detox

    @matchers @text
    Scenario: I can locate elements by text
        Given I tap on the Counters section by text
        When I tap on the Water Counter by text
        And I tap on the Electricity Counter by text
        And I tap on the Gas Counter by text
        Then I tap on the Broadband Counter by text

    @matchers @label
    Scenario: I can locate elements by label
        When I tap the Home navigation section by label
        And I tap on the Counters section by text
        # Shouldn't use unless agreed by the team and company policy. Shouldn't be used for E2E functional tests
        Then I tap on the Water Counter by label 