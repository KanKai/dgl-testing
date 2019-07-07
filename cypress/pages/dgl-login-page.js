/// <reference types="Cypress" />

class DGLLoginPage {
    static visit() {
        cy.clearLocalStorage()
        cy.visit('/login')
    }

    static clickRemember() {
        cy.get(".mat-checkbox-inner-container").click();
    }

    static performLogin(email, password) {
        cy.login(email, password)        
    }

    static clickLoginButton() {
        cy.get('#btn-submit-login').click()
    }

}

export default DGLLoginPage