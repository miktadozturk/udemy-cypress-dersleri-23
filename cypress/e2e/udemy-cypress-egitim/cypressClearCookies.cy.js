describe('Cypress Clear Cookies',() => {
    it('Dosya yukleme - 1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.getCookies()
        cy.clearCookies()
        cy.getCookies().should('have.length', 0)
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.logo-preview').attachFile({filePath: "photo.jpg"}, {subjectType: 'drag-n-drop'})
    });

    it('Dosya yukleme - 2', () => {
        const fileName = 'aslan.jpg'
        cy.fixture('aslan.jpg')
        .then(Cypress.Blob.base64StringToBlob)//convert islemi icin
        .then((fileContent) => {
            cy.get('.logo-preview').attachFile(
                {fileContent, fileName, mimeType: 'image/**'}, {subjectType: 'drag-n-drop'}
            )
        })
    });
});