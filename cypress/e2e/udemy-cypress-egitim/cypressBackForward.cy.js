describe('Back Forward Kullanimi', () => {
    it('cypress.io sayfasina gidip tarayicida ileri geri komutlarini ogrenecegiz', () => {
        cy.visit('https://www.cypress.io/')

        cy.get('nav > div > ul > li:nth-child(5) > a').click()
        cy.title().should('eq', "Cypress Cloud Pricing | Choose the plan that's right for you")

        cy.go('back') //anasayfaya donecek
        cy.title().should('eq', "JavaScript Web Testing and Component Testing Framework | cypress.io")

        cy.go('forward') //pricing sayfasina gidecek
        cy.title().should('eq', "Cypress Cloud Pricing | Choose the plan that's right for you")

        cy.go(-1) //anasayfaya donecek
        cy.title().should('eq', "JavaScript Web Testing and Component Testing Framework | cypress.io")

        cy.go(1) //pricing sayfasina gidecek
        cy.title().should('eq', "Cypress Cloud Pricing | Choose the plan that's right for you")
    });
});