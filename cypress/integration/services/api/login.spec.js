/// <reference types="Cypress" />

context('Test API from DGL Apis', () =>{
    it('Test POST login DGL', () => {
        cy.request({
            method: 'POST',
            followRedirect: false, log: true,
            url: 'https://dgl-acct-dev.addtechhub.com/api/v1/login/accountant/email',
            body: {
                "email":"jeerawat@addtechhub.com",
                "password":"#Dgl.1901",
                "remember":false
            },
            headers: {
                'accept': 'application/json'
            },
            response: []
        }).then(res => {
            cy.log(res.body)
            assert.equal(res.status, 200)
            expect(res.body).to.not.be.null
            cy.writeFile('/Users/jeerawat_dev/Developments/Projects/dgl-testing/test-result-api.json', res.body)
        })
    })
})