describe('Cypress Fixture Kullanimi', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/login')
    });
    it('Cypress Fixture Data Kullanim Ornek Invalid Username Valid Password', () => {
        cy.fixture("loginData").as('credentials')
        cy.get('@credentials').then((data) => {
            cy.login(data.invalidUsername, data.validPassword)
        })
    });

    it('Cypress Fixture Data Kullanim Ornek Valid Username Invalid Password', () => {
        cy.fixture("loginData").as('credentials')
        cy.get('@credentials').then((data) => {
            cy.login(data.validUsername, data.invalidPassword)
        })
    });
});