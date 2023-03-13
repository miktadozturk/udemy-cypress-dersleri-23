export class Homepage {
    navigate() {
        cy.visit('https://cypress.io')
        return this;
    }

    pricingBtn() {
        cy.get('nav > div > ul > li:nth-child(5) > a').click()
    }
}