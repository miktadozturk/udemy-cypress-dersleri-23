describe('Screenshot Kullanimi', () => {
    it('Ekran goruntusu alalim', () => {
        cy.visit('www.google.com')
        cy.screenshot()
    });
});