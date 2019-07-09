Feature: DGL product feature
  ทำรายการ เพิ่ม ดูรายละเอียดสินค้า

  @e2e-test
  Scenario: Create product and display detial
    Given I visit DGL Site go to product page
    When I perform login
      |   email                     |   password   |
      |   jeerawat@addtechhub.com   |   P@ssw0rd   |  
    When Check DGL dashboard page
    When I jump to product page
    When Check DGL product page
    When I input product detail
    And Press submit
    When Alert create successed
    But Alert create fail
    When I jump to product detail page
    When Product found
    Then Delete product