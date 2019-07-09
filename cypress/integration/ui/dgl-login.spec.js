/// <reference types="Cypress" />
import DGLLoginPage from '../../pages/dgl-login-page'

describe('Smock test DGL Login', () => {
    before('Call DGL site url', () => {
        DGLLoginPage.visit()
    })

    it('Perform login', () => {
        cy.fixture('dgluser').as('user')

        cy.get('@user').then(user => {
            DGLLoginPage.performLogin(user.email, user.password)
        })
        DGLLoginPage.clickRemember()
    })

    it('Press login', () => {
        DGLLoginPage.clickLoginButton()
    })

    it('Check go to dashboard page', () => {
        cy.url().should('include', '/dashboard')
    })

    it('Check email after login', () => {
        cy.get("[class='user-container']").click()
        cy.fixture('dgluser').as('user')
        cy.get('@user').then(user => {
            cy.contains(user.email)
        })
    })

})