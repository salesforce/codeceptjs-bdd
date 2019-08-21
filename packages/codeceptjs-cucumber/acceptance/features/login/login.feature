@login
Feature: Login to Github

  In order to contribute to Git repository
  Fred, As a Github user
  Wants to be able to login


  @login
  Scenario: Fred successfully logs in to contribute to the Git repository

    Given Fred logs in with the valid credentials
    Then he is able to contribute to the repository

    
