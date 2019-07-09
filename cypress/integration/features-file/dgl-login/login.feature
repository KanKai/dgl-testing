Feature: DGL Login feature
   @e2e-test
   Scenario: Login with email feature
      Given I visit DGL Site
      When I perform login
         |   email                     |   password    |
         |   jeerawat@addtechhub.com   |   P@ssw0rd   |  
      When Press Login
      Then  I have some results
