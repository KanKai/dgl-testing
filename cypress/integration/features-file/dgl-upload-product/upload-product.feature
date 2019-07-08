Feature: DGL upload product feature
    @e2e-test
    Scenario: Create new feature
        Given I visit DGL Site
        When I jump to product page
        When I input product detial
        And Press save product button
        Then Alert create product successed
        But Alert create product failed     