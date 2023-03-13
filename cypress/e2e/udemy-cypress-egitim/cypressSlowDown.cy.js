import { slowCypressDown } from 'cypress-slow-down'

const { faker } = require('@faker-js/faker')

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.name.firstName()

slowCypressDown(false)
describe('Slow Down Kullanimi', () => {
    it('slowdown ile ornek test', () => {
        cy.slowDown(500)
        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.slowDownEnd()
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()
    });

    it('slowdown ile ornek test-2', () => {
        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()
        cy.get("input[data-qa='login-email']").invoke('prop', "validationMessage")
        .should('eq', `Please include an '@' in the email address. '${fakeName}' is missing an '@'.`)
    });
});