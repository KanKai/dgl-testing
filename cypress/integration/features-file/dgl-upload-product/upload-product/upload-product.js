/// <reference types="Cypress" />
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import DGLUploadProductPage from '../../../../pages/dgl-upload-product-page'
import DGLLoginPage from '../../../../pages/dgl-login-page'

Given(/^I visit DGL Site go to product page$/, () => {
    cy.viewport('macbook-13')
    cy.clearLocalStorage()
    DGLLoginPage.visit()
})

When(/^I perform login$/, dataSource => {
    dataSource.hashes().forEach(row => {
        cy.login(row.email, row.password, false)
    });
})

Then(/^Check DGL dashboard page$/, () => {
    cy.url().should('include', '/dashboard')
})

When(/^I jump to product page$/, () => {
    DGLUploadProductPage.gotoProductPage()
})

When(/^Check DGL product page$/, () => {
    DGLUploadProductPage.confirmProductPage()
})

When(/^I input product detail$/, () => {
    DGLUploadProductPage.gotoCreateProductPage()
    DGLUploadProductPage.importImage()
    cy.fixture('dgl-product').as('_product')
    cy.get('@_product').then(product => {
        DGLUploadProductPage.performProduct(product.create)
    })
})

And(/^Press submit$/, () => {
    DGLUploadProductPage.clickButtonSave()
})

When(/^Alert create successed$/, () => {
})

But(/^Alert create fail$/, () => {
})

When(/^I jump to product detail page$/, () => {
})

When(/^Product found$/, () => {
})

Then(/^Delete product$/, () => {
})