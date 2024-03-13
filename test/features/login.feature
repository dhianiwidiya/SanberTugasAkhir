Feature: Kasirdemo Login Test

    @all @negative
    Scenario: Verify login failed with invalid email
        Given User open Kasirdemo Website
        When User login with invalid email
        Then User should see an error message

    @all @negative
    Scenario: Verify login failed with invalid password
        Given User open Kasirdemo Website
        When User login with invalid password
        Then User should see an error message

    @all @positive
    Scenario: User Login successfully with valid credentials
        Given User open Kasirdemo Website
        When User login using valid email and password
        Then User should be on Homepage

