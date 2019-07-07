/// <reference types="Cypress" />

class DGLLoginPage {
    performLogin(email, password) {
        cy.login(email, password)        
    }

    clickLoginButton() {
        cy.get('#btn-submit-login').click()
    }
}

export const DGLLoginPage = new DGLLoginPage()