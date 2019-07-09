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
        cy.get("#input-email").debug().type(email, { delay: 100 });
        cy.get("#input-password").debug().type(password, { log: false, delay: 100 });
    }

    static clickLoginButton() {
        cy.get('#btn-submit-login').click()
    }

}

export default DGLLoginPage