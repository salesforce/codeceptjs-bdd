@search_github
Feature: Search Github

  In order to see Github Search works
  As a Github user
  I want to be able to search for repository


# Use `Background` as Pre-requisite step if more than one scenario repeats the same

  Background: Navigate to HomePage
    Given Fred is on Github Homepage

## If you have more than ONE datasets, use 'Scenario Outline'

  @search_repositories
  Scenario Outline: Fred is able to search for correct repository

    When he searches for the "<repository>"
    Then he is able to see the "<repository>" in search results
  
    Scenarios:
    | repository |
    | codeceptjs-quick-start |
    | gkushang/codeceptjs-selenium |


## If you have one Scenario

 @search
  Scenario: Fred should see the highlighted results for the searched repository

    When he searches for the "codeceptjs-quick-start"
    Then he sees all the detailed highlighted results including description or license info and many more
  