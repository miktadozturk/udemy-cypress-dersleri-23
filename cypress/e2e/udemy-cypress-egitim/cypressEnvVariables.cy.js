describe('Cypress Env Variables', () => {
    it('Ortam Degiskenleri kullanim ornegi', () => {
        cy.visit(Cypress.env('saucedemo'))
    });
});