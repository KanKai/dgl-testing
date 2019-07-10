/// <reference types="Cypress" />

class DGLUploadProduct {
    static gotoProductPage() {
        cy.get('.nb-menu').click()
        cy.xpath('//*[@id="4"]/label').click()
    }

    static gotoCreateProductPage() {
        cy.get('#btn-oe-save').find('span > mat-icon')
            .should($x => {
                expect($x).to.have.length(1)
            })
            .then($x => {
                expect($x).to.have.text('add')
            }).as('btnCreate')
        cy.get('@btnCreate').click()  
    }

    static importImage() {
        cy.fixture('asus.jpg','base64').then(fileContent => {
            cy.get('#pd-input-file-image').upload(
                {
                    fileContent,
                    fileName: 'asus.jpg',
                    mimeType: 'image/jpg'
                },
                {
                    uploadType:'input'
                }
            )
        })
    }

    static performProduct(productInfo) {
        cy.get('#pd-input-productgroup-name').debug().type(productInfo.productgroup, { delay: 100 });
        cy.get('#pd-input-productunit-name').debug().type(productInfo.productunit, { delay: 100 });
        cy.get('#pd-input-nameTH').debug().type(productInfo.nameTH, { delay: 100 });
        cy.get('#pd-input-nameEN').debug().type(productInfo.nameEN, { delay: 100 });
        cy.get('#pd-input-unitprice').debug().type(productInfo.unitprice, { delay: 100 });
        cy.get('#pd-textarea-remark').debug().type(productInfo.remark, { delay: 100 });
    }

    static clickButtonSave() {
        cy.get('#pd-button-submit').scrollIntoView()
    }

    static checkCompany() {
        cy.server()
        cy.route({
            method: 'GET',
            url: '/api/v1/company'
        }).as('company')
        cy.get('@company').then(company => {
            cy.log(company)
        })
    }

    static confirmProductPage() {
        cy.xpath("/html/body/app-root/app-home-layout/app-layout/nb-layout/div/div/div/div/div/nb-layout-column/div/app-product/div[1]").find('label')
            .should($x => {
                expect($x).to.have.length(1)
            }).then($x => {
                expect($x).to.have.text('สินค้า')
            })
    }
}

export default DGLUploadProduct