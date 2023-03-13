describe('Shadow ve Find Kullanimi', () => {
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {return false})
    });
    it('Shadow ve Find Kullanimina Ornek Test', () => {
        cy.visit('https://www.mercedes-benz.co.uk/passengercars.html')

        //Agree to All butonuna tiklayacagiz
        cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]').shadow()
        .find('cmm-buttons-wrapper[class="hydrated"]')
        .find('[data-test="handle-accept-all-button"]')
        .should('be.visible').contains('Agree to all').click()
    });
});