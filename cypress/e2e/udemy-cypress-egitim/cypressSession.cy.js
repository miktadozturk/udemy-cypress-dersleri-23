describe('Cypress Session Kullanimi', () => {
    beforeEach(() => {
        const username = 'deneme@test.com'
        const password = 'deneme123'
        cy.loginWithSession(username, password)
    });

    const { faker } = require('@faker-js/faker')
    let randomTitle = faker.random.words()
    it('Siteye git ve bir makale ekle', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('New Post').click()
        cy.get("input[placeholder = 'Article Title']").type(randomTitle)
        cy.get('input[placeholder = "What\'s this article about?"]').type('Udemy Cypress Dersleri')
        cy.get("textarea[placeholder = 'Write your article (in markdown)']").type('Sifirdan ileri seviye Cypress')
        cy.get("input[placeholder = 'Enter tags']").type('cypress')
        cy.contains('Publish Article').click()
        cy.contains('Edit Article').should('be.visible')
    });

    it('Global Feeds\'e git ve dogrula', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('div.feed-toggle > ul > li:nth-child(2) > a').click()
        cy.get('div:nth-child(1) > a > h1').should('be.visible').and('contain', randomTitle)
    });
});