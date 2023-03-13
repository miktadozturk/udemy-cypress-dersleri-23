describe('Before After Kullanimi', () => {
    beforeEach(() => {
        cy.log('BeforeEach Kullanimi - Cypress Test')
        cy.visit('https://automationexercise.com/')
    });

    afterEach(() => {
        cy.log('AfterEach Kullanimi icin bir ornek')
    });

    it('Basligi dogrula', () => {
        cy.title().should('eq', "Automation Exercise")
    });

    it('url dogrula', () => {
        cy.url().should('include', "automation")
    });

    it('hostname dogrula', () => {
        cy.location('hostname').should('include', "automation")
    });
});