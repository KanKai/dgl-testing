/// <reference types="Cypress" />
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import DGLLoginPage from '../../../../pages/dgl-login-page'

Given(/^I visit DGL Site$/, () => {
    DGLLoginPage.visit()
})

When(/^I perform login$/, dataSource => {
    dataSource.hashes().forEach(row => {
        DGLLoginPage.performLogin(row.email, row.password)
    });
    DGLLoginPage.clickRemember()
})

When(/^Press Login$/, () => {
    DGLLoginPage.clickLoginButton()
})

Then(/^I have some results$/, () => {
    cy.url().should('include', '/dashboard')
})