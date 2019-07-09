/// <reference types="Cypress" />
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import DGLLoginPage from '../../../../pages/dgl-login-page'

Given(/^I visit DGL Site$/, () => {
    cy.clearLocalStorage()
    DGLLoginPage.visit()
})

When(/^I perform login$/, dataSource => {
    dataSource.hashes().forEach(row => {
        cy.login(row.email, row.password, false)
    });
})

Then(/^I have some results$/, () => {
    cy.url().should('include', '/dashboard')
})