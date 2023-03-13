describe('Alias, Then, Each, Wrap', () => {
    it('Kullanim Ornegi', () => {
        let itemlength
        cy.visit('https://shopist.io/')

        cy.get('.navbar-section a').as('NavbarMenus') //Alias Ornek
        cy.get('@NavbarMenus')
        .then(($el) => {
            itemlength = $el.length
        })
        .each(($el, index) => {
            // cy.log($el.text())
            cy.get('@NavbarMenus').should('be.visible')
            cy.log('Navbar Menu ' + index + ": " + $el.text())

            if ($el.text().includes('Bedding')) {
                cy.wrap($el).click()
            }

        })
    });
});