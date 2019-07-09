/// <reference types="Cypress" />

const snapshotFolder = 'actions/viewport';

context('Test DGL viewport', () => {
    before(() => {
        cy.visit('/login')
        cy.url().should('include', '/login')
    })

    it('DGL set the viewport super large size', () => {
        cy.viewport(2999, 2999)
        cy.wait(200)
        //cy.screenshot(`${snapshotFolder}/large-size`)
    })

    it('DGL set the viewport macbook-15', () => {
        cy.viewport('macbook-15')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/macbook-15`)
    })

    it('DGL set the viewport macbook-13', () => {
        cy.viewport('macbook-13')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/macbook-13`)
    })

    it('DGL set the viewport macbook-11', () => {
        cy.viewport('macbook-11')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/macbook-11`)
    })

    it('DGL set the viewport ipad-2', () => {
        cy.viewport('ipad-2')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/macbook-11`)
    })

    it('DGL set the viewport ipad-mini', () => {
        cy.viewport('ipad-mini')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/ipad-mini`)
    })

    it('DGL set the viewport iphone-6-plus', () => {
        cy.viewport('iphone-6+')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/iphone-6-plus`)
    })

    it('DGL set the viewport iphone-6', () => {
        cy.viewport('iphone-6')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/iphone-6`)
    })

    it('DGL set the viewport iphone-5', () => {
        cy.viewport('iphone-5')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/iphone-5`)
    })

    it('DGL set the viewport iphone-4', () => {
        cy.viewport('iphone-4')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/iphone-4`)
    })

    it('DGL set the viewport iphone-3', () => {
        cy.viewport('iphone-3')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/iphone-3`)
    })

    it('DGL set the viewport ipad-2-portrait', () => {
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/ipad-2-portrait`)
    })

    it('DGL set the viewport iphone-4-landscape', () => {
        cy.viewport('iphone-4', 'landscape')
        cy.wait(200)
        cy.screenshot(`${snapshotFolder}/iphone-4-landscape`)
    })
})