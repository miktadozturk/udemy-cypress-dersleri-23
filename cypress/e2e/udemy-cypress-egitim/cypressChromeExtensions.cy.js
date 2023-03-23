describe('Chrome Extensions 1 ', function () {

    it('extensions 1 ', function () {

        cy.viewport(1536, 746)

        cy.visit('https://shopist.io/')

        cy.get('.navigation > .navbar-section > .lighting > .menu-item-large-container > .menu-item-large').click()

        cy.visit('https://shopist.io/department/lighting')

        cy.get('.products > .product-card-container > div > .product-card > img').click()

        cy.get('#\__layout > div > .modal-sold-out > .modal-sold-out-content > .modal-button').click()

        cy.get('.product-card-container:nth-child(2) > div > a > .product-card > img').click()

        cy.visit('https://shopist.io/department/lighting/product/29')

        cy.get('section > .item > .description > div > .purchase-button').click()

        cy.get('.navigation > .navbar-section > .cart > .menu-item-large-container > .menu-item-large').click()

        cy.visit('https://shopist.io/cart')

        cy.get('.product > .product-description > .product-bottom > .product-counter > .remove-button').click()

        cy.get('div > .navbar-large > a > .brand-large > img').click()

        cy.visit('https://shopist.io/')

    })

})

describe('Chrome Extensions 2 ', () => {
    it('extensions 2 ', () => {
        cy.visit('https://shopist.io/');
        cy.url().should('contains', 'https://shopist.io/department/sofas');
        cy.url().should('contains', 'https://shopist.io/department/sofas/product/13');
        cy.url().should('contains', 'https://shopist.io/profile');
        cy.url().should('contains', 'https://shopist.io/');
        cy.url().should('contains', 'https://shopist.io/department/lighting');
        cy.url().should('contains', 'https://shopist.io/department/lighting/product/30');
        cy.get('.purchase-button').click();
        cy.url().should('contains', 'https://shopist.io/cart');
        cy.get('.checkout').click();
        cy.url().should('contains', 'https://shopist.io/');

    });
});
