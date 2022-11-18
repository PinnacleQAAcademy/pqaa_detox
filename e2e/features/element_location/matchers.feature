Feature: Element matchers

    Element can be located using the various matchers supported by Detox

    @matchers @text
    Scenario: I can locate element by text
        Given I tap on the Counters section by text
        When I tap on the Water counter by text
        And I tap on the Electricity counter by text
        And I tap on the Gas counter by text
        Then I tap on the Broadband counter by text
