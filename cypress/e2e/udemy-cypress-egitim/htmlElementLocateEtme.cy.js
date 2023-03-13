describe('Cypress Locator', () => {
    it('Html element locate etme', () => {
        cy.get('#user-name') // id Locate etme
        cy.get('.login-box') // class Locate etme
        cy.get('input') // tag Locate etme
        cy.get('input[name="user-name"]') // attribute locate
        cy.get('a:contains("Login")') // Text iceren element locate
        cy.get('a').contains("Login")
        cy.contains('Login')
    });
});