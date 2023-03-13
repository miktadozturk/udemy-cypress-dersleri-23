describe('Before After Kullanimi', () => {
    before(() => {
        cy.log('Before Kullanimi - Cypress Test')
        cy.visit('https://automationexercise.com/')
    });

    after(() => {
        cy.log('After Kullanimi icin bir ornek')
    });

    it('Basligi dogrula', () => {
        cy.title().should('eq', "Automation Exercise")
    });
});