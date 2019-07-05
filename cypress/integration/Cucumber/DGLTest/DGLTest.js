import { Given, And, Then } from 'cypress-cucumber-preprocessor'

Given('I visit DGL Site', () => {
    // Visit ExecuteAutomation Website
    cy.visit('/')
})

Given('I click login link', () => {
    cy.contains('Login').click()
})

Given('I login as user with {string} and {string}', (email, password) => {
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password, { log: false })
    cy.get(".mat-checkbox-inner-container").click();
    cy.get('.btn').click()
})