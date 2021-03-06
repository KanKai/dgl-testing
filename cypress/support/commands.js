// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "cypress-file-upload";

Cypress.Commands.add("login", (email, password, visit = true) => {

  if (visit) {
    cy.clearLocalStorage()
    cy.visit('/login')
  }

  cy.get("[class='font-title']").invoke('text').as('linkText')

  cy.get("@linkText").then($x => {
    expect($x).is.eql("เข้าสู่ระบบ");
  });

  cy.url().should("include", "/login");

  cy.get("#input-email").debug().type(email, { delay: 100 });
  cy.get("#input-password").debug().type(password, { log: false, delay: 100 });

  cy.get(".mat-checkbox-inner-container").click();

  cy.get('#btn-submit-login').click()

});
