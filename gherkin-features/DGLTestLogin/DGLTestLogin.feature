Feature: DGL Login feature
   @e2e-test
   Scenario: Login with email feature
      Given I visit DGL Site
      When I input email and password
         |   email                     |   password    |
         |   jeerawat@addtechhub.com   |   #Dgl.1901   |  
      And I click remember      
      When Press Login
      Then  I have some results
