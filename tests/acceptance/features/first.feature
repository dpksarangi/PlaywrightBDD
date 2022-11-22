Feature: My first feature

Scenario: Search iphone
Given I am on homepage
When I type iphone
And click search
Then I should be able to see the results
