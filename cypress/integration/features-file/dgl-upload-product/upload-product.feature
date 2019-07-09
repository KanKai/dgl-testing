Feature: DGL product feature
ทำรายการ เพิ่ม ดูรายละเอียดสินค้า

  @e2e-test
  Scenario: Login DGL site
    Given I visit DGL Site
    When I perform login
      |   email                     |   password   |
      |   jeerawat@addtechhub.com   |   P@ssw0rd   |  
    Then Check DGL dashboard page

  @e2e-test
  Scenario: Create new product feature
    Given I jump to product page
    When Check DGL product page
    When I input product detail
    And Press submit
    Then Alert create successed
    But Alert create fail

  @e2e-test
  Scenario: Show detail product feature
    Given I jump to product detail page
    When Find detail product
    Then Product found