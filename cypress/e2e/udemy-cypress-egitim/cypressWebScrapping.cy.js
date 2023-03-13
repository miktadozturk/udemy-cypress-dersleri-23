describe('web scrapping', () => {
    it('write file to txt for products', () => {

        cy.step('Shopist.io sandalyeler sayfasina gidiyor')
        cy.visit('https://shopist.io/department/chairs')

        cy.step("Description class icindeki sandalye adi ve fiyatlarinin uzunlugu")
        cy.get('.description').as('chairsPrice').its('length').should('eq', 9)

        const results = [];
        cy.step('Sonuclari logluyoruz')
        cy.get('@chairsPrice').each(($el, index) => {
            
            cy.log("Results: " + index + "- " + $el.text())
            results.push($el.text())
        }).then(() => {
            cy.step('Sonuclari chairsPrice.txt file yazdiriyoruz')
            cy.writeFile('CypressWriteFileDoc/chairsPrice.txt', results)
        })
    });
});