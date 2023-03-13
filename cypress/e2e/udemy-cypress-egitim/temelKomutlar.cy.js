describe('Temel Komutlar', () => {
    it('Temel Komutlar cy.visit Kullanimi', () => {
        cy.visit("/") // baseUrl tanimlandiysa 
        cy.visit("/commands") //baseUrl tanimlandiysa sadece path
        cy.visit("https://example.cypress.io/commands") //baseUrl tanimlanmadiysa
        cy.visit({
            url: "https://example.cypress.io/", //baseUrl tanimlanmadiysa
            method: 'GET'
        })
    });

    it('Temel Komutlar cy.title Kullanimi', () => {
        cy.title().should('eq', "cypress.io") //title tam esitlik olursa dogrular
        cy.title().should('include', 'cypress')//title icerisinde cypress geciyorsa dogrular
        cy.title().should('contain', 'cypress')//title icerisinde cypress geciyorsa dogrular
    });

    it('Temel Komutlar cy.url ve cy.location Kullanimi', () => {
        cy.url().should('eq', 'https://example.cypress.io/commands') //url tam esitlik olursa dogrular
        cy.url().should('include', '/commands')//url icerisinde commands geciyorsa dogrular

        cy.location('pathname').should('eq', '/commands')//gidilen pathi dogrulamis oluyoruz
        cy.location('protocol').should('eq', "https")//gidilen protokolu dogrular
        cy.location('hostname').should('eq', "https://example.cypress.io/")//tam esitlikte dogrular
        cy.location('hostname').should('include', "cypress.io")//cypress.io icerirse hostname dogrular.
    });

    it('Temel Komutlar cy.get Kullanimi', () => {
        cy.get("#button")//dogru kullanim
        cy.get('#button').as('deneme') // cy.get('@deneme')
        cy.get('a[href="example.cypress.io"]')
        cy.get('.dropdown-menu-list')
        cy.get('div.button')
        cy.get('ul li:first')
    });

    it('Temel Komutlar cy.log Kullanimi', () => {
        cy.log('Temel Komut cy.log Kullanimi')
        cy.log('be.visible')
        cy.log('Bir mesaj', ['bir mesaj', 'iki mesaj', 'uc mesaj']) // Cikti:  Bir mesaj, [bir mesaj, iki mesaj, uc mesaj]
    });
});