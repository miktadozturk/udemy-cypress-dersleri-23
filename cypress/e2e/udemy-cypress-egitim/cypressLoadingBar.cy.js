describe('Loading Bar Testing', () => {
    it('Loading bar', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')

        cy.get('button').click()
        cy.get('#loading', {timeout: 10000}).should('have.attr', 'style', 'display: none;')
        cy.get('#finish > h4').should('be.visible').and('contain', 'Hello World')
    });
});