import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I visit DGL Site', () => {
    // Visit ExecuteAutomation Website
    cy.visit('/login')
})

Given('I click remember', () => {
    cy.get(".mat-checkbox-inner-container").click();
})

Given('I login as following', datatable => {
    datatable.hashes().forEach(row => {
        cy.get('#input-email').type(row.email, { delay: 100 })
        cy.get('#input-password').type(row.password, { log: false, delay: 100 })
    });
    cy.get('#btn-submit-login').click()
})