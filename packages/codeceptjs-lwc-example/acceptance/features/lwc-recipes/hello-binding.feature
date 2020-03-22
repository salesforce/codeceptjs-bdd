@hello_binding @lwc_recipes
Feature: HelloBinding from Salesforce LWC Recipes

    As a LWC developer
    I want to be able to automate the LWC Shadow Dom Components
    So that I can quicly create my UI Automated Suite using Selenium

    => LWC Recipe Page: https://recipes.lwc.dev/#hello

    @hello_binding_component
    Scenario: Fred successfully types in and verifies the title in Hello Binding LWC Component

        When Fred types "Kushang Gajjar" into the Hello Binding Component
        Then he sees the title is updated accordingly