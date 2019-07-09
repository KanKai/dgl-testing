import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import DGLUploadProductPage from '../../../../pages/dgl-upload-product-page'
import DGLLoginPage from '../../../../pages/dgl-login-page'

Given(/^I visit DGL Site$/, () => {
    DGLLoginPage.visit()
})

When(/^I perform login$/, dataSource => {
    dataSource.hashes().forEach(row => {
        DGLLoginPage.performLogin(row.email, row.password)
    });
    DGLLoginPage.clickRemember()
    DGLLoginPage.clickLoginButton()
})

Then(/^Check DGL dashboard page$/, () => {
    cy.url().should('include', '/dashboard')
})