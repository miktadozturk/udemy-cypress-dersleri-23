import { Homepage } from "../../pageObjectModel/homepage";
const homepagePom = new Homepage()

import HomepageSecond from "../../pageObjectModel/homepageSecond";
describe('Page Object Model 1nci Kullanimi', () => {
    it('Page object model kullanim ornekleri', () => {
        homepagePom.navigate()
        homepagePom.pricingBtn()
    });
});

describe.only('Page Object Model 2nci Kullanim', () => {
    it('Page object model kullanim ornekleri', () => {
        HomepageSecond.navigate()
        HomepageSecond.pricingBtn.should('be.visible').and('contain', "Pricing").click()
    });
});


import singleSignOn from "../../support/pageObjects/components/singleSignOn";
import homepage from "../../support/pageObjects/pages/homepage";
import credentials from "../../fixtures/credentials.json"

describe('Abo Logout Suite', { tags: '@regression'}, () => {
    it('Login successfully, then mouse hover to the my account tab in the upper right corner and click on logout', () => {
        cy.setCookieForBeta()
        homepage.navigate()
        homepage.acceptCookies()
        singleSignOn.chooseLoginTab()
        cy.login(credentials.userEmail, credentials.userPassword)
        singleSignOn.closeLoginModal()
        cy.wait(500)
        cy.reload()
        singleSignOn.verifyUserLoggedIn()
        cy.logout()
    });
})