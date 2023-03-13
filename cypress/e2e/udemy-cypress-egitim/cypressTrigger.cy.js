describe('Trigger Kullanimi', () => {
    it('Mouseover Kullanimi', () => {
        cy.visit('https://www.amazon.de/')
        cy.get('span#nav-link-accountList-nav-line-1')
        .trigger('mousedown')
        .trigger('mouseleave')
        cy.get("div#nav-al-your-account a:nth-child(2) > span").click()
    });

    it('Mouseover Kullanimi - 2', () => {
        cy.visit('https://www.amazon.de/')
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown', {button: 0}) //mouse'in sol tiklamasi icin
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown', {button: 1}) //mouse'in orta tiklamasi icin
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown', {button: 2}) //mouse'in sag tiklamasi icin
        cy.get("div#nav-al-your-account a:nth-child(10) > span").click()
    });
});