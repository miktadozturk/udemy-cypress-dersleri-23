describe('Cypress Studio Kullanimi', () => {
    it('ornek kullanim', () => {
        cy.visit('https://shopist.io/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.chairs > .menu-item-large-container > .menu-item-large').click();
        cy.get(':nth-child(2) > :nth-child(1) > a > .product-card > img').click();
        cy.get('.purchase-button').click();
        cy.get('.cart > .menu-item-large-container > .menu-item-large').click();
        cy.get('.checkout').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Google Ziyaret', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb > .QS5gu').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Amazon Champions League', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://www.amazon.de');
        cy.get('#rXTOJK6WGGcANP1qvLG2iQ > .a-cardui-body > .a-link-normal > .a-section > .landscape-image').click();
        /* ==== End Cypress Studio ==== */
    });
});